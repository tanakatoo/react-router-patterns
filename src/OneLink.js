import React from "react"
import { Link } from "react-router-dom"

const OneLink = (props) => {
    return (
        <Link to={`dogs/${props.name}`}>{props.name}</Link>
    )

}

export default OneLink