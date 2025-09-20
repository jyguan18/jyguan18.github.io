import React from "react";

const AboutContent = () => (
  <div className="space-y-6 text-sm text-gray-300">
    <div className="relative bg-midnight border-2 border-blush rounded-xl p-4 max-w-xl mx-auto shadow-lg flex items-center gap-4">
      <div className="relative w-32 h-32 flex-shrink-0">
        <img
          src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
          alt="Jackie Profile"
          className="rounded-full object-cover w-32 h-32 border-2 border-lavender shadow-md"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-blush">Jackie Guan</h2>
        <p className="text-gray-300 mt-1 max-w-lg">
          MSE in Computer Graphics, Univ. of Pennsylvania <br />
          <span className="text-xs text-gray-400">
            (Expected Graduation Spring 2026)
          </span>
          <br />
          BS in Computer Science, Drexel University
          <br />
          <span className="text-xs text-gray-400">
            (Graduated Summa Cum Laude 2024)
          </span>
        </p>
      </div>
    </div>

    <div className="relative flex flex-wrap justify-center mx-auto gap-6">
      {[
        "group3.jpg",
        "jackie1.jpg",
        "group2.jpg",
        "jackie2.jpg",
        "group1.jpg",
        "jackie3.jpg",
      ].map((fileName, i) => (
        <img
          key={i}
          src={`/images/${fileName}`}
          alt={`Jackie photo ${i + 1}`}
          className={`w-40 h-40 rounded-lg object-cover border-2 shadow-md transition-transform duration-500 cursor-pointer relative
        ${i % 2 === 0 ? "rotate-2" : "-rotate-2"}
        ${[1, 3, 5].includes(i) ? "border-blush" : "border-lavender"}
        hover:scale-110 hover:z-50
      `}
          style={{
            marginTop: i,
            boxShadow: "0 4px 12px rgba(106, 102, 163, 0.4)",
          }}
        />
      ))}
    </div>

    <div className="space-y-4 p-6 max-w-lg mx-auto text-center border-lavender border-2 rounded-xl">
      <h2 className="text-xl font-semibold text-gray">Hobbies & Fun Facts</h2>
      <p className="text-xs text-gray-400 italic">
        Checked boxes mean these are hobbies or facts that I do. <br />
        Unchecked boxes mean things I don't do!
      </p>
      <div className="grid grid-cols-2 gap-3 w-full max-w-md mx-auto">
        {[
          { label: "English", checked: true },
          { label: "Chinese (Conversational)", checked: true },
          { label: "Tea lover", checked: true },
          { label: "Coffee drinker", checked: false },
          {
            label: "Knitting",
            checked: false,
          },
          { label: "Crocheter", checked: true },
          { label: "Learning to play guitar", checked: true },
          { label: "Hiking", checked: true },
          { label: "Whitewater rafting", checked: true },
          { label: "Dancing", checked: true },
          { label: "Swiftie", checked: true },
          { label: "Nertz Fiend", checked: true },
        ].map(({ label, checked }, index) => (
          <label key={index} className="flex items-center space-x-2 text-left">
            <input
              type="checkbox"
              checked={checked}
              readOnly
              className="accent-blush"
            />
            <span>{label}</span>
          </label>
        ))}
      </div>
    </div>
  </div>
);

export default AboutContent;
