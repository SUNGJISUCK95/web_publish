export function Menu({href, name, style, isIcon, icon}) {

    return(
        <a href={href} className="menu-item" style={{width: style.w, height: style.h, backgroundColor: style.bg, color: style.color}}>
            {isIcon? icon : ""}{name} 
        </a> 
        // 중요사항: 절대 속성값을 고정값을 주지마라(변수로 전달받아서 사용)
    );
}