import Input from "./Input";

interface SectionProps{
    key:number,
    sectionName:string,
    inputs: (string | number) [][],
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
}

function Section({key = -1,sectionName="", inputs= [[-1,'']], handleChange}:SectionProps): JSX.Element{
    
    return (
        <div key = {key} className = "section">
            <h2>{sectionName}:</h2>
            {inputs.map((input) => {
                return <Input key = {Number(input[0])} name={String(input[1])} 
                              handleChange={handleChange}></Input>
            })}
        </div>
    )
}

export default Section;
