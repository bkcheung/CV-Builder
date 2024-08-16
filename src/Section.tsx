import { ReactNode } from "react";

interface SectionProps {
  sectionName: string,
  inputs: ReactNode,
  addNew:(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>void,
  toggleSection:(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>void,
}

function Section({ sectionName = "", inputs, addNew, toggleSection }: SectionProps): JSX.Element {
  return (
    <form className="section">
      <button className="flexRow" onClick={(e)=>{
        toggleSection(e);
      }}>
        <h2>{sectionName}:</h2>
        <img hidden={false} src="/down.png" style={{ height: "1.5em"}}></img>
        <img hidden={true} src="/up.png" style={{ height: "1.5em"}}></img>
      </button>
      <div hidden={true}>
        <div className="inputSections">
            {inputs}
          <button className="add" onClick={(e)=>addNew(e)}>Add New</button>
        </div>
      </div>
    </form>
  );
}

export default Section;
