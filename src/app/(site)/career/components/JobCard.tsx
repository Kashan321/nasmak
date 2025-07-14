'use client';

import { Job } from '@/types/jobs';
import { MapPin, Clock, Calendar } from 'lucide-react';

interface JobCardProps {
  job: Job;
  onApplyClick: () => void;
}

export default function JobCard({ job, onApplyClick }: JobCardProps) {
  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'full-time':
        return 'bg-[#009444] text-white';
      case 'part-time':
        return 'bg-blue text-white';
      case 'internship':
        return 'bg-orange text-white';
      case 'contract':
        return 'bg-purple text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white/70 dark:bg-white/5 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-dark_black/10 dark:border-white/10 group hover:scale-105 backdrop-blur-sm">
      {/* Job Type Badge */}
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(job.type)}`}>
          {job.type}
        </span>
        <div className="flex items-center text-dark_black/50 dark:text-white/50 text-sm">
          <Calendar className="w-4 h-4 mr-1" />
          {formatDate(job.postedDate)}
        </div>
      </div>

      {/* Job Title */}
      <h3 className="text-xl font-bold text-dark_black dark:text-white mb-3 group-hover:text-[#009444] transition-colors">
        {job.title}
      </h3>

      {/* Job Description */}
      <p className="text-dark_black/60 dark:text-white/60 mb-4 line-clamp-3">
        {job.description}
      </p>

      {/* Job Details */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center text-dark_black/50 dark:text-white/50">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{job.location}</span>
        </div>
        <div className="flex items-center text-dark_black/50 dark:text-white/50">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm">Deadline: {formatDate(job.applicationDeadline)}</span>
        </div>
      </div>

      {/* Salary */}
      <div className="mb-6">
        <p className="text-lg font-semibold text-[#009444]">
          {job.salary}
        </p>
      </div>

      {/* Requirements Preview */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-dark_black dark:text-white mb-2">
          Key Requirements:
        </h4>
        <ul className="text-sm text-dark_black/60 dark:text-white/60 space-y-1">
          {job.requirements.slice(0, 2).map((req, index) => (
            <li key={index} className="flex items-start">
              <span className="w-1 h-1 bg-[#009444] rounded-full mt-2 mr-2 flex-shrink-0"></span>
              {req}
            </li>
          ))}
          {job.requirements.length > 2 && (
            <li className="text-[#009444] text-xs font-medium">
              +{job.requirements.length - 2} more requirements
            </li>
          )}
        </ul>
      </div>

      {/* Apply Button */}
      <button
        onClick={onApplyClick}
        className="group w-full bg-[#009444] text-white py-3 px-6 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#009444] focus:ring-offset-2 dark:focus:ring-offset-gray-900 border border-[#009444] hover:bg-transparent hover:text-[#009444]"
      >
        Apply Now
      </button>
    </div>
  );
}
