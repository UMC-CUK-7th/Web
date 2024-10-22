import { useState } from 'react'
import './App.css'
import { MOVIES } from './mocks/movies'; // mocks 폴더의 movies.js에서 데이터를 가져옵니다.
import Movie from './component/Movie';


function App() {
  
  return (
    <>
    
      <div className="root">
        <div className='movies'>
          {MOVIES.results.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      
    </>
  )
}

export default App
