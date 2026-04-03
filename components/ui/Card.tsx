import { Course } from '@/lib/types';
import Button from './Button';

interface CourseCardProps {
  course: Course;
  onEnroll: (course: Course) => void;
}

export function CourseCard({ course, onEnroll }: CourseCardProps) {
  const badgeClass =
    course.level === 'Beginner'
      ? 'badge-beginner'
      : course.level === 'Intermediate'
      ? 'badge-intermediate'
      : 'badge-advanced';

  return (
    <div className="card-base group flex flex-col h-full">
      {/* Icon & Level */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl">{course.icon}</span>
        <span className={badgeClass}>{course.level}</span>
      </div>

      {/* Title */}
      <h3 className="heading-cinzel text-xl font-bold text-maroon-900 mb-2 group-hover:text-saffron-600 transition-colors">
        {course.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-maroon-700/70 leading-relaxed mb-4 flex-1">
        {course.description}
      </p>

      {/* Details */}
      <div className="space-y-2 mb-5">
        <div className="flex items-center gap-2 text-xs text-maroon-600">
          <span className="w-1.5 h-1.5 rounded-full bg-saffron-500" />
          <span className="font-medium">Duration:</span>
          <span>{course.duration}</span>
        </div>
        <div className="flex items-start gap-2 text-xs text-maroon-600">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1 shrink-0" />
          <span>{course.batchDetails}</span>
        </div>
      </div>

      {/* Topics */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {course.topics.slice(0, 4).map((topic) => (
          <span
            key={topic}
            className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200"
          >
            {topic}
          </span>
        ))}
        {course.topics.length > 4 && (
          <span className="text-xs bg-amber-50 text-amber-500 px-2.5 py-1 rounded-full border border-amber-200">
            +{course.topics.length - 4} more
          </span>
        )}
      </div>

      {/* Price & CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-amber-100">
        <div>
          <p className="text-xs text-maroon-600/60 mb-0.5">Starting from</p>
          <p className="text-lg font-bold text-saffron-600">{course.price}</p>
        </div>
        <Button variant="primary" size="sm" onClick={() => onEnroll(course)}>
          Enroll Now
        </Button>
      </div>
    </div>
  );
}

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  course: string;
}

export function TestimonialCard({
  name,
  location,
  rating,
  text,
  avatar,
  course,
}: TestimonialCardProps) {
  return (
    <div className="card-base flex flex-col h-full">
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-amber-400 text-sm">★</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-maroon-700/80 leading-relaxed mb-5 flex-1 italic">
        &ldquo;{text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-amber-100">
        <div className="w-10 h-10 rounded-full bg-saffron-gradient flex items-center justify-center text-white text-sm font-bold shrink-0">
          {avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-maroon-900">{name}</p>
          <p className="text-xs text-maroon-600/60">{location}</p>
          <p className="text-xs text-saffron-500 mt-0.5">{course}</p>
        </div>
      </div>
    </div>
  );
}

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="card-base group text-center flex flex-col items-center">
      <div className="w-14 h-14 rounded-2xl bg-saffron-50 border border-saffron-100 flex items-center justify-center text-saffron-500 text-2xl mb-4 group-hover:bg-saffron-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="heading-cinzel text-base font-bold text-maroon-900 mb-2">
        {title}
      </h3>
      <p className="text-sm text-maroon-700/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
