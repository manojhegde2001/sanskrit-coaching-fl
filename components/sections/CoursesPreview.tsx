'use client';
import { useState } from 'react';
import { courses } from '@/lib/mockData';
import { CourseCard } from '@/components/ui/Card';
import Modal from '@/components/ui/Modal';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { Course } from '@/lib/types';
import { FaArrowRight } from 'react-icons/fa';

export default function CoursesPreview() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleEnroll = (course: Course) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  return (
    <>
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end gap-4 mb-12">
            <div className="flex-1">
              <SectionHeader
                eyebrow="Also Available"
                title="Structured"
                highlight="Courses"
                subtitle="Join a batch and learn alongside fellow students with our curated course curriculum."
                align="left"
              />
            </div>
            <div className="shrink-0 mb-12">
              <Button variant="secondary" href="/courses" size="md">
                View All Courses <FaArrowRight className="text-xs" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} onEnroll={handleEnroll} />
            ))}
          </div>

          <div className="mt-10 p-6 bg-amber-50 rounded-2xl border border-amber-100 text-center">
            <p className="text-sm text-maroon-700/70">
              🌟 <strong className="text-maroon-900">Prefer a personalized experience?</strong>{' '}
              Try our{' '}
              <a href="/one-on-one" className="text-saffron-600 font-semibold hover:underline">
                One-on-One coaching
              </a>{' '}
              — fully customized to your goals and schedule.
            </p>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedCourse(null);
        }}
        type="enroll"
        courseName={selectedCourse?.title}
      />
    </>
  );
}
