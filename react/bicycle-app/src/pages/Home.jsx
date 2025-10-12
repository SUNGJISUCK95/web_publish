import { MenuList } from "../components/menu/MenuList.jsx";
import { About } from "../components/menu/About.jsx";

export function Home() {
    return(
        <div className="content">
            <div className="banner">
                <h3>배너 타이틀</h3>
                <p>배너 내용</p>
            </div>
            <About />
            <MenuList />
        </div>
    );
}