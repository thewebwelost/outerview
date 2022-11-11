interface IInput {
  title: string;
  value: string;
  handler: (e: string) => void;
  required?: boolean;
}

const Input: React.FC<IInput> = ({ title, handler, ...rest }) => (
  <label className="block mt-3 capitalize">
    {title}
    <input
      className="block w-full"
      onChange={(e) => handler(e.currentTarget.value)}
      {...rest}
    />
  </label>
);

export default Input;
