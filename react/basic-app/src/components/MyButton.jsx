export function MyButton({name, type, className, handleProps}) {  //프롭스(props)로 받음
    //넘어오는 매개변수도 로직선언{} 해줘야한다.  
    //구조분해할당이다.

    const handleClick = () => {
        console.log(`자식 버튼 클릭 --> ${name}`);        
        handleProps(`버튼 클릭 --> ${name}`);
    }

    return (
        <button className={className} type={type} onClick={handleClick}>{name}</button>  
        //React는 자동 갱신이되서 handleClick()으로 하면 실행되버려서, handleClick으로 주소값만 주어 클릭되면 실행되게 한다.
    );
}