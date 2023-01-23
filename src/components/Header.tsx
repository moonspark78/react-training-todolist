import React from "react";
import "./Header.css";

interface HeaderProps {
    title: string;
};

export const Header = ( {
    title
}: HeaderProps) => {
  
  return (
        <div className="header">
        <h1>{title}</h1>
        </div>
    );
}
 