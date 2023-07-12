"use client";
import { ErrorMessage } from "@hookform/error-message";
import { HTMLInputTypeAttribute, ReactNode } from "react";
import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  title?: string;
  id: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  children?: ReactNode;
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
  options?: RegisterOptions;
  errors?: any;
  maxLength?: number;
};

const Input = ({
  title,
  id,
  placeholder,
  children,
  type = "text",
  register,
  options,
  errors,
  maxLength = 100,
}: InputProps) => {
  return (
    <div className="flex flex-row mb-3 items-center">
      <div className="w-full">
        <label htmlFor={id} className="text-sm block">
          {title}
        </label>
        <input
          {...register(id, options)}
          id={id}
          className="w-[70%] inline-block h-12 bg-slate-200 rounded-md placeholder:text-slate-500 px-3"
          placeholder={placeholder}
          type={type}
          maxLength={maxLength}
        />
        {children}
        <ErrorMessage
          errors={errors || {}}
          name={id}
          render={({ message }) => (
            <p className="text-error mt-1 text-xs">{message}</p>
          )}
        />
      </div>
    </div>
  );
};

export default Input;
