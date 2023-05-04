import React from "react"
import Dog from "./Dog"
import { v4 as uuid } from "uuid"

const Dogs = ({ dogsList }) => {
    return (
        <div>
            {dogsList.map(d => <Dog d={d} key={uuid()} />)}
        </div>
    )
}

export default Dogs