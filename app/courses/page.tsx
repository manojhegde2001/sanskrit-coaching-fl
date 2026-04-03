'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { CourseCard } from '@/components/ui/Card';
import Modal from '@/components/ui/Modal';
import CTABanner from '@/components/sections/CTABanner';
import { courses } from '@/lib/mockData';
import { Course } from '@/lib/types';
import { FaFilter, FaSearch, FaBookOpen, FaLayerGroup, FaGraduationCap } from 'react-icons/fa';

export default function CoursesPage() {
  const [filter, setFilter] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses = filter === 'All' 
    ? courses 
    : courses.filter(course => course.level === filter);

  const handleEnroll = (course: Course) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  return (
    <>
      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="Curriculum"
            title="Structured"
            highlight="Sanskrit Courses"
            subtitle="Explore our range of structured group courses designed for different proficiency levels."
            align="center"
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <div className="p-1 bg-amber-50 rounded-2xl border border-amber-100 flex flex-wrap gap-1">
              {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setFilter(level)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    filter === level
                      ? 'bg-saffron-gradient text-white shadow-saffron'
                      : 'text-maroon-700 hover:bg-white hover:text-saffron-600'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course List */}
      <section className="py-16 bg-white min-h-[400px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  onEnroll={handleEnroll} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-cream rounded-3xl border border-amber-100 max-w-2xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-saffron-50 flex items-center justify-center text-saffron-300 mx-auto mb-6 text-4xl">
                <FaSearch />
              </div>
              <h3 className="heading-cinzel text-xl font-bold text-maroon-900 mb-2">No Courses Found</h3>
              <p className="text-maroon-700/60 mb-6">We don't have any courses listed for this level yet.</p>
              <button 
                onClick={() => setFilter('All')}
                className="text-saffron-600 font-bold hover:underline"
              >
                View all courses
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Course Extras / Comparison */}
      <section className="section-padding bg-cream border-t border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-amber-100 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-saffron-50 text-saffron-500 flex items-center justify-center text-xl mb-6">
                <FaBookOpen />
              </div>
              <h3 className="heading-cinzel text-lg font-bold text-maroon-900 mb-3">Recorded Sessions</h3>
              <p className="text-sm text-maroon-700/70 leading-relaxed">
                Missed a class? Don't worry. Every session is recorded and uploaded to your student portal within 24 hours.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-amber-100 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl mb-6">
                <FaLayerGroup />
              </div>
              <h3 className="heading-cinzel text-lg font-bold text-maroon-900 mb-3">Study Materials</h3>
              <p className="text-sm text-maroon-700/70 leading-relaxed">
                Access curated PDFs, vocabulary worksheets, and audio guides for pronunciation practice — all included in the course.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-amber-100 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl mb-6">
                <FaGraduationCap />
              </div>
              <h3 className="heading-cinzel text-lg font-bold text-maroon-900 mb-3">Certification</h3>
              <p className="text-sm text-maroon-700/70 leading-relaxed">
                Receive a completion certificate signed by Pt. Ravi Sharma after successfully finishing your course assessments.
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
    </>
  );
}
