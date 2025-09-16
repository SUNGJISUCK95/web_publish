import { Description, Title2 } from "../base/Title2.jsx";
import { Majors2 } from "./Majors2.jsx";

export function About2() {
    return(
        <section id="search" className="section container">
            <Title2 title="Search"/>  
            <Description/>   
            <Majors2/>
        </section>
    );
}