import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'your-app-password',
  },
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const type = formData.get('type') as string;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    let emailSubject = '';
    let emailHtml = '';

    if (type === 'job-application') {
      const jobId = formData.get('jobId') as string;
      const jobTitle = formData.get('jobTitle') as string;
      const resumeFile = formData.get('resume') as File;

      emailSubject = `Job Application: ${jobTitle} - ${name}`;
      
      emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #4928fd, #ba81ee); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Job Application</h1>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9;">
            <div style="background: white; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
              <h2 style="color: #4928fd; margin-top: 0;">Position Applied For</h2>
              <p style="font-size: 18px; font-weight: bold; color: #333;">${jobTitle}</p>
              <p style="color: #666; margin: 5px 0;"><strong>Job ID:</strong> ${jobId}</p>
            </div>

            <div style="background: white; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
              <h2 style="color: #4928fd; margin-top: 0;">Applicant Information</h2>
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #4928fd;">${email}</a></p>
            </div>

            <div style="background: white; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
              <h2 style="color: #4928fd; margin-top: 0;">Cover Letter / Message</h2>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #4928fd;">
                <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>

            ${resumeFile ? `
            <div style="background: white; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
              <h2 style="color: #4928fd; margin-top: 0;">Resume</h2>
              <p style="margin: 0;"><strong>File:</strong> ${resumeFile.name}</p>
              <p style="margin: 5px 0; color: #666;"><strong>Size:</strong> ${(resumeFile.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
            ` : '<div style="background: white; padding: 25px; border-radius: 10px; margin-bottom: 20px;"><p style="color: #666; margin: 0;"><em>No resume attached</em></p></div>'}

            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #666; font-size: 14px;">This application was submitted through the Nasmak Labs careers page.</p>
            </div>
          </div>
        </div>
      `;
    } else {
      // Regular contact form
      const subject = formData.get('subject') as string;
      emailSubject = subject ? `Contact Form: ${subject}` : `Contact Form Submission from ${name}`;
      
      emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #009444, #00b355); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9;">
            <div style="background: white; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
              <h2 style="color: #009444; margin-top: 0;">Contact Information</h2>
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #009444;">${email}</a></p>
              ${subject ? `<p style="margin: 10px 0;"><strong>Interest:</strong> ${subject}</p>` : ''}
            </div>

            <div style="background: white; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
              <h2 style="color: #009444; margin-top: 0;">Message</h2>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #009444;">
                <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #666; font-size: 14px;">This message was sent through the Nasmak Labs contact form.</p>
            </div>
          </div>
        </div>
      `;
    }

    // Prepare email options
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'contact.pakwakeels@gmail.com',
      subject: emailSubject,
      html: emailHtml,
      attachments: [] as any[],
    };

    // Add resume attachment if provided
    if (type === 'job-application') {
      const resumeFile = formData.get('resume') as File;
      if (resumeFile) {
        const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer());
        mailOptions.attachments.push({
          filename: resumeFile.name,
          content: resumeBuffer,
        });
      }
    }

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        message: type === 'job-application' 
          ? 'Job application submitted successfully!' 
          : 'Message sent successfully!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
