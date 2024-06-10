// type defData = 'name'|'email'|'number'|'address'|'school'|'degree'|'start'|'end'|'location';
export type pInfoType = 'name'|'email'|'number'|'address';
export type eduType = 'school'|'degree'|'start'|'end'|'location';

// export const defaultData:Record<defData, string> = {
//     name: 'Bonnie Cheung',
//     email: 'bonnie@mail.com',
//     number: '416-123-4567',
//     address: 'Toronto, Canada',
//     school: 'University of Waterloo',
//     degree: 'Mechatronics Engineering',
//     start: '2014-09',
//     end: '2019-05',
//     location: 'Waterloo, Ontario',
// }

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
}]