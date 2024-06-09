interface InputProps {
  title: string,
  value: string,
  id: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({ title,value,id,handleChange }: InputProps): JSX.Element {
  return (
    <div className="inputField">
      <h3>{title}:</h3>
      <input
        id={id}
        defaultValue={value}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default Input;
