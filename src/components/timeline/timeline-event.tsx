import { Circle } from "lucide-react";

interface TimelineEventProps {
  year: number;
  title: string;
  description: string;
  category: string;
  isLast: boolean;
}

const categoryColors = {
  Oprichting: "bg-blue-100 text-blue-800",
  Innovatie: "bg-green-100 text-green-800",
  Groei: "bg-purple-100 text-purple-800",
  Expansie: "bg-orange-100 text-orange-800",
  Leiderschap: "bg-indigo-100 text-indigo-800",
  Mijlpaal: "bg-red-100 text-red-800"
};

export function TimelineEvent({ year, title, description, category, isLast }: TimelineEventProps) {
  return (
    <div className="relative flex gap-8 group">
      {/* Vertical Line */}
      {!isLast && (
        <div className="absolute left-[27px] top-10 w-0.5 h-full bg-gray-200 group-hover:bg-primary/20 transition-colors" />
      )}
      
      {/* Timeline Point */}
      <div className="relative">
        <Circle className="w-14 h-14 text-primary p-3 bg-white rounded-full shadow-lg z-10 relative" />
        <div className="absolute inset-0 bg-primary/10 rounded-full transform scale-125 opacity-0 group-hover:opacity-100 transition-all" />
      </div>
      
      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl font-bold text-primary">
            {year}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[category as keyof typeof categoryColors]}`}>
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}