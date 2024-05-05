import { Listbox } from '@headlessui/react'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/24/solid'

type Option = {
  label: string;
  value: string | number;
};

type DropdownProps = {
  options: Option[];
  selectedValue?: Option;
  onChange: (value: Option) => void;
  label: string;
  placeholder?: string;
  className?: string;
};

export function Dropdown({
  options,
  selectedValue = { label: '', value: '' },
  onChange,
  label,
  placeholder = 'Select option',
  className = '',
}: DropdownProps) {
  return (
    <div className={ `w-full ${className}` }>
      <Listbox value={ selectedValue } onChange={ onChange }>
        <Listbox.Label className="block text-sm font-medium text-gray-700">
          { label }
        </Listbox.Label>
        <div className="mt-1 relative">
          <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <span className="block truncate">
              {
                selectedValue?.value === '' ? placeholder : selectedValue.label
              }
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
    </div>
  )
}
