export function MyButton({name, type, className}) {  //프롭스(props)로 받음
    //넘어오는 매개변수도 로직선언{} 해줘야한다.  
    //구조분해할당이다.
    return (
        <button className={className} type={type}>{name}</button> 
    );
}