import { useState } from "react";

function RemainingMessage(props) {
  const data = props.data;
  const completeData = data.filter((data) => data.completed === true).length;
  // const checkComplete = () => {
  //   data.filter((data) => data.completed === true).length;
  // words.filter((word) => word.length > 6);
  // };
  return (
    <div className="mt-4 py-3 text-center bg-dark text-white">
      {completeData} of {data.length} Rrmaining
    </div>
  );
}

export default RemainingMessage;
