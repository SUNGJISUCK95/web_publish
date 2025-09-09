// import logo from './logo.svg';
import './css/AppAvatar.css';
// import { AvatarImage } from "./components/AvatarImage.jsx";
// import { AvatarImageList } from "./components/AvatarImageList.jsx";
import { Avatar, AvatarList, AvatarImage, AvatarImageList } from "./components/Avatar.jsx"; //Avatar에 AvatarList 코드를 넣었다면 왼쪽 코드처럼 {}안에 추가로 선언하면 된다.
// import { AvatarList } from './components/AvatarList.jsx';

export default function AppAvatar() {
  const list = [
    {
      "img": "/images/people1.webp",
      "className": "avatar-img"
    },
    {
      "img": "/images/people2.webp",
      "className": "avatar-img-circle"
    },
    {
      "img": "/images/people3.webp",
      "className": "avatar-img"
    }
  ];

  const alist = [
    {
      "img": "/images/people1.webp",
      "name": "smith"
    },
    {
      "img": "/images/people2.webp",
      "name": "james"
    },
    {
      "img": "/images/people3.webp",
      "name": "anna"
    }
  ];

  return ( //className으로 css를 호출한다. ex)className="App" 이 .App{} 이거임
    <div>
      <AvatarImage img="/images/people1.webp" className="avatar-img-circle"/>
      <AvatarImage img="/images/people2.webp" className="avatar-img"/>
      <AvatarImage img="/images/people3.webp" className="avatar-img-circle"/>
      <hr/>
      <AvatarImageList imgList={list}/>
      <hr/>
      <Avatar img="/images/people1.webp" name="John"/>
      <Avatar img="/images/people3.webp" name="Any"/>
      <hr/>
      <AvatarList list={alist} className="avatar-list"/>
    </div>
  );
}
