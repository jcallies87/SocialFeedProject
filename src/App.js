import React, {useState} from "react";

import CreatePost from "./CreatePost"
import Post from "./Post"
function App() {

  const [enteries, setEntries] =useState([{name: '', post:''}])
  function addNewEntry(entry){
    let tempEntries = [...entry, entry]
    setEntries(tempEntries)
  }
  
  const [status,setStatus ] = useState('Inactive');
  function changeStatus(newStatus){
      setStatus(newStatus);
  }
  return (
    <div>
      <h3>Social Feed</h3>
      
      <CreatePost addNewEntry= {addNewEntry}/>
      <Post savedPost={enteries}/>
    </div>
  );
}

export default App;
