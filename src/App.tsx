import { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import InfoSection from "./InfoSection.tsx";
import { defPInfo, defEducations, eduType } from "./data.ts";
import CV from "./CV.tsx";
import Section from "./Section.tsx";
import EduSection from "./EduSection.tsx";
import DropArea from "./DropArea.tsx";

function App(): JSX.Element {
  //get from storage or use default values
  const pInfoStore = localStorage.getItem('pInfo')!==null?
                     (JSON.parse(localStorage.getItem('pInfo')!)):defPInfo;
  const eduStore = localStorage.getItem('eduInfo')!==null?
                     (JSON.parse(localStorage.getItem('eduInfo')!)):defEducations;
  //state vars
  const [pInfo,setPInfo] = useState(pInfoStore);
  const [eduInfo, setEduInfo] = useState(eduStore);
  const [activeEdu, setActiveEdu] = useState('');
  const [activeCard, setActiveCard] = useState('');

  function handleDrop(e: React.DragEvent<HTMLDivElement>){
      const dragArea = e.target as HTMLElement;
      console.log(`${activeCard} is dragged to area ${dragArea.getAttribute('id')}`);
  }
  //update storage
  useEffect(()=>{
    localStorage.setItem('pInfo',JSON.stringify(pInfo));
  },[pInfo])
  useEffect(()=>{
    localStorage.setItem('eduInfo',JSON.stringify(eduInfo));
  },[eduInfo])
  //generate sections
  const eduSections = eduInfo.map((edu:Record<eduType,string>, index:number)=>{
    const initialDrop = index===0?<DropArea id={index} handleDrop={handleDrop}/>:null;
    return(
      <section key={edu.id}> 
        {initialDrop}
        <EduSection
          eduInfo={edu}
          handleChange={eduChange}
          isActive={activeEdu===edu.id}
          toggleEdu={(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{
            e.preventDefault();
            {(activeEdu===edu.id)? setActiveEdu('') : setActiveEdu(edu.id)}}}
          delEdu={delEdu}
          setActiveCard={setActiveCard}
        ></EduSection>
        <DropArea id={index+1} handleDrop={handleDrop}/>
      </section>
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
  function delEdu(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
      e.preventDefault();
      const tar = e.target as HTMLElement;
      const sectID = tar.closest('div.eduSection')?.id;
      const mod = structuredClone(eduInfo);
      const index = mod.findIndex((edu:Record<eduType,string>)=>edu.id===sectID);
      mod.splice(index,1)
      setEduInfo(mod);
  }
  function addEdu(e:React.MouseEvent<HTMLButtonElement,MouseEvent>){
    e.preventDefault();
    const newEducation ={
      school: "",
      degree: "",
      start: "",
      end: "",
      location: "",
      id: uuid(),
    };
    const newEdus=structuredClone(eduInfo);
    newEdus.push(newEducation);
    setEduInfo(newEdus);
    setActiveEdu(newEducation.id);
  }
  return (
    <div className="page">
      <div className="inputSections">
        <InfoSection 
          pInfo={pInfo}
          handleChange={pInfoChange}
        ></InfoSection>
        <Section
          sectionName="Education"
          inputs={eduSections}
          addNew={addEdu}
          toggleSection={toggleSection}
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
