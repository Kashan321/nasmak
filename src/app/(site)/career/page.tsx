import { Suspense } from 'react';
import CareersContent from './components/CareersContent';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers | Nasmak Labs",
};

export default function CareersPage() {
  return (
    <main>
      <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
        <CareersContent />
      </Suspense>
    </main>
  );
}
