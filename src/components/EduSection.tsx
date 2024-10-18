import Input from "./Input";
import { eduType } from "../data";

interface eduProps {
  eduInfo: Record<eduType, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isActive: boolean;
  toggleEdu: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  delEdu: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  setActiveCard: React.Dispatch<React.SetStateAction<string>>;
}

function EduSection({
  eduInfo,
  handleChange,
  isActive,
  toggleEdu,
  delEdu,
  setActiveCard,
}: eduProps): JSX.Element {
  return (
    <div
      id={eduInfo.id}
      className="subSection"
      draggable={true}
      onDragStart={() => setActiveCard(eduInfo.id)}
      onDragEnd={() => setActiveCard("")}
    >
      <div className="flex justify-between mb-2">
        <div className="font-medium text-base">{eduInfo.school}</div>
        <div className="flex items-center">
          <button
            className="edit icon"
            onClick={(e) => {
              toggleEdu(e);
            }}
          ></button>
          <button
            className="delete icon"
            onClick={(e) => {
              delEdu(e);
            }}
          ></button>
        </div>
      </div>
      <div className="inputSect" hidden={!isActive}>
        <Input
          title="School"
          value={eduInfo.school}
          id="school"
          type="text"
          handleChange={handleChange}
        ></Input>
        <Input
          title="Degree"
          value={eduInfo.degree}
          id="degree"
          type="text"
          handleChange={handleChange}
        ></Input>
        <Input
          title="Start Date"
          value={eduInfo.start}
          id="start"
          type="month"
          handleChange={handleChange}
        ></Input>
        <Input
          title="End Date"
          value={eduInfo.end}
          id="end"
          type="month"
          handleChange={handleChange}
        ></Input>
        <Input
          title="Location"
          value={eduInfo.location}
          id="location"
          type="text"
          handleChange={handleChange}
        ></Input>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={(e) => toggleEdu(e)}>Done</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EduSection;
