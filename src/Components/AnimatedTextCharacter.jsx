import React from "react";

const AnimatedTextCharacter = ({ text, className, ...props }) => {
  const letters = text.split("");

  return (
    <h1 className={className} {...props}>
      <span className="sr-only">{text}</span>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="animate-fade-in-up inline-block"
          style={{
            animationDelay: `${index * 0.07}s`,
            animationFillMode: "backwards",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedTextCharacter;