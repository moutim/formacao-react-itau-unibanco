import React from "react";

export default interface ISelectorOption extends React.OptionHTMLAttributes<HTMLOptionElement>{
  label: string;
  value: string;
}