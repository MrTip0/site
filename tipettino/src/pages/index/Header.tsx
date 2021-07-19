import Logo from "../../assets/images/logo.png";

export default function Header() {
    return(
        <div className="h-auto items-center min-w-full flex flex-col bg-primary-200 group">
            <img className="w-52 m-10 transition-transform duration-200 transform group-hover:rotate-6" alt="Logo" src={Logo}/>
            <h1 className="font-bold text-6xl mb-3 font-display uppercase text-primary-500 transition-transform delay-75 duration-200 transform group-hover:rotate-6">Tipettino</h1>
            <h1 className="text-4xl mb-3 font-display text-secondary-500 transition-transform delay-150 duration-200 transform group-hover:rotate-6 uppercase">Developer</h1>
        </div>
    )
}