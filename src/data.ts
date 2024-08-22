import { v4 as uuid } from "uuid";

export type pInfoType = "name" | "email" | "number" | "address";
export type eduType = "school" | "degree" | "start" | "end" | "location" | "id";
export type expType = "company" | "title" | "description" | "start" | "end" | "location" | "id";

export const defPInfo: Record<pInfoType, string> = {
  name: "Tom Nook",
  email: "tomnook@mail.com",
  number: "416-123-4567",
  address: "Happy Village",
};
export const defEducations: Record<eduType, string>[] = [
  {
    school: "University of Tortimer",
    degree: "Bachelor of Business Managment",
    start: "2014-09",
    end: "2019-05",
    location: "Happy Village, Animal Crossing",
    id: uuid(),
  },
];
export const defExp: Record<expType, string>[] = [
  {
    company: `Nook's Cranny`,
    title: `Owner and Manager`,
    description: `Established and managed a successful general store, Nook's Cranny, providing \
    essential goods and services to island residents.\nHandled all aspects of the \
    business, including inventory management, customer service, and financial transactions.\
    \nImplemented strategic pricing and promotional strategies to drive sales and customer \
    satisfaction.\nMentored and guided new residents, offering advice on home improvement \
    and island development.`,
    start: `2010-05`,
    end: ``,
    location: `Happy Village`,
    id: uuid(),
  },
  {
    company: `Nook Incorporated`,
    title: `Real Estate Agent`,
    description: `Assisted new residents in finding their dream homes and developing \
    their islands.\nFacilitated land purchases, home construction, and interior design \
    options.\nProvided ongoing support and guidance to ensure resident satisfaction and \
    long-term retention.\nCollaborated with island developers to plan and execute \
    large-scale construction projects.`,
    start: `2005-01`,
    end: `2010-05`,
    location: `Happy Village`,
    id: uuid(),
  },
  {
    company: `Nook's Homes`,
    title: `Construction Worker`,
    description: `Played a vital role in the construction and development of new homes \
    and infrastructure on the island.\nAssisted in designing and building various types \
    of homes, including starter houses, mansions, and vacation homes.\nCollaborated \
    with residents to customize their dream homes, ensuring their unique personalities were \
    reflected.\nMaintained a high standard of quality and attention to detail in all \
    construction projects.`,
    start: `2001-01`,
    end: `2005-05`,
    location: `Happy Village`,
    id: uuid(),
  },
];
