import { UseFormRegisterReturn } from 'react-hook-form'

type InputProps = {
  id: string;
  type: 'text' | 'email' | 'password';
  label?: string;
  placeholder?: string;
  className?: string;
  registration: UseFormRegisterReturn;
};

export default function InputField({
  id,
  type,
  label,
  placeholder,
  className = '',
  registration
}: InputProps) {
  return (
    <div className={ `w-full ${className}` }>
      { label && <label htmlFor={ id } className="block text-sm font-medium text-gray-700 mb-1">{ label }</label> }
      <input
        { ...registration }
        id={ id }
        type={ type }
        placeholder={ placeholder }
        className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-default
         focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
      />
    </div>
  )
}
