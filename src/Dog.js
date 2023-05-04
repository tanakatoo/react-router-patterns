import React from "react"
import { useParams } from "react-router-dom"

const Dog = (props) => {
    const { name } = useParams()
    let d
    if (name) {
        d = props.dogsList.find(x => x.name == name)
    } else {
        d = props.d
    }

    let n = 1
    return (
        <div>
            <ul>
                <li>{d.name}</li>
                <li>{d.age}</li>
                <li>{d.src}</li>
                {d.facts.map(f => <li key={n++}>{f}</li>)}
            </ul>
        </div>
    )
}

export default Dog