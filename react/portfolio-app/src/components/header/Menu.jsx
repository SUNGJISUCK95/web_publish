
// export function Menu({href, className, name}) {

//     const handleMenuClick = () => {
//         click(name);
//     }

//     return(
//         <a href={href} className={className} onClick={() => {click(name)}}>{name}</a>
//     );
// }

// export function Menu({ href, className, name, click }) {
//     return (
//         <a href={href} className={className} onClick={() => click(name)}>
//             {name}
//         </a>
//     );
// }

export function Menu({ href, className, name, click }) {
    const handleMenuClick = () => {
        click(name);
    };

    return (
        <a href={href} className={className} onClick={handleMenuClick}>
            {name}
        </a>
    );
}