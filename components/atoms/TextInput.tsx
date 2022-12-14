interface IInput {
  title: string;
  value: string;
  handler: (e: string) => void;
  required?: boolean;
}

const TextInput: React.FC<IInput> = ({ title, handler, ...rest }) => (
  <label className="block mt-3 capitalize">
    {title}
    <input
      className="block w-full px-2 py-1 bg-gray-600 border border-gray-200"
      onChange={(e) => handler(e.currentTarget.value)}
      {...rest}
    />
  </label>
);

export default TextInput;
