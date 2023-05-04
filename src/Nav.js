import React from "react"
import { Link } from "react-router-dom"
import OneLink from "./OneLink"
import { v4 as uuid } from "uuid"

const Nav = (props) => {

    return (
        <>
            <Link to="/dogs">Dogs</Link>
            {props.nameList.map(l => {
                console.log(l)
                return <OneLink name={l} key={uuid()} />
            })}
        </>
    )
}

export default Nav