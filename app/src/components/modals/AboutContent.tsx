import React from "react";

const AboutContent = () => (
  <div className="space-y-6 text-sm text-gray-300">
    <div className="relative bg-midnight border-2 border-lavender rounded-xl p-6 max-w-xl mx-auto shadow-lg flex items-center gap-6">
      <div className="relative w-24 h-24 flex-shrink-0">
        <img
          src={`${process.env.PUBLIC_URL}/images/jackie-profile.jpg`}
          alt="Jackie Profile"
          className="rounded-full object-cover w-24 h-24 border-2 border-blush shadow-md"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-100">Jackie Guan</h2>
        <p className="text-gray-300 mt-1 max-w-xs">
          MSE in Computer Graphics @ UPenn <br /> BS in Computer Science @
          Drexel <br />
          <span className="text-xs text-gray-40">
            (Graduated Summa Cum Laude 2024)
          </span>
        </p>
      </div>
    </div>

    <div className="relative flex flex-wrap justify-center mx-auto gap-6">
      {[
        "jackie-profile.jpg",
        "jackie1.jpg",
        "jackie2.JPG",
        "jackie3.JPG",
        "jackie4.jpg",
        "jackie5.jpg",
      ].map((fileName, i) => (
        <img
          key={i}
          src={`${process.env.PUBLIC_URL}/images/${fileName}`}
          alt={`Jackie photo ${i + 1}`}
          className={`w-40 h-40 rounded-lg object-cover border-2 border-lavender shadow-md transition-transform duration-500 cursor-pointer relative
        ${i % 2 === 0 ? "rotate-2" : "-rotate-2"}
        hover:scale-110 hover:z-50
      `}
          style={{
            marginTop: i,
            boxShadow: "0 4px 12px rgba(106, 102, 163, 0.4)",
          }}
        />
      ))}
    </div>

    <div className="space-y-4 p-6 max-w-md mx-auto text-center">
      <h2 className="text-xl font-semibold text-lavender">
        Hobbies & Fun Facts
      </h2>
      <p className="text-xs text-gray-400 italic">
        Checked boxes mean these are hobbies or facts that I do. Unchecked boxes
        mean things I don't do!
      </p>
      <div className="grid grid-cols-2 gap-3 justify-center">
        {[
          { label: "English", checked: true },
          { label: "Chinese (Conversational)", checked: true },
          { label: "Tea lover", checked: true },
          { label: "Coffee drinker", checked: false },
          { label: "Crocheter", checked: true },
          {
            label: "Knitting (but I want to relearn!)",
            checked: false,
          },
          { label: "Hiking", checked: true },
          { label: "Whitewater rafting", checked: true },
          { label: "Dancing", checked: true },
          { label: "Learning to play guitar", checked: true },
          { label: "Swiftie", checked: true },
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
