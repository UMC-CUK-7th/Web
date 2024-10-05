// Movie.jsx
const Movie = ({ movie }) => { // movie prop을 구조분해 할당
    console.log(movie.poster_path); // 확인용 콘솔 로그

    return (
        <div className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // TMDB의 포스터 이미지를 불러옵니다.
              alt={movie.title}
            />
        </div>
    );
};

export default Movie;