import { AvatarImage } from "../base/Avatar2.jsx";

export function Home2({data}) {
    const {img, name, title, description} = data;

    return(
        <section id="home">
            <div className="home-img">
                <AvatarImage img={img} alt="home photo" classNameName="home-avatar"/>
            </div>
            <div className="home-text">
                <h2 className="home-title">
                    Hello <br/>
                    <strong className="home-title strong">{title}</strong>, {name}
                </h2>
                <p className="home-description">{description}</p>
                <a className="home-contact" href="">contact</a>
            </div>
        </section>
    );
}