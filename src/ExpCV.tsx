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
      <li key={index}>{desc}</li>
    )
  })
    return(
       <div>
          <div className="flexRow">
            <div className="flexCol">
              <div className="cvContent" style={{ fontWeight: 500 }}>
                {expInfo.title}
              </div>
              <div className="cvContent">{expInfo.company}</div>
            </div>
            <div className="flexCol rightAlign">
              <i>
                <div className="cvContent">{start} - {end}</div>
              </i>
              <div className="cvContent">{expInfo.location}</div>
            </div>
          </div>
          <div className="cvContent desc">{descList}</div>
       </div>
          
    )}

export default ExpCV;