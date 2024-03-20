import React from "react";
import { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

export default function Button(
  { label, onClick, disabled, outline, small, icon: Icon }: ButtonProps
) {
  return (
    <button
      type="submit"
      disabled={disabled ?? false}
      onClick={onClick}
      className={`
        relative w-full text-purple-500 rounded-lg border border-purple-200 bg-purple-100 transition
        hover:text-white hover:border-purple-500 hover:bg-purple-500
        ${outline
          ? 'text-black border-black bg-white'
          : 'text-white border-purple-500 bg-purple-500'}
        ${small
          ? 'text-sm py-1 font-light border'
          : 'text-base py-3 font-semibold border-2'}
      `}
    >
      { Icon && (<Icon size={24} className="absolute left-4 top-0 bottom-0 mr-auto" />) }
      { label }
    </button>
  )
}
