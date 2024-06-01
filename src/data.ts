type defData = 'name'|'email'|'number'|'address'|'school'|'degree'|'start'|'end'|'location';

interface inputData{
    id: number,
    title: string,
    field: defData,
}
export const inputData:inputData[]  = [
    {id:1, title: 'Name', field:'name'},
    {id:2, title: 'Email', field:'email'},
    {id:3, title: 'Phone Number', field:'number'},
    {id:4, title: 'Address', field:'address'},
]

export const sectionData = [{
    id: 5,
    sectionName: 'Education',
    inputs:[{id:6, title: 'School', field:'school'},
            {id:7, title: 'Degree', field:'degree'},
            {id:8, title: 'Start Date', field:'start'},
            {id:9, title: 'End Date', field:'end'},
            {id:10, title: 'Location', field:'location'},
    ]
}
]

export const defaultData:Record<defData, string> = {
    name: 'Bonnie Cheung',
    email: 'bonnie@mail.com',
    number: '416-123-4567',
    address: 'Toronto, Canada',
    school: 'University of Waterloo',
    degree: 'Mechatronics Engineering',
    start: '09/2014',
    end: '05/2019',
    location: 'Waterloo, Ontario',
}