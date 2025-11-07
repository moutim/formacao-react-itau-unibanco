import type React from "react";

export default interface SelectorGroup extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ReactNode
}