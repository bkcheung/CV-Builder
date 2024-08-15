import { v4 as uuid } from 'uuid';

export type pInfoType = 'name'|'email'|'number'|'address';
export type eduType = 'school'|'degree'|'start'|'end'|'location'|'id';

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