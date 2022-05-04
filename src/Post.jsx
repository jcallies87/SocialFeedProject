import React, {useState} from "react";
import CreatePost from "./CreatePost";
import"./app.css"




const StatusButton = (props) => {
    const [likeButton, setLikeButton] = useState("Like-Dislike");
  
    function handleClick(){
        if(likeButton === "Like-Dislike"){
            setLikeButton("Like")
        }
        if(likeButton === "Like"){
            setLikeButton("Dislike")
        }
        if(likeButton === "Dislike") {
            
            setLikeButton("Like-Dislike");
        }
    }
        return (
            <div>
                <button className={likeButton} onClick={handleClick}>{likeButton}</button>

            </div>
        )
}
export default StatusButton;


