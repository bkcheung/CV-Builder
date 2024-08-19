import { ReactNode } from "react";

interface SectionProps {
  sectionName: string,
  inputs: ReactNode,
  active: boolean,
  addNew:(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>void,
  toggleSection:(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>void,
}

function Section({ sectionName = "", inputs, active, addNew, toggleSection }: SectionProps): JSX.Element {
  return (
    <form className="section" id={sectionName}>
      <button className="flexRow" onClick={(e)=>{
        toggleSection(e);
      }}>
        <h2 className="text-xl font-medium">{sectionName}:</h2>
        <img hidden={active} src="/down.png" style={{ height: "1.5em"}}></img>
        <img hidden={!active} src="/up.png" style={{ height: "1.5em"}}></img>
      </button>
      <div hidden={!active}>
        <div className="inputSections">
            {inputs}
          <button className="add" onClick={(e)=>addNew(e)}>Add New</button>
        </div>
      </div>
    </form>
  );
}

export default Section;
