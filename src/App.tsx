import { useState } from "react";
import InfoSection from "./InfoSection.tsx";
import { defPInfo } from "./data.ts";

function App(): JSX.Element {
  const [pInfo,setPInfo] = useState(defPInfo);
  const sections = 
      <>
        <InfoSection 
          key={0} 
          pInfo={pInfo}
          handleChange={handleChange}
        ></InfoSection>
      </>
  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    const id = e.target.id;
    setPInfo({...pInfo,[id]:e.target.value})
  }
  return (
    <div className="page">
      <div className="inputSections">
        {sections}
      </div>
  
    </div>
  );
}

export default App;
