import { sectionData } from './data.ts'
import Section from './Section.tsx'
import CV from './CV.tsx'
import { useState } from 'react';

function App(): JSX.Element{
    const [name, setName] = useState('Bonnie Cheung');

    function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    const sections = sectionData.map(section =>
        <Section key={section.id} sectionName={section.sectionName} inputs={section.inputs} handleChange={handleChange}></Section>
    )
    return(
        <div className="page">
            <div className="inputSections">
            {sections}
            </div>
           <CV name={name}></CV>
        </div>
    )

}

export default App;