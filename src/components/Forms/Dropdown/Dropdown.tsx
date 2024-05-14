import { Listbox } from '@headlessui/react'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

type Option = {
  label: string;
  value: string | number;
};

type DropdownProps = {
  id: string;
  options: Option[];
  value: string | number;
  onChange: (value: string | number) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  error?: string;
  disabled?: boolean;
};

export function Dropdown({
  id,
  options,
  value,
  onChange,
  label,
  placeholder = 'Seleccionar',
  className = '',
  error,
  disabled,
}: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)

  useEffect(() => {
    const option = options.find((option) => option.value === value)
    setSelectedOption(option || null)
  }, [value, options])

  function handleChange(option: Option) {
    setSelectedOption(option)
    onChange(option.value)
  }

  const baseClasses = 'relative w-full bg-white border rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm'
  const errorClasses = 'border-red-500 focus:ring-red-500'
  const normalClasses = 'border-gray-300 focus:ring-blue-500'
  const disabledClasses = 'disabled:bg-gray-200 disabled:cursor-not-allowed'

  return (
    <div className={ `w-full space-y-1 ${className}` }>
      <Listbox value={ selectedOption } onChange={ handleChange } disabled={ disabled }>
        { label && (
          <Listbox.Label htmlFor={ id } className="block text-sm font-medium text-gray-700">
            { label }
          </Listbox.Label>
        ) }
        <div className="relative">
          <Listbox.Button
            id={ id }
            className={ `${baseClasses} ${error ? errorClasses : normalClasses} ${disabledClasses}` }
          >
            <span className={ `block truncate ${!selectedOption ? 'text-gray-400' : ''}` }>
              { selectedOption ? selectedOption.label : placeholder }
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            { options.map((option) => (
              <Listbox.Option
                key={ option.value }
                className={ ({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                  }`
                }
                value={ option }
              >
                { ({ selected, active }) => (
                  <>
                    <span className={ `block truncate ${selected ? 'font-medium' : 'font-normal'}` }>
                      { option.label }
                    </span>
                    { selected && (
                      <span className={ `absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-blue-600' : 'text-blue-600'}` }>
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) }
                  </>
                ) }
              </Listbox.Option>
            )) }
          </Listbox.Options>
        </div>
      </Listbox>
      { error && <p className="mt-1 text-sm text-red-600">{ error }</p> }
    </div>
  )
}
