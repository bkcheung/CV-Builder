import { useState } from "react";
interface dropAreaProps{
    id:number
}

function DropArea({id}:dropAreaProps){
    const [showDrop, setShowDrop] = useState(false);
    function onDrop(e: React.DragEvent<HTMLDivElement>){
        const dragArea = e.target as HTMLElement;
        console.log(dragArea.getAttribute('id'));
        setShowDrop(false);
    }
    return(
        <div id={String(id)}
             onDragEnter={()=>setShowDrop(true)}
             onDragLeave={()=>setShowDrop(false)}
             onDrop={onDrop}
             onDragOver={(e)=>e.preventDefault()}
             className = {showDrop?'showDrop':'hideDrop'}
        ></div>
    )
}

export default DropArea;