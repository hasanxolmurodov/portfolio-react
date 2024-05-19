import { Link } from "react-scroll";

export default function Herosection(){
    return(
        <section id="heroSection" className="hero--section">
          <div className="hero--section--content--box">
           <div className="hero--section-content">
            <p className="section--title">Hello, I'm Hasan </p>
            <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{""}
            <br/>
            Developer
            </h1>
            <p className="hero--section-description">
                I'm Frontend and Backend developer,My experince 10+ projects.Also My skill Python, C#, Asp.net...
                <br/> Contact us to make your projects!
            </p>

           </div>
           <button className="btn btn-primary"  ><Link to="Contact">Get In Touch</Link></button>
          </div>
          <div className="hero--section--img">
          <img src="./img/img1.jpg" alt="Hero Section"/>
          </div>
        </section>
    )
}