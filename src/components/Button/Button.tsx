import { ReactNode } from 'react'

type ButtonProps = {
  id?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function Button({ id, children, onClick, type = "button", className = '' }: ButtonProps) {
  return (
    <button
      id={ id }
      type={ type }
      onClick={ onClick }
      className={ `px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors ${className}` }
    >
      { children }
    </button>
  )
}
