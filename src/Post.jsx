import React, {useState} from "react";

import"./app.css"

const Post = (props) => {
    const [likeButton, setLikeButton] = useState("Like-Dislike")
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
        <table>
            <thead>
                <tr>
                    <th>Name:</th>
                    <th>Post:</th>
                </tr>
            </thead>
            <tbody>
                {props.savedPost.map((entry,) => {
                    return (
                        <tr>
                            <td>{entry.name}</td>
                            <td>{entry.post}</td>
                            <button className={likeButton} onClick={handleClick}>{likeButton}</button>
                        </tr>


                    );

                
                },  )}
            </tbody>

        </table>
    )}

export default Post;

