import { ReactNode, useEffect, useMemo, useState } from "react";

interface BackgroundProps {
  children: ReactNode;
}

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const isOverlapping = (
  x1: number,
  y1: number,
  size1: number,
  x2: number,
  y2: number,
  size2: number
) => {
  return !(
    x1 + size1 < x2 ||
    x2 + size2 < x1 ||
    y1 + size1 < y2 ||
    y2 + size2 < y1
  );
};

const generateNonOverlappingSquares = (
  count: number,
  maxWidth: number,
  maxHeight: number
) => {
  const squares: {
    left: number;
    top: number;
    size: number;
    rotate: number;
  }[] = [];

  const sizeRange = {
    min: 500 - count * 40,
    max: 600 - count * 30,
  };

  let attempts = 0;
  while (squares.length < count && attempts < count * 100) {
    attempts++;

    const size = getRandomInt(sizeRange.min, sizeRange.max);
    const left = getRandomInt(-100, maxWidth - size);
    const top = getRandomInt(-100, maxHeight - size);
    const rotate = getRandomInt(-75, 75);

    const overlaps = squares.some((s) =>
      isOverlapping(left, top, size, s.left, s.top, s.size)
    );

    if (!overlaps) {
      squares.push({ left, top, size, rotate });
    }
  }

  return squares;
};

const Background: React.FC<BackgroundProps> = ({ children }) => {
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [maxWidth, setMaxWidth] = useState<number>(0);

  useEffect(() => {
    const html = document.documentElement;

    const width = window.innerWidth;
    const height = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    setMaxWidth(width);
    setMaxHeight(height);
  }, []);

  console.log(maxHeight);

  const squares = useMemo(() => {
    const count = getRandomInt(4, 10);
    return generateNonOverlappingSquares(count, maxWidth, maxHeight);
  }, [maxHeight, maxWidth]);

  return (
    <div className="relative bg-light-bgColor dark:bg-dark-bgColor w-full min-h-screen overflow-hidden">
      {squares.map((sq, i) => (
        <div
          key={i}
          className="absolute bg-accent opacity-46 dark:opacity-8 blur-2 rounded-[30px] blur pointer-events-none"
          style={{
            width: `${sq.size}px`,
            height: `${sq.size}px`,
            top: `${sq.top}px`,
            left: `${sq.left}px`,
            transform: `rotate(${sq.rotate}deg)`,
          }}
        />
      ))}

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
