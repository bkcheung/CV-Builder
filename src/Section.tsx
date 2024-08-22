import { ReactNode } from "react";

interface SectionProps {
  sectionName: string;
  inputs: ReactNode;
  active: boolean;
  addNew: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  toggleSection: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function Section({
  sectionName = "",
  inputs,
  active,
  addNew,
  toggleSection,
}: SectionProps): JSX.Element {
  return (
    <form className="section" id={sectionName}>
      <button
        className="flex justify-between"
        onClick={(e) => {
          toggleSection(e);
        }}
      >
        <h2 className="text-xl font-medium">{sectionName}:</h2>
        <div hidden={active} className="down icon"></div>
        <div hidden={!active} className="up icon"></div>
      </button>
      <div hidden={!active}>
        <div className="flex flex-col">
          {inputs}
          <button className="add" onClick={(e) => addNew(e)}>
            Add New
          </button>
        </div>
      </div>
    </form>
  );
}

export default Section;
