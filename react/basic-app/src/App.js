// import logo from './logo.svg';
import './App.css';
import { MyTitle, MyTitle3 } from "./components/MyTitle.jsx"; 
//import { MyTitle } from "./components/MyTitle.jsx";로 선언한다. //{}안에 점점 추가
import { MyButton } from "./components/MyButton.jsx"; 
import { Menu } from "./components/Menu.jsx";
import { Menu2 } from "./components/Menu2.jsx";
import { MenuList } from "./components/MenuList.jsx";
import { AvatarImage } from "./components/AvatarImage.jsx";

export default function App() {
  const menu1 = {
    "title": "네이버",
    "color": "red",
    "bg": "yellow",
    "href": "https://www.naver.com"
  }

  const menus = [
    {
      "title": "네이버",
      "color": "red",
      "bg": "yellow",
      "href": "https://www.naver.com"
    },
    { 
      "title": "구글",
      "color": "blue",
      "bg": "cyan",
      "href": "https://www.google.com"
    },
    { 
      "title": "다음",
      "color": "green",
      "bg": "aqua",
      "href": "https://www.daum.net"
    },
  ];

  return ( //className으로 css를 호출한다. ex)className="App" 이 .App{} 이거임
    <div>
      <MyTitle />
      <MyTitle3 />
      <MyButton name="회원가입" type="button" className="button"/> 
      {/* name, type은 MyButton의 매개변수로 넘어간다. (그래서 변수명은 자유롭다)*/}
      {/* 프롭스(props)로 넘긴다. */}
      {/* 프롭스(props)란? 부모 컴포넌트가 자식 컴포넌트로 데이터를 전달하는 방법 */}
      {/* 프롭스(props)는 반대로 자식이 부모한테는 줄 수 없다. (단반향이다.) */}
      <MyButton name="로그인" type="submit" className="submit"/>
      <MyButton name="취소" type="reset" className="reset"/>
      <hr/>
      <Menu title={menu1.title} href={menu1.href} color={menu1.color} bg={menu1.bg} />
      <Menu2 data={menu1} />
      <hr/>
      <MenuList menus={menus}/>
      <hr/>
      <AvatarImage img="/images/people1.webp" />
      <AvatarImage img="/images/people2.webp" />
      <AvatarImage img="/images/people3.webp" />
    </div>
  );
}
