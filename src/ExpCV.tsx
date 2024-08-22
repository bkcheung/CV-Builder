import dayjs from "dayjs";
import { expType } from "./data";

interface expProps{
    expInfo: Record<expType,string>
}

function ExpCV({expInfo}:expProps): JSX.Element {
    let start = dayjs(expInfo.start).format('MM/YYYY');
    if(expInfo.start===''){
      start = "Start Date"
    }
    let end = dayjs(expInfo.end).format('MM/YYYY');
    if(expInfo.end===''){
      end = "Present";
    }
    const descArray = expInfo.description.split('\n');
    const descList = descArray.map((desc:string, index)=>{
    return(
      <div key={index}>• {desc}</div>
    )
  })
    return(
       <div>
          <div className="flex justify-between">
            <div className="flexCol">
              <div className="p-1 text-sm" style={{ fontWeight: 500 }}>
                {expInfo.title}
              </div>
              <div className="p-1 text-sm">{expInfo.company}</div>
            </div>
            <div className="flexCol text-right">
              <i>
                <div className="p-1 text-sm">{start} - {end}</div>
              </i>
              <div className="p-1 text-sm">{expInfo.location}</div>
            </div>
          </div>
          <div className="p-1 text-sm">{descList}</div>
       </div>
          
    )}

export default ExpCV;