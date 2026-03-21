import React, { useState, useCallback } from 'react';
import { Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import ResultsDisplay from './ResultsDisplay';

const ImageUploader = () => {
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<number | null>(null);
  const { toast } = useToast();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (!uploadedFile) return;

    // Check file size (limit to 5MB)
    if (uploadedFile.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 5MB",
        variant: "destructive",
      });
      return;
    }

    // Check file type
    if (!uploadedFile.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive",
      });
      return;
    }

    setFileName(uploadedFile.name);
    setFile(uploadedFile);

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(uploadedFile);

    setResult(null);
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const droppedFile = e.dataTransfer.files?.[0];
    if (!droppedFile) return;

    // Check file type and size as above
    if (droppedFile.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 5MB",
        variant: "destructive",
      });
      return;
    }

    if (!droppedFile.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive",
      });
      return;
    }

    setFileName(droppedFile.name);
    setFile(droppedFile);

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(droppedFile);

    setResult(null);
  }, [toast]);

  const analyzeImage = async () => {
    if (!file) return;

    setIsAnalyzing(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to get prediction');
      }

      const data = await response.json();
      setResult(data.result);
      setConfidence(data.confidence); // Use only the `result` field from the backend
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to analyze the image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetImage = () => {
    setImage(null);
    setFile(null);
    setFileName('');
    setResult(null);
  };

  return (
    <div className="w-full space-y-6">
      {!image ? (
        <div
          className="border-2 border-dashed border-white/30 rounded-xl p-8 text-center cursor-pointer hover:border-white/50 transition-colors"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-upload')?.click()}
        >
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <Upload className="h-10 w-10 mx-auto mb-4 text-white/70" />
          <p className="text-white font-medium mb-2">Drag and drop your image here</p>
          <p className="text-white/70 text-sm">or click to browse (max 5MB)</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative">
            <img
              src={image}
              alt="Uploaded"
              className="w-full h-auto rounded-lg object-contain max-h-80"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-2 right-2 bg-white/90 hover:bg-white"
              onClick={resetImage}
            >
              <X className="h-4 w-4" />
            </Button>
            <p className="mt-2 text-sm text-white/80 text-center">{fileName}</p>
          </div>

          {result ? (
            <div className="text-center text-white">
              <p className={`text-lg font-bold ${result === "AI-generated" ? "text-red-400" : "text-green-400"}`}>
                Prediction: {result} {confidence !== null && `(${(confidence * 100).toFixed(2)}%)`}
              </p>
            </div>
          ) : (
            <Button
              className="w-full bg-white hover:bg-white/90 text-blue-600"
              onClick={analyzeImage}
              disabled={isAnalyzing}
            >
              {isAnalyzing ? (
                <>
                  <div className="mr-2 h-4 w-4 rounded-full border-2 border-blue-600 border-r-transparent animate-spin"></div>
                  Analyzing...
                </>
              ) : (
                <>Analyze Image</>
              )}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
