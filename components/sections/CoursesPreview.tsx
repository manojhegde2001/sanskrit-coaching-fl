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
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-maroon-900/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <SectionHeader
                eyebrow="Our Offerings"
                title="Learning"
                highlight="Programs"
                subtitle="Explore our flexible one-on-one sessions tailored for school students and adults alike."
                align="left"
              />
            </div>
            <div className="shrink-0">
              <Button variant="secondary" href="/courses" size="lg" className="rounded-2xl">
                View All Courses <FaArrowRight className="text-xs ml-2" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} onEnroll={handleEnroll} />
            ))}
          </div>

          <div className="mt-16 p-8 bg-maroon-900 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute left-0 top-0 w-full h-full pattern-bg opacity-10" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                <h4 className="heading-cinzel text-2xl font-bold text-white mb-2">Not sure where to start?</h4>
                <p className="text-amber-200/60 text-sm">Prasanna Sir offers a 15-minute free demo call to discuss your goals.</p>
              </div>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setModalOpen(true)}
                className="rounded-2xl border-white/20 hover:bg-white/10"
              >
                Book Free Demo Session
              </Button>
            </div>
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
