import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { defPInfo, defEducations, defExp, eduType, expType } from "./data.ts";
import CV from "./CV.tsx";
import Section from "./Section.tsx";
import InfoSection from "./InfoSection.tsx";
import EduSection from "./EduSection.tsx";
import ExpSection from "./ExpSection.tsx";
import DropArea from "./DropArea.tsx";
import Footer from "./Footer.tsx";
import savePDF from "./savePDF.ts";

function App(): JSX.Element {
  //get from storage or use default values
  const pInfoStore =
    localStorage.getItem("pInfo") !== null
      ? JSON.parse(localStorage.getItem("pInfo")!)
      : defPInfo;
  const eduStore =
    localStorage.getItem("eduInfo") !== null
      ? JSON.parse(localStorage.getItem("eduInfo")!)
      : defEducations;
  const expStore =
    localStorage.getItem("expInfo") !== null
      ? JSON.parse(localStorage.getItem("expInfo")!)
      : defExp;
  //state vars
  const [pInfo, setPInfo] = useState(pInfoStore);
  const [eduInfo, setEduInfo] = useState(eduStore);
  const [expInfo, setExpInfo] = useState(expStore);
  const [activeEdu, setActiveEdu] = useState("");
  const [activeExp, setActiveExp] = useState("");
  const [activeCard, setActiveCard] = useState("");
  const [activeSection, setActiveSection] = useState("Experience");
  //update storage
  useEffect(() => {
    localStorage.setItem("pInfo", JSON.stringify(pInfo));
  }, [pInfo]);
  useEffect(() => {
    localStorage.setItem("eduInfo", JSON.stringify(eduInfo));
  }, [eduInfo]);
  useEffect(() => {
    localStorage.setItem("expInfo", JSON.stringify(expInfo));
  }, [expInfo]);
  //generate sections
  const eduSections = eduInfo.map(
    (edu: Record<eduType, string>, index: number) => {
      const initialDrop =
        index === 0 ? <DropArea id={index} handleDrop={handleEduDrop} /> : null;
      return (
        <section key={edu.id}>
          {initialDrop}
          <EduSection
            eduInfo={edu}
            handleChange={eduChange}
            isActive={activeEdu === edu.id}
            toggleEdu={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.preventDefault();
              {
                activeEdu === edu.id ? setActiveEdu("") : setActiveEdu(edu.id);
              }
            }}
            delEdu={delEdu}
            setActiveCard={setActiveCard}
          ></EduSection>
          <DropArea id={index + 1} handleDrop={handleEduDrop} />
        </section>
      );
    },
  );
  const expSections = expInfo.map(
    (exp: Record<expType, string>, index: number) => {
      const initialDrop =
        index === 0 ? <DropArea id={index} handleDrop={handleExpDrop} /> : null;
      return (
        <section key={exp.id}>
          {initialDrop}
          <ExpSection
            expInfo={exp}
            handleChange={expChange}
            isActive={activeExp === exp.id}
            toggleExp={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.preventDefault();
              {
                activeExp === exp.id ? setActiveExp("") : setActiveExp(exp.id);
              }
            }}
            delExp={delExp}
            setActiveCard={setActiveCard}
          ></ExpSection>
          <DropArea id={index + 1} handleDrop={handleExpDrop} />
        </section>
      );
    },
  );
  //functions to handle user changes
  function pInfoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const id = e.target.id;
    setPInfo({ ...pInfo, [id]: e.target.value });
  }
  function eduChange(e: React.ChangeEvent<HTMLInputElement>) {
    const sectID = e.target.closest("div.subSection")?.id;
    const id = e.target.id;
    const mod = structuredClone(eduInfo); //to avoid modifying states directly
    for (let i = 0; i < mod.length; i++) {
      if (mod[i].id === sectID) {
        mod[i] = { ...mod[i], [id]: e.target.value };
      }
      setEduInfo(mod);
    }
  }
  function expChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const sectID = e.target.closest("div.subSection")?.id;
    const id = e.target.id;
    const mod = structuredClone(expInfo);
    for (let i = 0; i < mod.length; i++) {
      if (mod[i].id === sectID) {
        mod[i] = { ...mod[i], [id]: e.target.value };
      }
      setExpInfo(mod);
    }
  }
  function toggleSection(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const tar = e.target as HTMLElement;
    const form = tar.closest("form");
    const id = String(form?.getAttribute("id"));
    const button = form?.querySelector("button");
    if (form !== null) {
      const icons = button?.getElementsByClassName("icon");
      if(icons!==undefined){
        for (let i = 0; i < 2; i++) {
          icons[i].toggleAttribute("hidden");
        }
      }
      if (form.querySelector("div") !== null) {
        form.querySelector("div")?.toggleAttribute("hidden");
      }
      activeSection === id ? setActiveSection("") : setActiveSection(id);
    }
  }
  function delEdu(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const tar = e.target as HTMLElement;
    const sectID = tar.closest("div.subSection")?.id;
    const mod = structuredClone(eduInfo);
    const index = mod.findIndex(
      (edu: Record<eduType, string>) => edu.id === sectID,
    );
    mod.splice(index, 1);
    setEduInfo(mod);
  }
  function delExp(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const tar = e.target as HTMLElement;
    const sectID = tar.closest("div.subSection")?.id;
    const mod = structuredClone(expInfo);
    const index = mod.findIndex(
      (exp: Record<expType, string>) => exp.id === sectID,
    );
    mod.splice(index, 1);
    setExpInfo(mod);
  }
  function addEdu(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const newEducation = {
      school: "",
      degree: "",
      start: "",
      end: "",
      location: "",
      id: uuid(),
    };
    const newEdus = structuredClone(eduInfo);
    newEdus.push(newEducation);
    setEduInfo(newEdus);
    setActiveEdu(newEducation.id);
  }
  function addExp(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const newExp = {
      company: "",
      title: "",
      description: "",
      start: "",
      end: "",
      location: "",
      id: uuid(),
    };
    const newExps = structuredClone(expInfo);
    newExps.push(newExp);
    setExpInfo(newExps);
    setActiveExp(newExp.id);
  }
  //Reordering
  function handleEduDrop(e: React.DragEvent<HTMLDivElement>) {
    const dragArea = e.target as HTMLElement;
    const dropId = dragArea.getAttribute("id");
    //reorder array
    const oldIndex = eduInfo.findIndex(
      (edu: Record<eduType, string>) => edu.id === activeCard,
    );
    let newIndex;
    if (dropId !== null) {
      newIndex = dropId < oldIndex ? Number(dropId) : Number(dropId) - 1;
    }
    const moveCard = eduInfo[oldIndex];
    const remainingCards = eduInfo.filter(
      (edu: Record<eduType, string>) => edu.id !== activeCard,
    );
    let newOrder = remainingCards.splice(0, newIndex);
    newOrder = [...newOrder, moveCard, ...remainingCards];
    setEduInfo(newOrder);
  }
  function handleExpDrop(e: React.DragEvent<HTMLDivElement>) {
    const dragArea = e.target as HTMLElement;
    const dropId = dragArea.getAttribute("id");
    //reorder array
    const oldIndex = expInfo.findIndex(
      (exp: Record<expType, string>) => exp.id === activeCard,
    );
    let newIndex;
    if (dropId !== null) {
      newIndex = dropId < oldIndex ? Number(dropId) : Number(dropId) - 1;
    }
    const moveCard = expInfo[oldIndex];
    const remainingCards = expInfo.filter(
      (exp: Record<expType, string>) => exp.id !== activeCard,
    );
    let newOrder = remainingCards.splice(0, newIndex);
    newOrder = [...newOrder, moveCard, ...remainingCards];
    setExpInfo(newOrder);
  }
  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
          <InfoSection pInfo={pInfo} handleChange={pInfoChange}></InfoSection>
          <Section
            sectionName="Education"
            inputs={eduSections}
            active={activeSection === "Education"}
            addNew={addEdu}
            toggleSection={toggleSection}
          ></Section>
          <Section
            sectionName="Experience"
            inputs={expSections}
            active={activeSection === "Experience"}
            addNew={addExp}
            toggleSection={toggleSection}
          ></Section>
        </div>
        <CV pInfo={pInfo} eduInfo={eduInfo} expInfo={expInfo}></CV>
        <button
          className="flex align-middle min-w-14 h-12 m-8 ml-0 p-4
                      bg-white bg-opacity-30 rounded-lg"
          onClick={() => savePDF()}
          title="Download"
        >
          <div className="download icon"></div>
        </button>
      </div>
      <Footer/>
    </>
    
  );
}

export default App;
