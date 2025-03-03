import React from "react";

const Button = ({ content, className }) => {
  return (
    <button
      className={`max-w-32 min-h-8 max-h-16 min-w-28 text-black px-4 py-2 rounded-lg bg-transparent border-3 border-primary hover:bg-primary transition duration-200 cursor-pointer hover:text-white ${className}`}
    >
      {content}
    </button>
  );
};

export default Button;
