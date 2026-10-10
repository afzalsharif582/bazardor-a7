import React from 'react';

const CurrentDate = ({ className = "" }) => {
  const date = new Date();

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <time
      dateTime={date.toISOString().split("T")[0]}
      className={`text-gray-500 ${className}`}
    >
      {formattedDate}
    </time>
  );
};

export default CurrentDate;