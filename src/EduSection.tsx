import { useFormContext } from "react-hook-form"

function EduSection(): JSX.Element {
  const {register, setValue, watch} = useFormContext();
    
  return (
    <span className="eduSection">
      <div className="flexRow">
        <h3>{watch('school')}</h3>
        <button className="edit" onClick={(e)=>{toggleSection(e)}}></button>
        <button className="delete" onClick={(e)=>{del(e)}}></button>
      </div>
      
      <div className="inputSect" hidden={true}>
        <div key={6} className="inputField">
            <label>School</label>
            <input {...register('school')} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValue('school', e.target.value)}}>
            </input>
        </div>
        <div key={7} className="inputField">
            <label>Degree</label>
            <input {...register('degree')} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValue('degree', e.target.value)}}>
            </input>
        </div>
        <div key={8} className="inputField">
            <label>Start Date</label>
            <input {...register('start')} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValue('start', e.target.value)}}>
            </input>
        </div>
        <div key={9} className="inputField">
            <label>End Date</label>
            <input {...register('end')} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValue('end', e.target.value)}}>
            </input>
        </div>
        <div key={10} className="inputField">
            <label>Location</label>
            <input {...register('location')} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValue('location', e.target.value)}}>
            </input>
        </div>
      </div>
    </span>
  )
}

function toggleSection(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();
    const tar = e.target as HTMLElement;
    const container = tar.closest('span');
    if(container!==null){
        const inputs = container.querySelector('div.inputSect');
        if(inputs!==null){
            inputs.toggleAttribute('hidden');
        }
    }
}

function del(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();
    //delete function here
}

export default EduSection;