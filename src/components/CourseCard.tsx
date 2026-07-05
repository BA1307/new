import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onClick: () => void;
  className?: string;
}

export default function CourseCard({ course, onClick, className = '' }: CourseCardProps) {
  const fallbackImage = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800';

  return (
    <div
      onClick={onClick}
      className={`relative w-[345px] h-[425px] rounded-none overflow-hidden group border border-white/15 shadow-xl cursor-pointer bg-slate-900 transition-all duration-350 ease-out hover:-translate-y-8 hover:shadow-2xl hover:shadow-brand-cyan/10 hover:border-white/30 ${className}`}
    >
      {/* Background Image */}
      <img
        src={course.imageUrl || fallbackImage}
        alt={course.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        referrerPolicy="no-referrer"
      />

      {/* Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10 transition-opacity duration-300 group-hover:via-black/65" />

      {/* Card Content - Shifts upward on hover with delay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end transition-transform duration-300 ease-out transform group-hover:-translate-y-16 group-hover:delay-[100ms]">
        {/* Course Duration Badge */}
        <div className="flex justify-between items-center mb-2.5 opacity-80 group-hover:opacity-100 transition-opacity">
          <span className="text-[10px] uppercase tracking-wider font-semibold font-mono text-brand-cyan">
            {course.duration}
          </span>
        </div>

        {/* Course Title */}
        <h3 className="text-card-title text-white text-left tracking-tight mb-2">
          {course.title}
        </h3>

        {/* Divider line exactly like the photo */}
        <div className="border-t border-white/20 my-3" />

        {/* Instructor & Price Info Row */}
        <div className="flex justify-between items-center text-sm text-white/95 font-medium">
          <div className="flex items-center space-x-1.5">
            {/* User Avatar Circle */}
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10">
              <svg className="w-3.5 h-3.5 text-white/90" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </span>
            <span>{course.instructorName || 'Makoba (TE)'}</span>
          </div>

          <div className="flex items-center space-x-1 text-brand-cyan">
            {/* Price Badge */}
            <span className="font-bold text-base font-mono text-brand-cyan">{course.price || 'Ksh 12,000'}</span>
          </div>
        </div>
      </div>

      {/* Slide-Up Course Detail Button block exactly like the photo - delayed slightly */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out group-hover:delay-[100ms] z-20">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="w-[45%] bg-blue-600 text-white font-semibold text-xs py-3 px-4 rounded-none tracking-wider uppercase hover:bg-blue-700 active:scale-[0.98] transition-all cursor-pointer text-center"
        >
          Course Detail
        </button>
      </div>
    </div>
  );
}
