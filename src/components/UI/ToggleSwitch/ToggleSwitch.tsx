import { Switch } from '@headlessui/react'

type ToggleSwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export function ToggleSwitch({ checked, onChange, label }: ToggleSwitchProps) {
  return (
    <div className="flex flex-col space-y-1">
      { label && <label className="block text-sm font-medium text-gray-700">{ label }</label> }
      <div className="h-full flex items-center">
        <Switch
          checked={ checked }
          onChange={ onChange }
          className={ `${checked ? 'bg-green-500' : 'bg-gray-200'} relative inline-flex items-center h-6
         rounded-full w-11 transition-colors duration-200 ease-in-out` }
        >
          <span className="sr-only">{ label }</span>
          <span
            className={ `${checked ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white
           rounded-full transition-transform duration-200 ease-in-out` } />
        </Switch>
      </div>
    </div>
  )
}
