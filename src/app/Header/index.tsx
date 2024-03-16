import Logo from '../../../public/movies2watch.png';

const Header = () => {
    return (
        <>
        <header>
            <div className= "flex place-items-start py-8 px-8 bg-black grid grid-cols-3 gap-2 place-content-center"> <img className = "flex justify-start" src="movies2watch.png" alt="Logo do MELHOR SITE DO MUNDO!"/> 
            <p className= "flex justify-center text-4xl py-8 px-8 text-white">Os melhores filmes estão AQUI!</p>
            </div>
        </header>
        </>
    )
};

export default Header;