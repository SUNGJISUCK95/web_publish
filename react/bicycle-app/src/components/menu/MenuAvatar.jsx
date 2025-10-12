export function MenuAvatar({img, name, description}) {
    return(
        <div className="menu-avata">
            <img src={img} alt='menu-image'/>
            <p>{description}</p>
            <button>{name} 메뉴로 이동</button>
        </div>
    );
}