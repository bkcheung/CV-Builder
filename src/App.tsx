import { FormProvider, useForm } from "react-hook-form";
import { defaultData } from "./data.ts";
import CV from "./CV.tsx";
import Section from "./Section.tsx";
import InfoSection from "./InfoSection.tsx";
import EduSection from "./EduSection.tsx";


function App(): JSX.Element {
const methods = useForm({defaultValues: defaultData});

  const sections = 
      <>
        <InfoSection key={0}></InfoSection>
        <Section
            key={5}
            sectionName={'Education'}
            inputs = {<EduSection></EduSection>}
        />
      </>

  return (
    <div className="page">
      <div className="inputSections">
        <FormProvider key={123} {...methods}>{sections}</FormProvider>
        </div>
      <CV key={100}
        props={{
          name: methods.watch("name"),
          email: methods.watch("email"),
          number: methods.watch("number"),
          address: methods.watch("address"),
          school: methods.watch("school"),
          degree: methods.watch("degree"),
          start: methods.watch("start"),
          end: methods.watch("end"),
          location: methods.watch("location"),
        }}
      ></CV>
    </div>
  );
}

export default App;
