import pokeImage from "../components/images/pokeball.png";


 export function Header() {

    return (
        <div className="header-container">
            <img className="pokeball-image"src={pokeImage} alt="pokeball"/>
            <h1>Quinn's Pokedex</h1>
            <img className="pokeball-image"src={pokeImage} alt="pokeball"/>
        </div>
    )

}

