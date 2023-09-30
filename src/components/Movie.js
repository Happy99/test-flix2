import "./Movie.css"

const Movie = (props) => {
    return (
        <div className="one-movie">
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.age}</p>
            <p>{props.tags}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Movie