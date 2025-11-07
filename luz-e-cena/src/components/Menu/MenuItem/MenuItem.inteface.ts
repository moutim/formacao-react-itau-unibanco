import type React from "react";

export default interface MenuItem extends React.HTMLAttributes<HTMLLIElement> {
  href?: string;
}