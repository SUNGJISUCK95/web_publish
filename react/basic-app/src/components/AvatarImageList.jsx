/**
 * AvatarImage 컴포넌트를 반복시키는 컨테이너 컴포넌트
 */
export function AvatarImageList({imgList}) {
    return (
        <> 
        {
            imgList.map((item) => 
                <img src={item.img} className={item.className} />  //img가 map으로 돌리므로 여러개라서 <></>로 묶어준다.
            )
        }
        </>
    );
}