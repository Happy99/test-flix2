import "./Movies.css"
import Movie from "./Movie"

const Movies = (props) => {

    return (
        <div className="all-movies">
            {
                props.allMovies.map( (movie) => {
                    const {id, image, title, age, tags, description, category} = movie

                    return(
                        <Movie 
                            key={id}
                            image={image}
                            title={title}
                            age={age}
                            tags={tags}
                            description={description}
                            category={category}
                        />
                    )
                })
            }
        </div>
    )
}

export default Movies