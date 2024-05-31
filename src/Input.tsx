interface InputProps {
  key: number;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ name = "", handleChange }: InputProps): JSX.Element {
  return (
    <div className="inputField">
      <h3>{name}:</h3>
      <input onChange={handleChange}></input>
    </div>
  );
}

export default Input;
