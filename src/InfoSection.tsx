// import { useFormContext } from "react-hook-form"
import Input from "./Input";
import { pInfoType } from "./data";

interface infoProps{
  pInfo:Record<pInfoType,string>,
  handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}
function InfoSection({pInfo, handleChange}:infoProps): JSX.Element {
  // const {register, setValue} = useFormContext();

  return (
    <form className="section">
      <h2>Personal Details:</h2>
      <Input 
        title="Name"
        id={'name'}
        value={pInfo.name}
        handleChange={handleChange}>
      </Input>
      <Input 
        title="Email"
        id={'email'}
        value={pInfo.email}
        handleChange={handleChange}>
      </Input>
      <Input 
        title="Number"
        id={'number'}
        value={pInfo.number}
        handleChange={handleChange}>
      </Input>
      <Input 
        title="Location"
        id={'address'}
        value={pInfo.address}
        handleChange={handleChange}>
      </Input>
      {/* <div key={1} className="inputField">
        <label>Name</label>
        <input {...register('name')} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue('name', e.target.value)}}>
        </input>
      </div> */}
      
    </form>
  )
}
export default InfoSection;