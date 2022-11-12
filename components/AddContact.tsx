import React, { SetStateAction } from 'react';
import TextInput from './atoms/TextInput';

export interface IContact {
  name: string;
  contact: string;
}

interface IAddContact {
  title: string;
  contactList: IContact[];
  name: string;
  cred: string;
  setName: React.Dispatch<SetStateAction<string>>;
  setCred: React.Dispatch<SetStateAction<string>>;
  handleAdd: () => void;
  btnCopy: string;
}

const AddContact: React.FC<IAddContact> = ({
  title,
  contactList,
  name,
  cred,
  setName,
  setCred,
  handleAdd,
  btnCopy,
}) => {
  return (
    <fieldset>
      <legend>{title}</legend>
      <div>
        {contactList.map((item, i) => (
          <div key={i}>
            <p className="font-bold">{item.name}</p>
            <p>{item.contact}</p>
          </div>
        ))}
      </div>

      <TextInput title="Name" handler={setName} value={name} />
      <TextInput title="Contact" handler={setCred} value={cred} />

      <button
        className="mt-2 text-white bg-blue-500"
        onClick={handleAdd}
        type="button"
      >
        {btnCopy}
      </button>
    </fieldset>
  );
};

export default AddContact;
