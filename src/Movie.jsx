import React from 'react'
import { useGlobalContext } from './MovieContext'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
    const {movie,loading}=useGlobalContext()
    if(loading){
      return(
        <div className="loading">
          loading...
        </div>
      )
    }
    
  return (
    <section className="movies">
      {
        movie.map((item)=>{
          const {imdbID:id,Poster,Title,Year}=item
          return(
            <Link to={`/movie/${id}`} key={id} className="movie">
            <article>
              <img src={Poster==="N/A"?url:Poster} alt={Title} />
              <div className='movie-info'>
                <h4 className="title">{Title}</h4>
                <p>{Year}</p>
              </div>
            </article>
            </Link>
          )
        })
      }
    </section>
  )
}

export default Movies