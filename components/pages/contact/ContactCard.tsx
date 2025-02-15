import React from "react";
import { CiLocationOn } from "react-icons/ci";

interface ContactCardProps {
  title: string;
  color: "primary" | "secondary";
  icon: React.ReactNode;
  children: React.ReactNode;
}
export const ContactCard = ({
  title,
  icon,
  children,
  color,
}: ContactCardProps) => {
  return (
    <div
      className={`${color === "primary" ? "bg-[#1EBAE51A]" : "bg-secondary/20"} flex flex-col gap-5 py-5`}
    >
      <h3
        className={`flex gap-1.5 border-b-2 p-5 text-primary ${color === "primary" ? "border-[#1EBAE5]" : "border-secondary"} text-2xl font-bold`}
      >
        {icon}
        <span>{title}</span>
      </h3>

      {children}
    </div>
  );
};
