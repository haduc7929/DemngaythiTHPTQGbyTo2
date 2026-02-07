import { useState, useEffect } from "react";
import { exams, getNextExam, formatExamDate, formatExamTime, Exam } from "@/data/examData";
import { useCountdown } from "@/hooks/useCountdown";
import { CountdownDisplay } from "@/components/CountdownDisplay";
import { ExamList } from "@/components/ExamList";

const Index = () => {
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);

  useEffect(() => {
    const nextExam = getNextExam();
    setSelectedExam(nextExam || exams[0]);
  }, []);

  const timeLeft = useCountdown(selectedExam?.date || new Date());

  if (!selectedExam) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Đang tải...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <header className="py-8 sm:py-12 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-foreground mb-2">
          Đếm Ngược Kỳ Thi THPT 2026
        </h1>
        <p className="text-muted-foreground">
          Kỳ thi tốt nghiệp THPT Quốc gia năm 2026
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-12">
        {/* Current Exam Info */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-muted-foreground mb-1">Thời gian còn lại đến môn</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
            {selectedExam.name}
          </h2>
          <p className="text-muted-foreground">
            {formatExamDate(selectedExam.date)} - {formatExamTime(selectedExam.date)}
          </p>
        </div>

        {/* Countdown */}
        <div className="mb-12 sm:mb-16">
          <CountdownDisplay timeLeft={timeLeft} />
        </div>

        {/* Exam List */}
        <ExamList
          exams={exams}
          selectedExamId={selectedExam.id}
          onSelectExam={setSelectedExam}
        />
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border">
        <p className="mb-2">Chúc các bạn thí sinh ôn thi tốt! 📚</p>
        <p className="text-xs text-muted-foreground/70">
          Made with ❤️ by Lovable
        </p>
      </footer>
    </div>
  );
};

export default Index;
