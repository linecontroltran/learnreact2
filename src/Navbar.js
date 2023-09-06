import React from "react"
import reactLogo from "./logo192.png"

export default function Navbar() {
    return (
        <nav>
            <img src={reactLogo} className="react-logo"/>
            <h3 className="nav--logo_text">React Facts</h3>
            <h4 className="nav--title">React course - project 1</h4>
        </nav>
    )
}