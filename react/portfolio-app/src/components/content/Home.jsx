import { AvatarImage } from "../base/Avatar.jsx";

export function Home({data}) {
    // console.log({data});
    const {img, name, title, description} = data;
    
    return(
        <section id="home">
            <AvatarImage img={img} alt="home photo" className="home-avatar" />
            <h2 className="home-title">
                Hello <br/>
                <strong className="home-title strong">{title}</strong>, {name}
            </h2>
            <p className="home-description">{description}</p>
            <a className="home-contact" href="#">contact</a>
        </section>
    );
}