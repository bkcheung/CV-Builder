import Input from "./Input";
import { eduType } from "./data";

interface eduProps{
    eduInfo:Record<eduType,string>,
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
    toggleEdu:(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>void
    delEdu:(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>void
}
function EduSection({eduInfo, handleChange, toggleEdu, delEdu}:eduProps): JSX.Element {
  return (
    <div id={eduInfo.id}className="eduSection">
      <div className="flexRow">
        <div style={{fontWeight:500}}>{eduInfo.school}</div>
        <div>
            <button className="edit" onClick={(e)=>{toggleEdu(e)}}></button>
            <button className="delete" onClick={(e)=>{delEdu(e)}}></button>
        </div>
      </div>
      <div className="inputSect" hidden={true}>
        <Input
            title="School"
            value={eduInfo.school}
            id='school'
            handleChange={handleChange}
        ></Input>
            <Input
            title="Degree"
            value={eduInfo.degree}
            id='degree'
            handleChange={handleChange}
        ></Input>
            <Input
            title="Start Date"
            value={eduInfo.start}
            id='start'
            handleChange={handleChange}
        ></Input>
            <Input
            title="End Date"
            value={eduInfo.end}
            id='end'
            handleChange={handleChange}
        ></Input>
            <Input
            title="Location"
            value={eduInfo.location}
            id='location'
            handleChange={handleChange}
        ></Input>
        <div>
            <div style={{display: "flex", justifyContent:"center"}}>
                <button onClick={(e)=>toggleEdu(e)}>Done</button>
            </div> 
        </div>
      </div>
    </div>
  )
}

export default EduSection;