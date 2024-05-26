import { ReactNode } from 'react'

type ButtonProps = {
  id?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
  color?: 'blue' | 'green' | 'red';
};

export function Button({
  id,
  children,
  onClick,
  type = 'button',
  className = '',
  disabled,
  variant = 'primary',
  color = 'blue',
}: ButtonProps) {
  const baseClasses = 'px-4 py-2 font-semibold rounded-md transition-colors'

  const colorClasses = {
    blue: {
      primary: 'bg-blue-500 hover:bg-blue-700 text-white',
      secondary: 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    },
    green: {
      primary: 'bg-green-500 hover:bg-green-700 text-white',
      secondary: 'border border-green-500 text-green-500 hover:bg-green-500 hover:text-white',
    },
    red: {
      primary: 'bg-red-500 hover:bg-red-700 text-white',
      secondary: 'border border-red-500 text-red-500 hover:bg-red-500 hover:text-white',
    },
  }

  const variantClasses = {
    primary: colorClasses[color].primary,
    secondary: colorClasses[color].secondary,
    tertiary: 'border border-gray-300 text-black hover:bg-gray-100',
  }

  const disabledClasses = 'disabled:bg-gray-200 disabled:cursor-not-allowed'

  return (
    <button
      id={ id }
      type={ type }
      onClick={ onClick }
      disabled={ disabled }
      className={ `${baseClasses} ${disabled ? '' : variantClasses[variant]} ${disabledClasses} ${className}` }
    >
      { children }
    </button>
  )
}
