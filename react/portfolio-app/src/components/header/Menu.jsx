export function Menu({href, className, name, click}) {
    return (
        <a  href={href} 
            className={className}
            onClick={()=>{ click(name)}}>{name}</a>
    );
}