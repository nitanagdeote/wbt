import React, { useState } from "react";

const eightfoldPath = [
  {
    name: "Right View",
    desc: "Understanding the nature of reality and the path of transformation.",
  },
  {
    name: "Right Intention",
    desc: "Commitment to ethical and mental self-improvement.",
  },
  {
    name: "Right Speech",
    desc: "Speaking truthfully and kindly, avoiding gossip and harm.",
  },
  {
    name: "Right Action",
    desc: "Acting in ways that are ethical and non-harming.",
  },
  {
    name: "Right Livelihood",
    desc: "Earning a living in a way that does not harm others.",
  },
  {
    name: "Right Effort",
    desc: "Cultivating positive states of mind and avoiding negative ones.",
  },
  {
    name: "Right Mindfulness",
    desc: "Being fully aware of body, feelings, and mind.",
  },
  {
    name: "Right Concentration",
    desc: "Developing deep states of meditation and focus.",
  },
];

export default function EightfoldPath() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        The Noble Eightfold Path
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {eightfoldPath.map((step, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`p-4 rounded-lg border text-left shadow hover:shadow-lg transition ${
              selected === index
                ? "bg-yellow-100 border-yellow-400"
                : "bg-white"
            }`}>
            <h3 className="text-lg font-semibold">{step.name}</h3>
            {selected === index && (
              <p className="text-sm mt-2 text-gray-700">{step.desc}</p>
            )}
          </button>
        ))}
      </div>
      {selected !== null && (
        <div className="mt-8 bg-gray-100 p-6 rounded-lg text-center">
          <h4 className="text-xl font-semibold">
            {eightfoldPath[selected].name}
          </h4>
          <p className="mt-2 text-gray-700">{eightfoldPath[selected].desc}</p>
        </div>
      )}
    </div>
  );
}
