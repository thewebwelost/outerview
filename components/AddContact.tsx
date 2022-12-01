import React, { SetStateAction } from 'react';
import Button from './atoms/Button';
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

      <Button handleClick={handleAdd}>{btnCopy}</Button>
    </fieldset>
  );
};

export default AddContact;
