import Categories from "./components/Categories"
import Movies from "./components/Movies"
import allMoviesData from "./dataMovies"
import { useState } from "react"

const App = () => {
    const [allMovies, setAllMovies] = useState(allMoviesData)
    const [allMoviesFiltered, setAllMoviesFiltered] = useState(allMoviesData)
    
    const kategorieFilterHandler = (category) => {
        console.log(`Filtr: ${category}`)

        if ( category !== "" ) {
            const movies = allMovies.filter( (movie) => {
                return movie.category === category
            })
            setAllMoviesFiltered(movies)
        }
        else {
            setAllMoviesFiltered(allMovies)
        }

    }

    return (
        <>
            <Categories kategorieFilterHandler={kategorieFilterHandler}/>
            <Movies allMovies={allMoviesFiltered}/>
        </>
    )
}

export default App