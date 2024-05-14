import { ReactNode } from 'react'

type ButtonProps = {
  id?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
};

export function Button({
  id,
  children,
  onClick,
  type = "button",
  className = '',
  disabled,
}: ButtonProps) {
  const baseClasses = 'px-4 py-2 bg-blue-500 text-white font-semibold rounded-md transition-colors'
  const hoverClasses = 'hover:bg-blue-700'
  const disabledClasses = 'disabled:bg-gray-400 disabled:cursor-not-allowed'

  return (
    <button
      id={ id }
      type={ type }
      onClick={ onClick }
      disabled={ disabled }
      className={ `${baseClasses} ${disabled ? '' : hoverClasses} ${disabledClasses} ${className}` }
    >
      { children }
    </button>
  )
}
