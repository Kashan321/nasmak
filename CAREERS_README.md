# Careers Page Documentation

## Overview
The careers page provides a comprehensive job listing system with application functionality for the Nasmak Labs website.

## Features

### 1. Job Listings
- Dynamic job cards displaying position details
- Filtering by job type (Full-time, Part-time, Internship, Contract)
- Responsive grid layout
- Job details include:
  - Title and description
  - Location and type
  - Salary range
  - Key requirements preview
  - Application deadline
  - Posted date

### 2. Job Application Modal
- Modal-based application form
- File upload for resume (PDF, DOC, DOCX - max 5MB)
- Form validation
- Success/error feedback with toast notifications

### 3. Contact API
- Handles both general contact forms and job applications
- Email notifications via Nodemailer
- File attachment support for resumes
- Professional email templates with company branding

## File Structure

```
src/
├── app/
│   ├── (site)/
│   │   └── career/
│   │       ├── page.tsx                 # Main careers page
│   │       └── components/
│   │           ├── CareersContent.tsx   # Main careers component
│   │           ├── JobCard.tsx          # Individual job card
│   │           └── JobApplicationModal.tsx # Application modal
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts                 # Contact/application API
│   │   └── jobs/
│   │       └── route.ts                 # Jobs data API
│   └── components/
│       └── contact-form/
│           └── ContactForm.tsx          # Reusable contact form
├── data/
│   └── jobs.json                        # Job listings data
└── types/
    └── jobs.ts                          # TypeScript interfaces
```

## Setup Instructions

### 1. Environment Variables
Create a `.env.local` file with the following variables:

```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

### 2. Gmail App Password Setup
1. Go to your Google Account settings
2. Security > 2-Step Verification (must be enabled first)
3. App passwords > Generate new password
4. Use the generated 16-character password (not your regular Gmail password)

### 3. Job Data Management
Edit `src/data/jobs.json` to add, remove, or modify job listings. Each job should include:

```json
{
  "id": "unique-job-id",
  "title": "Job Title",
  "description": "Job description...",
  "location": "Remote/City",
  "type": "Full-time/Part-time/Internship/Contract",
  "requirements": ["Requirement 1", "Requirement 2"],
  "responsibilities": ["Responsibility 1", "Responsibility 2"],
  "salary": "$XX,XXX - $XX,XXX",
  "postedDate": "YYYY-MM-DD",
  "applicationDeadline": "YYYY-MM-DD"
}
```

## API Endpoints

### GET /api/jobs
Returns all available job listings.

### POST /api/contact
Handles contact form submissions and job applications.

**Request Body (Job Application):**
```
FormData:
- type: "job-application"
- jobId: string
- jobTitle: string
- name: string
- email: string
- message: string
- resume: File (optional)
```

**Request Body (Contact Form):**
```
FormData:
- type: "contact"
- name: string
- email: string
- subject: string (optional)
- message: string
```

## Components Usage

### ContactForm Component
```tsx
import ContactForm from '@/app/components/contact-form/ContactForm';

<ContactForm
  title="Custom Title"
  description="Custom description"
  showSubject={true}
  className="custom-styling"
/>
```

## Styling
The careers page uses the existing design system with:
- Custom color variables (purple_blue, dark_black, etc.)
- Tailwind CSS classes
- Dark mode support
- Responsive design

## Email Templates
Professional email templates are included for:
- Job applications (with resume attachments)
- General contact form submissions
- Company branding and styling

## Error Handling
- Form validation
- File upload restrictions
- Email sending error handling
- Toast notifications for user feedback

## Future Enhancements
- Admin panel for job management
- Application tracking system
- Email templates customization
- Integration with HR systems
- Candidate profile management
