export interface Exam {
  id: string;
  name: string;
  date: Date;
  session: string;
  duration: number; // minutes
}

// THPT 2026 exam schedule - Vietnam timezone (UTC+7)
export const exams: Exam[] = [
  {
    id: "ngu-van",
    name: "Ngữ văn",
    date: new Date("2026-06-11T07:30:00+07:00"),
    session: "Sáng",
    duration: 120,
  },
  {
    id: "toan",
    name: "Toán",
    date: new Date("2026-06-11T14:20:00+07:00"),
    session: "Chiều",
    duration: 90,
  },
  {
    id: "tu-chon-1",
    name: "Bài thi tự chọn 1",
    date: new Date("2026-06-12T07:30:00+07:00"),
    session: "Sáng",
    duration: 50,
  },
  {
    id: "tu-chon-2",
    name: "Bài thi tự chọn 2",
    date: new Date("2026-06-12T08:35:00+07:00"),
    session: "Sáng",
    duration: 50,
  },
];

export const getNextExam = (): Exam | null => {
  const now = new Date();
  const upcoming = exams.filter((exam) => exam.date > now);
  return upcoming.length > 0 ? upcoming[0] : null;
};

export const formatExamDate = (date: Date): string => {
  return date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const formatExamTime = (date: Date): string => {
  return date.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
