import { NextResponse } from 'next/server';
import jobsData from '@/data/jobs.json';

export async function GET() {
  try {
    return NextResponse.json(jobsData);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json(
      { message: 'Failed to fetch jobs' },
      { status: 500 }
    );
  }
}
