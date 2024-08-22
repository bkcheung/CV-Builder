import { useState } from "react";
interface dropAreaProps {
  id: number;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
}

function DropArea({ id, handleDrop }: dropAreaProps) {
  const [showDrop, setShowDrop] = useState(false);
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    handleDrop(e);
    setShowDrop(false);
  };
  return (
    <div
      id={String(id)}
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
      className={showDrop ? "showDrop" : "hideDrop"}
    ></div>
  );
}

export default DropArea;
