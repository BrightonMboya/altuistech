import React from "react";





type input = {
  value?: any;
  name: string;
  type: string;
  label: string;
  required?: boolean;
  placeholder: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
};

export const Input: React.FunctionComponent<input> = React.memo((props: input) => (
  <div className="flex w-full flex-col gap-2">
    <label htmlFor={props.name} className="font-medium">
      {props.label}
    </label>
    <input
      id={props.name}
      type={props.type}
      name={props.name}
      autoComplete="off"
      // required={props.required}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className="placeholder:text-gray-300 border-gray-500 rounded-lg border-2 px-4 py-3 shadow-sm focus:ring-[#A87133]"
    />
  </div>
));