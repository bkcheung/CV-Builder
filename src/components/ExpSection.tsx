import Input from "./Input";
import { expType } from "../data";

interface expProps {
  expInfo: Record<expType, string>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  isActive: boolean;
  toggleExp: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  delExp: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  setActiveCard: React.Dispatch<React.SetStateAction<string>>;
}

function ExpSection({
  expInfo,
  handleChange,
  isActive,
  toggleExp,
  delExp,
  setActiveCard,
}: expProps): JSX.Element {
  return (
    <div
      id={expInfo.id}
      className="subSection"
      draggable={true}
      onDragStart={() => setActiveCard(expInfo.id)}
      onDragEnd={() => setActiveCard("")}
    >
      <div className="flex justify-between">
        <div className="font-medium text-base">{expInfo.company}</div>
        <div className="flex items-center">
          <button
            className="edit icon"
            onClick={(e) => {
              toggleExp(e);
            }}
          ></button>
          <button
            className="delete icon"
            onClick={(e) => {
              delExp(e);
            }}
          ></button>
        </div>
      </div>
      <div hidden={!isActive}>
        <Input
          title="Company"
          value={expInfo.company}
          id="company"
          type="text"
          handleChange={handleChange}
        ></Input>
        <Input
          title="Title"
          value={expInfo.title}
          id="title"
          type="text"
          handleChange={handleChange}
        ></Input>
        <Input
          title="Start Date"
          value={expInfo.start}
          id="start"
          type="month"
          handleChange={handleChange}
        ></Input>
        <Input
          title="End Date"
          value={expInfo.end}
          id="end"
          type="month"
          handleChange={handleChange}
        ></Input>
        <Input
          title="Location"
          value={expInfo.location}
          id="location"
          type="text"
          handleChange={handleChange}
        ></Input>
        <div className="flex flex-col items-start">
          <h3>Description:</h3>
          <textarea
            className="m-0 p-2 min-w-full"
            id="description"
            rows={3}
            defaultValue={expInfo.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <div className="flex justify-center">
            <button className="mt-4" onClick={(e) => toggleExp(e)}>
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpSection;
