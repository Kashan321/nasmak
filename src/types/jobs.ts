export interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Contract' | 'Freelance';
  requirements: string[];
  responsibilities: string[];
  salary: string;
  postedDate: string;
  applicationDeadline: string;
}

export interface JobApplication {
  jobId: string;
  jobTitle: string;
  applicantName: string;
  applicantEmail: string;
  message: string;
  resumeFile?: File;
}

export interface ContactForm {
  name: string;
  email: string;
  subject?: string;
  message: string;
  type: 'contact' | 'job-application';
}
