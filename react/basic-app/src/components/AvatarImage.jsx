export function AvatarImage({img, className}) {
    return (
        <img src={img} className={className} />  //태그 하나만 쓸거면 상위 태그로 안묶어도 된다.
    );
}