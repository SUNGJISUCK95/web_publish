
export function Menu2({data}) {
    // console.log({data});
    
    const {title, href, color, bg} = data; //data를 구조분해해서 각 변수명으로 사용

    return (
        <a href={href} className="menu" style={{color:color, background:bg}}>{title}</a>
    );
}