import { UseFormRegisterReturn } from 'react-hook-form'

type InputProps = {
  id: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  className?: string;
  // React Hook Form registration object
  registration: UseFormRegisterReturn;
};

export default function InputField({ type, placeholder, className = '', registration }: InputProps) {
  return (
    <input
      { ...registration }
      type={ type }
      placeholder={ placeholder }
      className={ `px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}` }
    />
  )
}
