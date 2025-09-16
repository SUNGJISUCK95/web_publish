import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";

export function Majors() {
    const majors = [
        { 
            "icons": "html",
            "title": "Front-end",
            "subjects": "HTML, CSS, JavaScript, TypeScript, React, WebAPI",
            "className": "fa-brands fa-html5 major-icon" 
        },
        {
            "icons": "mobile",
            "title": "Mobile",
            "subjects": "Android Studio, React Native, IOS, Swift, Java, Kotlin",
            "className": "fa-solid fa-mobile major-icon"
        },
        {
            "icons": "server",
            "title": "Back-end",
            "subjects": "Jav, JavaScript, Go, Kotlin, Spring, Spring Boot",
            "className": "fa-solid fa-server major-icon"
        }
    ]
    return(
        <ul className="majors">    
            { 
                majors && majors.map(major =>
                    <li className="major">  
                        <Major icons={major.icons} title={major.title} subjects={major.subjects} className={major.className}/>
                    </li>
                )
            }            
        </ul>
    );
}

export function Major({icons, title, subjects, className}) {
    return(
        <>
            { icons === "html" && <FontAwesomeIcon icon={faHtml5} className={className}/> } 
            { icons === "mobile" && <FontAwesomeIcon icon={faMobile} className={className}/> } 
            { icons === "server" && <FontAwesomeIcon icon={faServer} className={className}/> } 
            <p>{title}</p>
            <p>{subjects}</p>
        </>
    );
}