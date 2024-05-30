import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { sectionData } from './data.ts'
import CV from './CV.tsx'
import Section from './Section.tsx';
import Input from './Input.tsx';

// interface formInput {
//     name: string,
//     email: string,
//     number: string,
//     address: string,
// }

function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function App(): JSX.Element{
    const {register} = useForm();

    const [name, setName] = useState('Bonnie Cheung');
    const [email, setEmail] = useState('b.cheung@hello.com');
    const [number, setNumber] = useState('416-123-4567');
    const [address, setAddress] = useState('Toronto, Ontario');

    // function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    //     setName(e.target.value);
    // }
    // <input {...register("firstName", { required: true, maxLength: 20 })} />
    // const field = inputField.field;
    // const fxName = 'set' + capFirstLetter(inputField.field);
    // const[field, fxName] = useState(defaultData);

    const sections = sectionData.map(section => {   
        // function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
        //     setName(e.target.value);
        // }
        return(<Section 
                key={section.id} 
                sectionName={section.sectionName}
                inputs = {section.inputs.map((inputField) => {
                    const title = inputField.title;
                    const defaultData = inputField.default;

                    return(
                    <>
                        <label>{title}</label>
                        <input {...register(title)} value={defaultData} ></input>
                    </>
                        
                    // <Input 
                    //         key={Number(input[0])} 
                    //         {...register('hello')}
                    //         name={String(input[1])} 
                    //         handleChange={handleChange}></Input>)
                )
                })}
                // 
                />
    )})

    const CVprops = {name, email, number, address};
    
    return(
        <div className="page">
            <div className="inputSections">
                {sections}
            </div>
           <CV props={CVprops}></CV>
        </div>
    )

}

export default App;