// interface infoProps{
//     register: UseFormRegister<Record<defData, string>>;
//     setValue: UseFormRegister<Record<defData, string>>;
// }

import { useFormContext } from "react-hook-form"

function InfoSection(): JSX.Element {
  const {register, setValue} = useFormContext();
    
  return (
    <form className="section">
      <h2>Personal Details:</h2>
      <div key={1} className="inputField">
        <label>Name</label>
        <input {...register('name')} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue('name', e.target.value)}}>
        </input>
      </div>
      <div key={2} className="inputField">
        <label>Email</label>
        <input {...register('email')} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue('email', e.target.value)}}>
        </input>
      </div>
      <div key={3} className="inputField">
        <label>Phone Number</label>
        <input {...register('number')} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue('number', e.target.value)}}>
        </input>
      </div>
      <div key={4} className="inputField">
        <label>Address</label>
        <input {...register('address')} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue('address', e.target.value)}}>
        </input>
      </div>
    </form>
  )
}
export default InfoSection;