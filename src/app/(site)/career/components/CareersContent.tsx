'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Job } from '@/types/jobs';
import JobCard from './JobCard';
import JobApplicationModal from './JobApplicationModal';
import jobsData from '@/data/jobs.json';

export default function CareersContent() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    setJobs(jobsData as Job[]);
  }, []);

  const filteredJobs = jobs.filter(job => 
    filter === 'all' || job.type.toLowerCase().includes(filter.toLowerCase())
  );

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const bottomAnimation = {
    initial: { y: '20%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.3 },
  };

  return (
    <section>
      <div className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-[#b2d8c5] before:via-[#e0f2e9] before:to-[#c2ede1] before:rounded-full before:top-24 before:blur-3xl before:opacity-20 before:-z-10 dark:before:from-[#4d6659] dark:before:via-[#009444] dark:before:to-[#38f9d7] dark:before:rounded-full dark:before:blur-3xl dark:before:opacity-20 dark:before:-z-10">
        <div className='container relative z-10'>
          <div className='flex flex-col gap-10 md:gap-20'>
            {/* Header Section */}
            <motion.div
              {...bottomAnimation}
              className='relative flex flex-col text-center items-center gap-4'
            >
              <h1 className='font-medium w-full max-w-32'>
                Join Our Amazing
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}
                  Team
                </span>
              </h1>
              <p className='max-w-38 text-dark_black/60 dark:text-white/60'>
                We're always looking for talented individuals to join our innovative team. 
                Discover exciting opportunities and help us build the future together.
              </p>
            </motion.div>
            
            {/* Filter Buttons */}
            <motion.div 
              initial={{ y: '10%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              {['all', 'full-time', 'internship', 'contract'].map((filterType) => (
                <button
                  key={filterType}
                  onClick={() => setFilter(filterType)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                    filter === filterType
                      ? 'bg-[#009444] text-white border border-[#009444]'
                      : 'bg-white/10 dark:bg-white/5 text-dark_black dark:text-white border border-dark_black/20 dark:border-white/20 hover:bg-[#009444]/10 dark:hover:bg-[#009444]/20 hover:border-[#009444]'
                  }`}
                >
                  {filterType.charAt(0).toUpperCase() + filterType.slice(1).replace('-', ' ')}
                </button>
              ))}
            </motion.div>

            {/* Jobs Grid */}
            <motion.div 
              initial={{ y: '10%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ y: '20%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <JobCard
                    job={job}
                    onApplyClick={() => handleApplyClick(job)}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* No Jobs Message */}
            {filteredJobs.length === 0 && (
              <motion.div 
                initial={{ y: '20%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center py-20"
              >
                <h3 className="text-2xl font-semibold text-dark_black/60 dark:text-white/60 mb-4">
                  No positions found
                </h3>
                <p className="text-dark_black/40 dark:text-white/40">
                  Try adjusting your filters or check back later for new opportunities.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <JobApplicationModal
          isOpen={isModalOpen}
          onClose={closeModal}
          job={selectedJob}
        />
      )}
    </section>
  );
}
