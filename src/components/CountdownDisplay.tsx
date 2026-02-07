import { TimeLeft } from "@/hooks/useCountdown";

interface CountdownDisplayProps {
  timeLeft: TimeLeft;
}

interface TimeUnitProps {
  value: number;
  label: string;
}

const TimeUnit = ({ value, label }: TimeUnitProps) => (
  <div className="flex flex-col items-center">
    <div className="bg-primary/10 rounded-2xl px-4 py-6 sm:px-8 sm:py-8 min-w-[80px] sm:min-w-[120px] border border-primary/20 shadow-sm">
      <span className="text-4xl sm:text-6xl font-bold text-primary tabular-nums">
        {value.toString().padStart(2, "0")}
      </span>
    </div>
    <span className="mt-3 text-sm sm:text-base font-medium text-muted-foreground uppercase tracking-wider">
      {label}
    </span>
  </div>
);

export const CountdownDisplay = ({ timeLeft }: CountdownDisplayProps) => {
  return (
    <div className="flex gap-3 sm:gap-6 justify-center flex-wrap">
      <TimeUnit value={timeLeft.days} label="Ngày" />
      <TimeUnit value={timeLeft.hours} label="Giờ" />
      <TimeUnit value={timeLeft.minutes} label="Phút" />
      <TimeUnit value={timeLeft.seconds} label="Giây" />
    </div>
  );
};
