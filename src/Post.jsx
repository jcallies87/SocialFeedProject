import React, {useState} from "react";

import"./app.css"

const Post = (props) => {
    return (
        <table>
            <thread>
                <tr>
                    <th>Name:</th>
                    <th>Post:</th>
                </tr>
            </thread>
            <tbody>
                {props.savedPost.map((entry) => {
                    return (
                        <tr>
                            <td>{entry.name}</td>
                            <td>{entry.post}</td>
                        </tr>
                    )
                } )}
            </tbody>
        </table>
    )}



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

export default Post;

