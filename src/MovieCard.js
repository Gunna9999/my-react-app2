


export default function MovieCard({movie}) {
    return (
         <div className='movie'>
             <div>
                 <img src={movie.Poster} alt={movie.Title} className='img' />
             </div>

             <div className='title'>
                 <span>{movie.Type}</span>
                 <h3>{movie.Title}</h3>
                 <p>{movie.Year}</p>
             </div>

         </div>
       
    )
 }