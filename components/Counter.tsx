"use client";

import { Clock, Pin } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimeUnitProps {
  value: number;
  label: string;
}

const TimeUnit = ({ value, label }: TimeUnitProps) => (
  <div className="flex flex-col items-center">
    <div className="text-background rounded-lg px-2 py-2 md:px-4 md:py-3 min-w-12.5 md:min-w-15 text-center font-medium font-mono text-3xl md:text-6xl">
      {String(value).padStart(2, "0")}
    </div>
    <span className="text-xs md:text-sm mt-1 text-background">{label}</span>
  </div>
);

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const Counter = () => {
  const targetDate = useMemo(() => new Date("2026-05-14T09:00:00"), []);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const updateTimer = () => setTimeLeft(calculateTimeLeft(targetDate));
    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className=" w-full flex flex-col justify-center items-center -mt-18 z-10 mb-8 ">
      <div className="flex md:justify-around md:px-10 bg-cyan-500 py-4 w-5/6 rounded-t-md flex-col md:flex-row items-center gap-8 font-bold text-3xl text-center font-mono">
        14 de Mayo de 2026
      </div>
      <div className="flex md:justify-around md:px-10 bg-foreground py-4 w-5/6 rounded-b-md flex-col md:flex-row items-center gap-8 ">
        <div className="items-center text-background text-3xl md:text-6xl font-bold font-mono flex flex-row gap-1">
          {timeLeft ? (
            <>
              <TimeUnit value={timeLeft.days} label="Días" />
              <p className=" ">:</p>
              <TimeUnit value={timeLeft.hours} label="Horas" />
              <p>:</p>
              <TimeUnit value={timeLeft.minutes} label="Min" />
              <p>:</p>
              <TimeUnit value={timeLeft.seconds} label="Seg" />
            </>
          ) : (
            <>
              <TimeUnit value={0} label="Días" />
              <p>:</p>
              <TimeUnit value={0} label="Horas" />
              <p>:</p>
              <TimeUnit value={0} label="Min" />
              <p>:</p>
              <TimeUnit value={0} label="Seg" />
            </>
          )}
        </div>

        <div className="flex flex-col gap-2 md:justify-center text-background w-full md:w-fit px-6">
          <div className=" flex flex-row gap-2">
            <Clock />
            <p>De 8:00 a.m. a 3:00 p.m.</p>
          </div>
          <div className=" flex flex-row gap-2">
            <Pin />
            <p>Auditorío Josefa Ortiz de Domínguez</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Counter;
