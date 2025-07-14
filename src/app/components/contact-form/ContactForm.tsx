'use client';

import { useState } from 'react';
import { Mail, User, MessageSquare, Send } from 'lucide-react';
import toast from 'react-hot-toast';

interface ContactFormProps {
  title?: string;
  description?: string;
  showSubject?: boolean;
  className?: string;
}

export default function ContactForm({ 
  title = "Get In Touch", 
  description = "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  showSubject = true,
  className = ""
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      submitData.append('type', 'contact');
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      if (showSubject && formData.subject) {
        submitData.append('subject', formData.subject);
      }
      submitData.append('message', formData.message);

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white/70 dark:bg-white/5 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-dark_black/10 dark:border-white/10 ${className}`}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-dark_black dark:text-white mb-4">
          {title}
        </h2>
        <p className="text-dark_black/60 dark:text-white/60">
          {description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="flex items-center text-sm font-medium text-dark_black dark:text-white mb-2">
            <User className="w-4 h-4 mr-2" />
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-dark_black/20 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-[#009444] focus:border-transparent dark:bg-white/5 dark:text-white transition-all backdrop-blur-sm"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="flex items-center text-sm font-medium text-dark_black dark:text-white mb-2">
            <Mail className="w-4 h-4 mr-2" />
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-dark_black/20 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-[#009444] focus:border-transparent dark:bg-white/5 dark:text-white transition-all backdrop-blur-sm"
            placeholder="Enter your email address"
          />
        </div>

        {/* Subject (optional) */}
        {showSubject && (
          <div>
            <label className="flex items-center text-sm font-medium text-dark_black dark:text-white mb-2">
              <MessageSquare className="w-4 h-4 mr-2" />
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-dark_black/20 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-[#009444] focus:border-transparent dark:bg-white/5 dark:text-white transition-all backdrop-blur-sm"
              placeholder="What's this about?"
            />
          </div>
        )}

        {/* Message */}
        <div>
          <label className="flex items-center text-sm font-medium text-dark_black dark:text-white mb-2">
            <MessageSquare className="w-4 h-4 mr-2" />
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-dark_black/20 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-[#009444] focus:border-transparent dark:bg-white/5 dark:text-white transition-all resize-none backdrop-blur-sm"
            placeholder="Tell us what you have in mind..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center px-6 py-4 bg-[#009444] text-white rounded-full font-semibold hover:bg-[#009444]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#009444] focus:ring-offset-2 dark:focus:ring-offset-gray-900 border border-[#009444]"
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending...
            </div>
          ) : (
            <div className="flex items-center">
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </div>
          )}
        </button>
      </form>
    </div>
  );
}
