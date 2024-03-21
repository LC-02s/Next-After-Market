import React from "react"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

export default function Input(
  { id, label, type, disabled, formatPrice, required, register, errors }: InputProps
) {
  return (
    <div className="relative block w-full h-auto">
      <label 
        htmlFor={id}
        className={`
          absolute text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0]
          ${formatPrice ? 'left-8' : 'left-4'}
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors[id] ? 'text-red-500' : 'text-gray-400'}
        `}
      >{ label }</label>
      { formatPrice && <span className="absolute top-0 bottom-0 left-2 h-fit m-auto">₩</span> }
      <input 
        id={id}
        type={type ?? 'text'} 
        disabled={disabled ?? false}
        {...register(id, { required })}
        placeholder=""
        className={`
          w-full p-4 pt-6 font-light bg-[var(--grsc-000)] rounded-lg border outline-none transition
          disabled:cursor-not-allowed disabled:bg-gray-100
          ${formatPrice ? 'pl-8' : 'pl-4'}
          ${errors[id] ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-purple-500'}
        `}
      />
    </div>
  )
}
