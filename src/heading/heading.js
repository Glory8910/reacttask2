import React from "react"

export default function Heading(props){
    return (
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">{props.needed}</h1>
       
    </div>

    )
}