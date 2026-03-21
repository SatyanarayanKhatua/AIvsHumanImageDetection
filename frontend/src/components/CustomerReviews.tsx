
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type Review = {
  id: number;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatarUrl: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Digital Journalist",
    rating: 5,
    comment: "AI Image Detector has become an essential tool in my workflow. Being able to quickly verify if images have been AI-generated has saved me from publishing misleading content multiple times.",
    avatarUrl: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Content Moderator",
    rating: 4,
    comment: "We've integrated AI Image Detector into our content moderation pipeline and it's dramatically improved our detection of synthetic media. The accuracy is impressive.",
    avatarUrl: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Photographer",
    rating: 5,
    comment: "As someone who creates authentic imagery, I appreciate having a tool that helps distinguish real photography from AI-generated content. It helps protect the value of my work.",
    avatarUrl: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const CustomerReviews = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 gradient-text">Customer Reviews</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          See what our users are saying about their experience with AI Image Detector
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] animate-fade-in"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={review.avatarUrl} 
                    alt={`${review.name}'s avatar`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={cn(
                      "mr-1",
                      i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    )}
                  />
                ))}
              </div>
              
              <p className="text-gray-600">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
