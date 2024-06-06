import { useFormContext } from "react-hook-form"

function EduSection(): JSX.Element {
  const {register, setValue, watch} = useFormContext();
    
  return (
    <span className="eduSection">
      <div className="flexRow">
        <div style={{fontWeight:500}}>{watch('school')}</div>
        <div>
            <button className="edit" onClick={(e)=>{toggleSection(e); toggleEdit(e);}}></button>
            <button className="delete" onClick={(e)=>{del(e)}}></button>
        </div>
      </div>
      
      <div className="inputSect" style={{marginTop:'1em'}}hidden={true}>
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
            <input type="month" {...register('start')} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValue('start', e.target.value)}}
                    required>
            </input>
        </div>
        <div key={9} className="inputField">
            <label>End Date</label>
            <input type="month" {...register('end')} 
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
        <div style={{display: "flex", justifyContent:"center"}}>
            <button type="submit" onClick={(e)=>saveChanges(e)}>Save</button>
            <button onClick={(e) => canc(e)}>Cancel</button>
        </div>
      </div>
    </span>
  )
}
function toggleSection(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();
    const tar = e.target as HTMLElement;
    const container = tar.closest('span');
    const inputs = container?.querySelector('div.inputSect');
    inputs?.toggleAttribute('hidden');
}
function toggleEdit(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
    const tar = e.target as HTMLElement;
    const edit = tar.closest('span')?.querySelector('button.edit');
    edit?.toggleAttribute('hidden');
}
function del(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();
    //delete function here
}
function saveChanges(e:React.MouseEvent<HTMLButtonElement,MouseEvent>){
    e.preventDefault();
    //save function here
}
function canc(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();
    toggleSection(e);
    toggleEdit(e);
}

export default EduSection;