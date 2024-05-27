import { UseFormRegisterReturn } from 'react-hook-form'

type InputProps = {
  id: string;
  type: 'text' | 'email' | 'password' | 'number';
  name?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  registration: UseFormRegisterReturn;
  disabled?: boolean;
  error?: string;
  autoComplete?: 'on' | 'off';
};

export function InputField({
  id,
  type,
  name,
  label,
  placeholder,
  className = '',
  registration,
  disabled,
  error,
  autoComplete = 'off',
}: InputProps) {
  const baseClasses = 'relative w-full bg-white border rounded-md shadow-sm px-3 py-2 text-left focus:outline-none focus:ring-1 sm:text-sm'
  const errorClasses = 'border-red-500 focus:ring-red-500'
  const normalClasses = 'border-gray-300 focus:ring-blue-500'
  const disabledClasses = 'disabled:bg-gray-200 disabled:cursor-not-allowed'

  return (
    <div className={ `w-full ${className}` }>
      { label && <label htmlFor={ id } className="block text-sm font-medium text-gray-700 mb-1">{ label }</label> }
      <input
        { ...registration }
        id={ id }
        name={ name }
        type={ type }
        placeholder={ placeholder }
        disabled={ disabled }
        className={ `${baseClasses} ${error ? errorClasses : normalClasses} ${disabledClasses}` }
        autoComplete={ autoComplete }
      />
      { error && <p className="mt-1 text-sm text-red-600">{ error }</p> }
    </div>
  )
}
