import React from "react";

export default function SimpleBarChart() {
  const data = [30, 80, 45, 60, 20, 90, 50];

  const width = 400;
  const height = 200;
  const barWidth = width / data.length;
  const maxValue = Math.max(...data);

  return (
    <svg width={width} height={height}>
      {data.map((value, index) => {
        const barHeight = (value / maxValue) * (height - 20); // leave top space
        const x = index * barWidth;
        const y = height - barHeight;

        return (
          <g key={index}>
            <rect
              x={x}
              y={y}
              width={barWidth - 4}
              height={barHeight}
              fill="#3b82f6"
            />
            <text
              x={x + barWidth / 2}
              y={y - 6}
              textAnchor="middle"
              fontSize="10"
              fill="#444">
              {value}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
