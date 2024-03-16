
export const CardFilm = ({ titulo, imagem, link }) => {
    return (
        <div className="card">
            <h2>{titulo}</h2>
            <img src={imagem} alt={titulo} />
            <a href={link}>Saiba mais</a>
        </div>
    );
  };