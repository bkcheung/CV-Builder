function Input({name=""}): JSX.Element{
    return (
        <div className = "inputField">
            <h3>{name}:</h3>
            <input></input>
        </div>
    )
}

export default Input;