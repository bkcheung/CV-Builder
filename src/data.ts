import { v4 as uuid } from 'uuid';

export type pInfoType = 'name'|'email'|'number'|'address';
export type eduType = 'school'|'degree'|'start'|'end'|'location'|'id';
export type expType = 'company'|'title'|'description'|'start'|'end'|'location'|'id';


export const defPInfo:Record<pInfoType,string> = {
    name: 'Bonnie Cheung',
    email: 'bonnie@mail.com',
    number: '416-123-4567',
    address: 'Toronto, Canada'
}
export const defEducations:Record<eduType,string>[] = [{
    school: 'University of Waterloo',
    degree: 'Mechatronics Engineering',
    start: '2014-09',
    end: '2019-05',
    location: 'Waterloo, Ontario',
    id: uuid(),
}]
export const defExp:Record<expType,string>[] = [{
    company: 'Apple',
    title: 'iPad Product Design Engineer',
    description:'Reduced R&D cost by ~$2M by architecting a unified MLB design that \
    can be shared between different sized products\nCollaborated with cross-functional \
    teams, including EE, Thermals, Antenna, RF, Rel, and factory teams to design a variety \
    of flexes and PCBs for next generation products.\nSpearheaded innovative new design \
    for speaker mesh to reduce liquid ingress',
    start: '2022-01',
    end: '2023-06',
    location: 'Cupertino, California',
    id: uuid(),
}]