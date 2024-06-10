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
        <img hidden={true} src="/down.png" style={{ height: "1.5em"}}></img>
        <img hidden={false} src="/up.png" style={{ height: "1.5em"}}></img>
      </button>
      <div hidden={true}>
        {inputs}
        <button>Add New</button>
      </div>
    </form>
  );
}

function toggleSection(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();
    const tar = e.target as HTMLElement;
    const form = tar.closest('form');
    if(form!==null){
        const imgs = form?.querySelectorAll('img');
        for(let i=0;i<2;i++){
            imgs[i].toggleAttribute('hidden');
        }
        if(form.querySelector('div')!==null){
            form.querySelector('div')?.toggleAttribute('hidden');
        }
    }
}

export default Section;
