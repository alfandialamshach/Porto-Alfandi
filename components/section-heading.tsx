import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div>
      <h2 className="text-4xl font-bold capitalize mb-8 text-center">
        {children}
      </h2>
    </div>
  );
}
