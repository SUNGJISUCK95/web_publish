import { Title, Description } from "../base/Title.jsx";
import { Majors } from "./Majors.jsx";
import { Jobs } from "./Jobs.jsx";

export function About() { //function명이 컴포넌트(< />) 명과 같은지 확인하기
    return(
         <section id="about" className="section container">
            <Title title="About me"/>  
            <Description />   
            <Majors />   
            <Jobs />             
        </section>
    );
}