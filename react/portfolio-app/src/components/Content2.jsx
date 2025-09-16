import { Home2 } from "./content/Home2.jsx"; 
import { Search2 } from "./content/Search2.jsx"; 

export function Content2() {
    const homeData = {
        "img": "images2/2720926361342690592-photoaidcom-cropped.png",
        "name": "Navi",
        "title": "I'm Clinic",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    }

    return(
        <>
            <Home2 data={homeData}/>
            <Search2/>
        </>
    );
}