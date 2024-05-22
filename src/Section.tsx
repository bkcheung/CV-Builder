import Input from "./Input";

function Section({sectionName=""}): JSX.Element{
    
    return (
        <div className = "section">
            <h2>{sectionName}:</h2>
            <Input name="Name"></Input>
            <Input name="Email address"></Input>
            <Input name="Phone number"></Input>
            <Input name="Address"></Input>
        </div>
    )
}

export default Section;
