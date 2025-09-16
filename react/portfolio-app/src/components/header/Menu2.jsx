export function Menu2({href, className, name, click}) {
    const handleMenuClick = () => {
        click(name);
    }
    return(
        <a href={href} className={className} onClick={handleMenuClick}>{name}</a>
    );
}
        