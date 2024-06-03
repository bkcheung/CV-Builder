import { ReactNode } from "react";

interface SectionProps {
  sectionName: string;
  inputs: ReactNode;
}

function Section({ sectionName = "", inputs }: SectionProps): JSX.Element {
  return (
    <form className="section">
      <button className="flexRow" onClick={(e)=>{
        toggleSection(e);
      }}>
        <h2>{sectionName}:</h2>
        <img src="/direction.png" style={{ height: "1.5em"}}></img>
      </button>
      <div className="inputSect, hidden">
        {inputs}
      </div>
    </form>
  );
}

function toggleSection(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();
    const tar = e.target as HTMLElement;
    const form = tar.closest('form');
    if(form!==null && form.querySelector('div')!==null){
        form.querySelector('div')?.classList.toggle('hidden');
    }
}

export default Section;
