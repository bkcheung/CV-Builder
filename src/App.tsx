import { FormProvider, useForm } from "react-hook-form";
import { sectionData, defaultData, inputData } from "./data.ts";
import CV from "./CV.tsx";
import Section from "./Section.tsx";
import InfoSection from "./InfoSection.tsx";


function App(): JSX.Element {
const methods = useForm({defaultValues: defaultData});

  const sections = sectionData.map((section) => {
    return (
      <>
        <InfoSection key={0}></InfoSection>
        <Section
            key={section.id}
            sectionName={section.sectionName}
            inputs = {inputData.map((iField) => {
                return (
                    <div key={iField.id} className="inputField">
                        <label>{iField.title}</label>
                        <input
                        {...methods.register(iField.field)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            methods.setValue(iField.field, e.target.value);
                        }}
                        ></input>
                    </div>
                );
            })}
        />
      </>
    );
  });

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
