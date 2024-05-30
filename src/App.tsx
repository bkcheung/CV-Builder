import { useForm } from 'react-hook-form';
import { sectionData, defaultData } from './data.ts'
import CV from './CV.tsx'
import Section from './Section.tsx';

function App(): JSX.Element{
    const {register, setValue, watch} = useForm({defaultValues: defaultData});

    const sections = sectionData.map(section => {   
        return(<Section 
                key={section.id} 
                sectionName={section.sectionName}
                inputs = {section.inputs.map((iField) => {
                    const field = iField.field;
                    return(
                    <div key={iField.id}>
                        <label>{iField.title}</label>
                        <input 
                        {...register(field)}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                                    setValue(field, e.target.value);
                                }
                        }></input>
                    </div>
                )
                })}
                />
    )})
    
    return(
        <div className="page">
            <div className="inputSections">
                {sections}
            </div>
           <CV props={{
                name: watch('name'), 
                email: watch('email'), 
                number: watch('number'), 
                address: watch('address'),
                school: watch('school'),
                degree: watch('degree'),
                start: watch('start'),
                end: watch('end'),
                location: watch('location')
            }}></CV>
        </div>
    )

}

export default App;