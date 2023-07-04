import React from "react";
import "./button.css";
export interface ButtonProps {
    type?: "primary" | "secondary";
    textColor?: string;
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const Button: ({ type, textColor, size, onClick, label, }: ButtonProps) => React.JSX.Element;
export default Button;
