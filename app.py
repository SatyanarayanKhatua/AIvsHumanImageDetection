from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing import image

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Enable CORS for all origins

# Configuration
app.config['UPLOAD_FOLDER'] = 'static/uploads'
model = tf.keras.models.load_model("new_model.keras") # Load  trained model

# Ensure the upload folder exists
upload_folder = 'static/uploads'
os.makedirs(upload_folder, exist_ok=True)
print(f"Folder '{upload_folder}' created successfully!")

# Preprocess the image
def preprocess_image(img_path):
    img = image.load_img(img_path, target_size=(224, 224))  
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0) / 255.0  # Normalize
    return img_array

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    filename = file.filename
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
    file.save(file_path)

    try:
        # Preprocess
        img_array = preprocess_image(file_path)

        # Predict
        prediction = model.predict(img_array)

        print("Prediction:", prediction)
        print("Shape:", prediction.shape)

        confidence = float(prediction.flatten()[0])

        if confidence > 0.8:
            result = 'AI-generated'
            confidence_score = confidence
        else:
            result = 'Human-created'
            confidence_score = 1 - confidence

        return jsonify({
            'result': result,
            'confidence': confidence_score
        })

    except Exception as e:
        print("ERROR:", str(e))
        return jsonify({'error': str(e)}), 500

    finally:
        if os.path.exists(file_path):
            os.remove(file_path)

if __name__ == '__main__':
    app.run(debug=True)