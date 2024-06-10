import { useState } from "react";
import InfoSection from "./InfoSection.tsx";
import { defPInfo, defEducations } from "./data.ts";
import CV from "./CV.tsx";
import Section from "./Section.tsx";
import EduSection from "./EduSection.tsx";

function App(): JSX.Element {
  const [pInfo,setPInfo] = useState(defPInfo);
  const [eduInfo, setEduInfo] = useState(defEducations);
  //generate sections
  const eduSections = eduInfo.map((edu)=>{
    return(
      <EduSection
      eduInfo={edu}
      handleChange={eduChange}
      ></EduSection>
    )})
  //functions to handle user changes  
  function pInfoChange(e:React.ChangeEvent<HTMLInputElement>){
    const id = e.target.id;
    setPInfo({...pInfo,[id]:e.target.value})
  }
  function eduChange(e:React.ChangeEvent<HTMLInputElement>){
    const sectID = e.target.closest('div.eduSection')?.id;
    const id = e.target.id;
    const mod = structuredClone(eduInfo); //to avoid modifying states directly
    for(let i=0; i<mod.length;i++){
      if(mod[i].id===sectID){
        mod[i]={...mod[i],[id]:e.target.value};
      }
      setEduInfo(mod);
    }
  }
  function addEdu(e:React.MouseEvent<HTMLButtonElement,MouseEvent>){
    //function to create new eduType object, and add it to eduInfo
    e.preventDefault();
    // const newEducation ={
    //   school: "",
    //   degree: "",
    //   start: "",
    //   end: "",
    //   location: "",
    // }
  }
  return (
    <div className="page">
      <div className="inputSections">
        <InfoSection 
          key={0} 
          pInfo={pInfo}
          handleChange={pInfoChange}
        ></InfoSection>
        <Section
          key={1}
          sectionName="Education"
          inputs={eduSections}
          addNew={addEdu}
        ></Section>
      </div>
      <CV 
        pInfo = {pInfo}
        eduInfo = {eduInfo}
      ></CV>
    </div>
  );
}

export default App;
