interface CVProps{
    name:string,
}
function CV({name='Bonnie Cheung'}:CVProps): JSX.Element{

    return(
        <div className="CV">
            <h2>{name}</h2>
        </div>
    )
}

export default CV;