import generatePDF, { Resolution, Options } from "react-to-pdf";

const options: Options = {
    method: "open",
    resolution: Resolution.HIGH,
    page: {
      format: "letter",
    },
    overrides: {
      canvas: { useCORS: true },
    },
  };
const savePDF = () => {
    generatePDF(() => document.getElementById("CV"), options);
};

export default savePDF