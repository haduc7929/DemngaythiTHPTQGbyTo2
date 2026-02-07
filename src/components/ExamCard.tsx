import { Exam, formatExamDate, formatExamTime } from "@/data/examData";
import { cn } from "@/lib/utils";
import { Clock, Calendar } from "lucide-react";

interface ExamCardProps {
  exam: Exam;
  isActive: boolean;
  onClick: () => void;
}

export const ExamCard = ({ exam, isActive, onClick }: ExamCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 text-left w-full",
        "hover:shadow-md hover:border-primary/40",
        isActive
          ? "border-primary bg-primary/5 shadow-md"
          : "border-border bg-card hover:bg-accent/50"
      )}
    >
      <h3
        className={cn(
          "font-semibold text-base sm:text-lg mb-2",
          isActive ? "text-primary" : "text-foreground"
        )}
      >
        {exam.name}
      </h3>

      <div className="space-y-1.5 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>
            {formatExamDate(exam.date)} - {exam.session}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>
            {formatExamTime(exam.date)} - {exam.duration} phút
          </span>
        </div>
      </div>

      {isActive && (
        <div className="mt-3 text-xs font-medium text-primary uppercase tracking-wide">
          Đang đếm ngược
        </div>
      )}
    </button>
  );
};
