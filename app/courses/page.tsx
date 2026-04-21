'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { CourseCard } from '@/components/ui/Card';
import Modal from '@/components/ui/Modal';
import CTABanner from '@/components/sections/CTABanner';
import { courses } from '@/lib/mockData';
import { Course } from '@/lib/types';
import { FaFilter, FaSearch, FaBookOpen, FaLayerGroup, FaGraduationCap, FaScroll } from 'react-icons/fa';

export default function CoursesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleEnroll = (course: Course) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  return (
    <main className="bg-cream page-container min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="Courses & Programs"
            title="Sanskrit Learning"
            highlight="for All Ages"
            subtitle="Explore our academic and foundational programs designed for Grade 5-12, adults, and beginners."
            align="center"
          />
        </div>
      </section>

      {/* Program list */}
      <section className="py-12 bg-white rounded-t-[3rem] shadow-2xl relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {courses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                onEnroll={handleEnroll} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-amber-100 shadow-card hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-maroon-900 flex items-center justify-center text-saffron-500 text-2xl mb-6 shadow-lg shadow-maroon-900/20">
                <FaLayerGroup />
              </div>
              <h3 className="heading-cinzel text-xl font-bold text-maroon-900 mb-3">Study Materials</h3>
              <p className="text-sm text-maroon-700/70 leading-relaxed">
                Access curated worksheets, PDFs, and pronunciation guides to support your learning outside the classroom.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-amber-100 shadow-card hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-maroon-900 flex items-center justify-center text-saffron-500 text-2xl mb-6 shadow-lg shadow-maroon-900/20">
                <FaGraduationCap />
              </div>
              <h3 className="heading-cinzel text-xl font-bold text-maroon-900 mb-3">Academic Excellence</h3>
              <p className="text-sm text-maroon-700/70 leading-relaxed">
                Specialized coaching for CBSE and State Board exams to help students secure top marks in Sanskrit and Kannada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />

      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        type="enroll"
        courseName={selectedCourse?.title}
      />
    </main>
  );
}
