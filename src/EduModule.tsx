import { useFormContext } from "react-hook-form"

interface eduProps{
    keyMod: number,
    closeSect: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

function EduModule({keyMod, closeSect}:eduProps): JSX.Element {
    const {register, setValue} = useFormContext();
    const keys = [6,7,8,9,10].map((num)=>num*keyMod);

    return(
      <>
        <div key={keys[0]} className="inputField">
            <label>School</label>
            <input {...register('school')} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValue('school', e.target.value)}}>
            </input>
        </div>
        <div key={keys[1]} className="inputField">
            <label>Degree</label>
            <input {...register('degree')} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValue('degree', e.target.value)}}>
            </input>
        </div>
        <div key={keys[2]} className="inputField">
            <label>Start Date</label>
            <input type="month" {...register('start')} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValue('start', e.target.value)}}
                    required>
            </input>
        </div>
        <div key={keys[3]} className="inputField">
            <label>End Date</label>
            <input type="month" {...register('end')} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValue('end', e.target.value)}}>
            </input>
        </div>
        <div key={keys[4]} className="inputField">
            <label>Location</label>
            <input {...register('location')} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValue('location', e.target.value)}}>
            </input>
        </div>
        <div style={{display: "flex", justifyContent:"right"}}>
            <button className="done" onClick={(e)=>closeSect(e)}>Done</button>
        </div>
      </>
    )}

    export default EduModule;