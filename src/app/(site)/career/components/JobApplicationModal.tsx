'use client';

import { useState } from 'react';
import { Job } from '@/types/jobs';
import { X, Upload, Mail, User, MessageSquare, FileText, CheckCircle, MapPin, Calendar, DollarSign, Users } from 'lucide-react';
import toast from 'react-hot-toast';

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: Job;
}

export default function JobApplicationModal({ isOpen, onClose, job }: JobApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size must be less than 5MB');
        return;
      }
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        toast.error('Please upload a PDF or Word document');
        return;
      }
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      submitData.append('type', 'job-application');
      submitData.append('jobId', job.id);
      submitData.append('jobTitle', job.title);
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('message', formData.message);
      
      if (resumeFile) {
        submitData.append('resume', resumeFile);
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Application submitted successfully!');
        setFormData({ name: '', email: '', message: '' });
        setResumeFile(null);
        onClose();
      } else {
        toast.error(result.message || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-dark_black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-white/95 dark:bg-dark_black/95 backdrop-blur-xl rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto border border-dark_black/20 dark:border-white/20 shadow-2xl">
        {/* Enhanced Header with Job Info */}
        <div className="relative bg-gradient-to-r from-[#009444]/10 via-[#009444]/5 to-transparent p-8 border-b border-dark_black/10 dark:border-white/10">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 hover:bg-white/20 dark:hover:bg-white/10 rounded-xl transition-colors z-10"
          >
            <X className="w-6 h-6 text-dark_black/70 dark:text-white/70" />
          </button>
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#009444] to-[#00b355] rounded-2xl flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-dark_black dark:text-white">
                  Apply for {job.title}
                </h2>
                <p className="text-dark_black/60 dark:text-white/60 text-lg">
                  Join our team at Nasmak Labs
                </p>
              </div>
            </div>
            
            {/* Job Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center gap-3 bg-white/30 dark:bg-white/10 p-4 rounded-xl">
                <MapPin className="w-5 h-5 text-[#009444]" />
                <div>
                  <p className="text-xs text-dark_black/50 dark:text-white/50 font-medium">Location</p>
                  <p className="text-sm font-semibold text-dark_black dark:text-white">{job.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/30 dark:bg-white/10 p-4 rounded-xl">
                <Calendar className="w-5 h-5 text-[#009444]" />
                <div>
                  <p className="text-xs text-dark_black/50 dark:text-white/50 font-medium">Type</p>
                  <p className="text-sm font-semibold text-dark_black dark:text-white">{job.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/30 dark:bg-white/10 p-4 rounded-xl">
                <DollarSign className="w-5 h-5 text-[#009444]" />
                <div>
                  <p className="text-xs text-dark_black/50 dark:text-white/50 font-medium">Salary</p>
                  <p className="text-sm font-semibold text-[#009444]">{job.salary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Job Details Section */}
        <div className="p-8 border-b border-dark_black/10 dark:border-white/10 bg-gradient-to-r from-transparent via-[#009444]/5 to-transparent">
          <h3 className="flex items-center font-bold text-dark_black dark:text-white mb-4 text-xl">
            <Users className="w-5 h-5 mr-2 text-[#009444]" />
            About this Position
          </h3>
          <p className="text-dark_black/70 dark:text-white/70 mb-6 leading-relaxed text-lg">{job.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/40 dark:bg-white/10 p-6 rounded-2xl">
              <h4 className="font-semibold text-dark_black dark:text-white mb-4 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-[#009444]" />
                Key Requirements
              </h4>
              <ul className="space-y-3">
                {job.requirements.slice(0, 4).map((req, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#009444] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-dark_black/70 dark:text-white/70">{req}</span>
                  </li>
                ))}
                {job.requirements.length > 4 && (
                  <li className="text-[#009444] text-sm font-medium ml-5">
                    +{job.requirements.length - 4} more requirements
                  </li>
                )}
              </ul>
            </div>
            <div className="bg-white/40 dark:bg-white/10 p-6 rounded-2xl">
              <h4 className="font-semibold text-dark_black dark:text-white mb-4 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-[#009444]" />
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                {job.responsibilities.slice(0, 4).map((resp, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#009444] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-dark_black/70 dark:text-white/70">{resp}</span>
                  </li>
                ))}
                {job.responsibilities.length > 4 && (
                  <li className="text-[#009444] text-sm font-medium ml-5">
                    +{job.responsibilities.length - 4} more responsibilities
                  </li>
                )}
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-orange/10 to-orange/5 border border-orange/20 rounded-xl">
            <p className="text-sm text-dark_black/70 dark:text-white/70">
              <span className="font-semibold text-orange">Application Deadline:</span> {formatDate(job.applicationDeadline)}
            </p>
          </div>
        </div>

        {/* Enhanced Application Form */}
        <form onSubmit={handleSubmit} className="p-8">
          <h3 className="text-2xl font-bold text-dark_black dark:text-white mb-6 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-[#009444]" />
            Submit Your Application
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="flex items-center text-sm font-semibold text-dark_black dark:text-white mb-3">
                <User className="w-4 h-4 mr-2 text-[#009444]" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-4 border border-dark_black/20 dark:border-white/20 rounded-xl focus:ring-2 focus:ring-[#009444] focus:border-transparent dark:bg-white/10 dark:text-white transition-all backdrop-blur-sm text-lg"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center text-sm font-semibold text-dark_black dark:text-white mb-3">
                <Mail className="w-4 h-4 mr-2 text-[#009444]" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-4 border border-dark_black/20 dark:border-white/20 rounded-xl focus:ring-2 focus:ring-[#009444] focus:border-transparent dark:bg-white/10 dark:text-white transition-all backdrop-blur-sm text-lg"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          {/* Resume Upload - Enhanced */}
          <div className="mb-6">
            <label className="flex items-center text-sm font-semibold text-dark_black dark:text-white mb-3">
              <FileText className="w-4 h-4 mr-2 text-[#009444]" />
              Resume / CV (Optional)
            </label>
            <div className="relative">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                id="resume-upload"
              />
              <label
                htmlFor="resume-upload"
                className={`flex items-center justify-center w-full px-6 py-8 border-2 border-dashed rounded-2xl cursor-pointer transition-all backdrop-blur-sm ${
                  resumeFile 
                    ? 'border-[#009444] bg-[#009444]/10' 
                    : 'border-dark_black/30 dark:border-white/30 hover:border-[#009444] hover:bg-[#009444]/5'
                }`}
              >
                <div className="text-center">
                  {resumeFile ? (
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-[#009444] mr-3" />
                      <div>
                        <p className="text-[#009444] font-semibold">{resumeFile.name}</p>
                        <p className="text-dark_black/60 dark:text-white/60 text-sm">
                          {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Upload className="w-10 h-10 mx-auto mb-4 text-dark_black/40 dark:text-white/40" />
                      <p className="text-dark_black/60 dark:text-white/60 font-medium">
                        Drag & drop your resume here, or click to browse
                      </p>
                      <p className="text-dark_black/40 dark:text-white/40 text-sm mt-2">
                        PDF, DOC, DOCX up to 5MB
                      </p>
                    </div>
                  )}
                </div>
              </label>
            </div>
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className="flex items-center text-sm font-semibold text-dark_black dark:text-white mb-3">
              <MessageSquare className="w-4 h-4 mr-2 text-[#009444]" />
              Cover Letter / Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-5 py-4 border border-dark_black/20 dark:border-white/20 rounded-xl focus:ring-2 focus:ring-[#009444] focus:border-transparent dark:bg-white/10 dark:text-white transition-all resize-none backdrop-blur-sm text-lg"
              placeholder="Tell us why you're interested in this position and why you'd be a great fit for our team..."
            />
          </div>

          {/* Enhanced Submit Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-8 py-4 border-2 border-dark_black/20 dark:border-white/20 text-dark_black dark:text-white rounded-2xl hover:bg-dark_black/5 dark:hover:bg-white/10 transition-all font-semibold text-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-8 py-4 bg-gradient-to-r from-[#009444] to-[#00b355] text-white rounded-2xl hover:shadow-xl hover:shadow-[#009444]/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold text-lg transform hover:scale-[1.02] border border-[#009444] relative overflow-hidden"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                  Submitting Application...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Submit Application
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
