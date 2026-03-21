
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CalendarIcon, ClockIcon, User } from 'lucide-react';

const BlogPosts = [
  {
    id: 1,
    title: "How AI Image Detection Technology Works",
    excerpt: "Learn about the advanced algorithms that enable our system to identify AI-generated images with high accuracy.",
    date: "April 1, 2025",
    author: "Dr. Emma Chen",
    readTime: "5 min read",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "The Rise of Deepfakes and Their Impact on Society",
    excerpt: "As AI-generated content becomes more prevalent, understanding the implications for trust and authenticity is crucial.",
    date: "March 28, 2025",
    author: "Michael Thompson",
    readTime: "8 min read",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Protecting Your Online Content from AI Manipulation",
    excerpt: "Practical strategies to safeguard your original creative work in an era of advanced AI image generators.",
    date: "March 22, 2025",
    author: "Sarah Williams",
    readTime: "6 min read",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "AI Detection Tools: A Comparative Analysis",
    excerpt: "We compare the top AI content detection tools and their effectiveness in identifying artificially generated images.",
    date: "March 15, 2025",
    author: "James Liu",
    readTime: "10 min read",
    image: "/placeholder.svg"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 gradient-text">AI Image Detector Blog</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news and insights about AI-generated imagery, detection methods, and digital authenticity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BlogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <div className="flex items-center mr-4">
                      <CalendarIcon size={14} className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center mr-4">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button>Load More Articles</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
