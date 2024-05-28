interface InputProps{
    key:number,
    name:string,
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

function Input({key=-1,name='',handleChange}:InputProps): JSX.Element{

    

    return (
        <div key={key} className = "inputField">
            <h3>{name}:</h3>
            <input onChange={handleChange}></input>
        </div>
    )
}

export default Input;