import React, {useState} from "react";
import StatusButton from "./Post"

function App() {
  const [status,setStatus ] = useState('Inactive');

  function changeStatus(newStatus){
    setStatus(newStatus);
  }
  return (
    <div>
      <h3>Social Feed</h3>
      <StatusButton updateStatus={changeStatus}/>
    </div>
  );
}

export default App;
