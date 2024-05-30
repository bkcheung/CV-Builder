import { ReactNode } from "react";

interface SectionProps{
    sectionName:string,
    inputs: ReactNode,
}

function Section({sectionName="",inputs}:SectionProps): JSX.Element{
    
    return (
        <div className = "section">
            <h2>{sectionName}:</h2>
            {inputs}
        </div>
    )
}

export default Section;
