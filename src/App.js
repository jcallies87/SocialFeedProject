import React, {useState} from "react";
import StatusButton from "./Post"
import CreatePost from "./CreatePost"
import DisplayPost from "./DisplayPost"
function App() {

  const [enteries, setEntries] =useState([{name: '', post:''}])
  const [status,setStatus ] = useState('Inactive');
  function changeStatus(newStatus){
      setStatus(newStatus);
  }
  return (
    <div>
      <h3>Social Feed</h3>
      
      <CreatePost/>
      <DisplayPost Savedpost={enteries}/>
    </div>
  );
}

export default App;
