import React, {useState} from "react"

const CreatePost = (props) => {
    
    const[name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(formEvent){
        formEvent.preventDefault();
    }
return (
<form onSubmit ={handleSubmit}>
    <label for= "name">Name:</label>
    <input type= "text" onChange={(event) => setName(event.target.value)}value={name}/>
    <label for= "post">Post:</label>
    <input type= "textarea" onChange={(event) => setPost(event.target.value)}value={post}/>
</form>  
);
}

export default CreatePost;