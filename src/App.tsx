import { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import InfoSection from "./InfoSection.tsx";
import { defPInfo,defEducations,defExp,eduType,expType } from "./data.ts";
import CV from "./CV.tsx";
import Section from "./Section.tsx";
import EduSection from "./EduSection.tsx";
import ExpSection from "./ExpSection.tsx";
import DropArea from "./DropArea.tsx";

function App(): JSX.Element {
  //get from storage or use default values
  const pInfoStore = localStorage.getItem('pInfo')!==null?
                     (JSON.parse(localStorage.getItem('pInfo')!)):defPInfo;
  const eduStore = localStorage.getItem('eduInfo')!==null?
                     (JSON.parse(localStorage.getItem('eduInfo')!)):defEducations;
  const expStore = localStorage.getItem('expInfo')!==null?
                     (JSON.parse(localStorage.getItem('expInfo')!)):defExp;
  //state vars
  const [pInfo,setPInfo] = useState(pInfoStore);
  const [eduInfo, setEduInfo] = useState(eduStore);
  const [expInfo, setExpInfo] = useState(expStore);
  const [activeEdu, setActiveEdu] = useState('');
  const [activeExp, setActiveExp] = useState('');
  const [activeCard, setActiveCard] = useState('');
  //update storage
  useEffect(()=>{
    localStorage.setItem('pInfo',JSON.stringify(pInfo));
  },[pInfo])
  useEffect(()=>{
    localStorage.setItem('eduInfo',JSON.stringify(eduInfo));
  },[eduInfo])
  useEffect(()=>{
    localStorage.setItem('expInfo',JSON.stringify(expInfo));
  },[expInfo])
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
    const expSections = expInfo.map((exp:Record<expType,string>, index:number)=>{
      const initialDrop = index===0?<DropArea id={index} handleDrop={handleDrop}/>:null;
      return(
        <section key={exp.id}> 
          {initialDrop}
          <ExpSection
            expInfo={exp}
            handleChange={expChange}
            isActive={activeExp===exp.id}
            toggleExp={(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{
              e.preventDefault();
              {(activeExp===exp.id)? setActiveExp('') : setActiveExp(exp.id)}}}
            delExp={delEdu}
            setActiveCard={setActiveCard}
          ></ExpSection>
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
  function expChange(e:React.ChangeEvent<HTMLInputElement>){
    const sectID = e.target.closest('div.expSection')?.id;
    const id = e.target.id;
    const mod = structuredClone(expInfo); //to avoid modifying states directly
    for(let i=0; i<mod.length;i++){
      if(mod[i].id===sectID){
        mod[i]={...mod[i],[id]:e.target.value};
      }
      setExpInfo(mod);
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
  //Education and Experience Reordering
  function handleDrop(e: React.DragEvent<HTMLDivElement>){
    const dragArea = e.target as HTMLElement;
    const dropId = dragArea.getAttribute('id');
    //reorder array
    const oldIndex=eduInfo.findIndex((edu:Record<eduType,string>)=>edu.id===activeCard);
    let newIndex;
    if(dropId!==null){newIndex=dropId<oldIndex?Number(dropId):(Number(dropId)-1)}
    const moveCard = eduInfo[oldIndex];
    const remainingCards = eduInfo.filter((edu:Record<eduType,string>)=>edu.id!==activeCard);
    let newOrder = remainingCards.splice(0,newIndex);
    newOrder = [...newOrder, moveCard, ...remainingCards];
    setEduInfo(newOrder);
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
        <Section
          sectionName="Experience"
          inputs={expSections}
          addNew={addEdu}
          toggleSection={toggleSection}
        ></Section>
      </div>
      <CV
        pInfo = {pInfo}
        eduInfo = {eduInfo}
        expInfo = {expInfo}
      ></CV>
    </div>
  );
}

export default App;
