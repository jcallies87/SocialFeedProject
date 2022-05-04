import React, {useState} from "react"

const displayPost = (props) => {
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

export default displayPost;