import ProfilePicture from "../../../components/profile/profileComponent";

function Header() {
    return (
        <div className="flex justify-center m-4 fade">
            <ProfilePicture></ProfilePicture>
            <Title></Title>
        </div>
    );
}
function Title() {
    return (
        <div className="inline-grid grid-cols-1">
            <h1 className="text-3xl md:text-6xl font-bold tracking-tight my-2">
                ¡Hola,<br />
                soy <span className="text-blue-600 dark:text-blue-400">Pablo</span>!
            </h1>
            <div className="typewriter font-sans">
                <p className="text-sm md:text-2xl text-center">
                    Full-Stack Developer
                    <span className="inline-block"
                    ><img
                            src="static/imgs/icons/argentina_flag.png"
                            alt=""
                            className="icon_flag"
                        /></span>
                </p>
            </div>

            <div>
                <ul className="flex justify-center gap-2">
                    <li className="inline-block hover_grow_font">
                        <a href="https://github.com/SPablo2191" target="_blank"
                        ><i className="bi bi-github text-light fa-fw"></i
                        ></a>
                    </li>
                    <li className="inline-block hover_grow_font">
                        <a
                            href="https://www.linkedin.com/in/pablo-sandoval-838553216/"
                            target="_blank"
                        ><i className="bi bi-linkedin text-light"></i
                        ></a>
                    </li>
                    <li className="inline-block hover_grow_font">
                        <a href="https://www.instagram.com/s.pablo21/" target="_blank"
                        ><i className="bi bi-instagram text-light"></i
                        ></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Header;