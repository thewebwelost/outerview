import { ChangeEvent } from 'react';

interface Checkbox {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
  label: string;
}

function Checkbox({ handleChange, value, label }: Checkbox) {
  return (
    <label className="flex mt-3 items-center font-bold">
      <input
        type={'checkbox'}
        className={'mr-2'}
        onChange={handleChange}
        checked={value}
      />
      remember me
    </label>
  );
}

export default Checkbox;
