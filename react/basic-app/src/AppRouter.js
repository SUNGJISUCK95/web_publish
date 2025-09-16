import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/router/Layout.jsx";
import { Login } from "./components/form/Login.jsx";
import { Signup } from "./components/form/Signup.jsx";
import { Home } from "./components/router/Home.jsx";
import { About } from "./components/router/About.jsx";
import { Support } from "./components/router/Support.jsx";

export default function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="" element={레이아웃 컴포넌트}> */}
                    <Route path="/" element={<Layout/>}>  {/*Route의 path와 해당 emlement의 Link의 to의 경로가 같아야 출력이 된다.(다르면 다른 경로여서 빈페이지 뜸) */}
                        <Route index element={<Home />} /> {/*index는 path="/"와 동일하다*/}
                        <Route path="/login" element={<Login/>} />
                        <Route path="/signup" element={<Signup/>} />
                        <Route path="/about" element={<About />} />
                        <Route path="/support" element={<Support />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}