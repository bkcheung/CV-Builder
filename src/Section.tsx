import { ReactNode } from "react";

interface SectionProps {
  sectionName: string,
  inputs: ReactNode,
  addNew:(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>void,
  // toggleSection:(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>void,
  isActive:boolean,
  onShow:(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>void
}

function Section({ sectionName = "", inputs, addNew, isActive, onShow }: SectionProps): JSX.Element {
  return (
    <form className="section">
      <button className="flexRow" onClick={(e)=>{
        onShow(e);
      }}>
        <h2>{sectionName}:</h2>
        {isActive?(<img src="/up.png" style={{ height: "1.5em"}}></img>):
                  (<img src="/down.png" style={{ height: "1.5em"}}></img>)}
        {/* <img hidden={true} src="/down.png" style={{ height: "1.5em"}}></img>
        <img hidden={false} src="/up.png" style={{ height: "1.5em"}}></img> */}
      </button>
      {isActive ? (
        <div className="inputSections">
          {inputs}
          <button className="add" onClick={(e)=>addNew(e)}>Add New</button>
        </div>
      ):(<div></div>)}
      {/* <div hidden={true}>
        <div className="inputSections">
          {inputs}
          <button className="add" onClick={(e)=>addNew(e)}>Add New</button>
        </div>
      </div> */}
    </form>
  );
}

export default Section;
