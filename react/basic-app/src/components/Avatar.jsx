// import { AvatarImage  } from "./AvatarImage.jsx";
// import { Avatar } from "./Avatar.jsx"; 
// 한 파일에 같은 함수와 함수호출이 있다면 import하지 않아도 된다. //ex) <Avatar/> 와 Avatar(), <AvatarImage/> 와 AvatarImage()

/**
 * AvatarImage 컴포넌트를 반복시키는 컨테이너 컴포넌트
 */
export function AvatarImageList({imgList}) {
    return (
        <> 
        {
            imgList.map((item, index) => 
                <img key={index} src={item.img} className={item.className} />  //img가 map으로 돌리므로 여러개라서 <></>로 묶어준다.
            )
        }
        </>
    );
}

/**
 * AvatarImage 컴포넌트
 */
export function AvatarImage({img, className}) {
    return (
        <img src={img} className={className} />  //태그 하나만 쓸거면 상위 태그로 안묶어도 된다.
    );
}

/**
 * Avatar 컴포넌트 리스트
 */
export function AvatarList({list, className}) {
    return (
        <div className={className}>
            {list.map((item, index) => 
                <Avatar key={index} img={item.img} name={item.name}/>
            )}
        </div>
    );
}

/**
 * Avatar 이미지 + name 컴포넌트
 */
export function Avatar({img, name}) {
    return (
        <div className="avatar">
            <AvatarImage img={img} className="avatar-img-circle"/>
            <p>{name}</p>
        </div>
    );
}