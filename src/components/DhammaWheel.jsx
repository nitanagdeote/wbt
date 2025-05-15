import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const eightfoldPath = [
  "Right View",
  "Right Intention",
  "Right Speech",
  "Right Action",
  "Right Livelihood",
  "Right Effort",
  "Right Mindfulness",
  "Right Concentration",
];

const descriptions = {
  "Right View": "Understanding the Four Noble Truths",
  "Right Intention": "Commitment to ethical self-improvement",
  "Right Speech": "Speaking truthfully and kindly",
  "Right Action": "Ethical and non-harmful behavior",
  "Right Livelihood": "Earning a living without harming others",
  "Right Effort": "Working to improve oneself",
  "Right Mindfulness": "Awareness of thoughts and actions",
  "Right Concentration": "Developing focus through meditation",
};

export default function DhammaWheel() {
  const svgRef = useRef();
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear before redraw

    const width = 400;
    const height = 400;
    const radius = 150;
    const center = [width / 2, height / 2];

    svg.attr("width", width).attr("height", height);

    const group = svg.append("g").attr("transform", `translate(${center})`);

    // Circle (rim)
    group
      .append("circle")
      .attr("r", radius)
      .attr("fill", "#f9f4e6")
      .attr("stroke", "#d4a373")
      .attr("stroke-width", 8);

    // Hub
    group.append("circle").attr("r", 20).attr("fill", "#d4a373");

    // Spokes
    const angleScale = d3
      .scaleLinear()
      .domain([0, 8])
      .range([0, 2 * Math.PI]);
    for (let i = 0; i < 8; i++) {
      const angle = angleScale(i);
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      group
        .append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", x)
        .attr("y2", y)
        .attr("stroke", "#333")
        .attr("stroke-width", 2)
        .attr("class", "spoke")
        .style("cursor", "pointer")
        .on("click", () => {
          setPaused(true);
          setSelected(eightfoldPath[i]);
        })
        .append("title")
        .text(eightfoldPath[i]);
    }

    // Animation
    let angle = 0;
    const rotate = () => {
      if (!paused) {
        angle = (angle + 0.3) % 360;
        group.attr("transform", `translate(${center}) rotate(${angle})`);
      }
      requestAnimationFrame(rotate);
    };
    rotate();
  }, [paused]);

  return (
    <div className="flex flex-col items-center">
      <svg ref={svgRef}></svg>

      {selected && (
        <div className="mt-6 text-center max-w-md">
          <h2 className="text-xl font-bold mb-2">{selected}</h2>
          <p className="text-gray-700">{descriptions[selected]}</p>
          <button
            onClick={() => {
              setPaused(false);
              setSelected(null);
            }}
            className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
            Resume Rotation
          </button>
        </div>
      )}
    </div>
  );
}
