import { Link, Outlet } from "react-router-dom";
/**
 * 사이트 header 화면 출력 컴포넌트
 */

export function Header({children}) { //children props는 컴포넌트 사이(Layout의 <Header></Header>)에 들어가는 내용을 보여준다.
    return(
        <header style={{backgroundColor: "darkblue",color:"white"}}>
            {/* {children} */}
            <Link to="/" style={{padding:"10px", color:"white"}}>Home</Link>
            <Link to="/login" style={{padding:"10px", color:"white"}}>로그인</Link>
            <Link to="/signup" style={{padding:"10px", color:"white"}}>회원가입</Link>
            <Link to="/about" style={{padding:"10px", color:"white"}}>About</Link>
            <Link to="/support" style={{padding:"10px", color:"white"}}>Support</Link>
        </header>
    );
}