interface InputProps {
  title: string;
  value: string;
  id: string;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  title,
  value,
  id,
  type,
  handleChange,
}: InputProps): JSX.Element {
  return (
    <div className="flex items-center">
      <h3>{title}:</h3>
      <input
        id={id}
        defaultValue={value}
        onChange={handleChange}
        type={type}
      ></input>
    </div>
  );
}

export default Input;
