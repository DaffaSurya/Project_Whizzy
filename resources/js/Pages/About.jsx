import { NavLink } from "react-router-dom";

function About() {
    return <>
        <nav>
            <NavLink to="/">Back</NavLink>
        </nav>
        <h1 className="text-4xl font-bold mt-5">About</h1>
    </>
}

export default About;