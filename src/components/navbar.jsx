import React from "react"
const Navbar = (props) => {
    return (
        <div>
            <ul className="flex gap-4">
                <li><a href="">Home</a></li>
                <li><a href="">{!props.navValue ? "About" : props.navValue}</a></li>
            </ul>
        </div>
    )
}

export default Navbar