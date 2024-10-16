import { pInfoType, eduType, expType } from "../../data";
import EduCV from "./EduCV";
import ExpCV from "./ExpCV";

interface cvProps {
  pInfo: Record<pInfoType, string>;
  eduInfo: Record<eduType, string>[];
  expInfo: Record<expType, string>[];
}
export default function CV({ pInfo, eduInfo, expInfo }: cvProps): JSX.Element {
  const educations = eduInfo.map((edu) => {
    return <EduCV key={edu.id} eduInfo={edu}></EduCV>;
  });
  const experiences = expInfo.map((exp) => {
    return <ExpCV key={exp.id} expInfo={exp}></ExpCV>;
  });
  return (
    <div id="CV">
      <div className="cvHeader">
        <div className="text-3xl mb-4">{pInfo.name}</div>
        <div className="relative flex justify-between items-center right-[5px]">
          <div className="ml-1">📞 {pInfo.number}</div>
          <div className="ml-1">✉️ {pInfo.email}</div>
          <div className="ml-1">📍 {pInfo.address}</div>
        </div>
      </div>
      <div className="p-6 pt-2">
        <div className="sectionHeader">Education</div>
        {educations}
        <div className="sectionHeader">Experience</div>
        {experiences}
      </div>
    </div>
  );
}
