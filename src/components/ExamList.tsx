import { Exam } from "@/data/examData";
import { ExamCard } from "./ExamCard";

interface ExamListProps {
  exams: Exam[];
  selectedExamId: string;
  onSelectExam: (exam: Exam) => void;
}

export const ExamList = ({
  exams,
  selectedExamId,
  onSelectExam,
}: ExamListProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-center mb-6 text-foreground">
        Lịch thi
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {exams.map((exam) => (
          <ExamCard
            key={exam.id}
            exam={exam}
            isActive={exam.id === selectedExamId}
            onClick={() => onSelectExam(exam)}
          />
        ))}
      </div>
    </div>
  );
};
