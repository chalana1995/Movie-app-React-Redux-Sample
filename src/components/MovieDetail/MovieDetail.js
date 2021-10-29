import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchAsyncMovieOrShowDetail, getMovieOrShowDetail, removeMovieOrShow } from '../../features/movies/movieSlice';
import './MovieDetail.scss'

const MovieDetail = () => {

    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getMovieOrShowDetail);

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID))

        return() => {
            dispatch(removeMovieOrShow());
        }
    }, [dispatch])

    console.log("=====result===", data);

    return (
        <div className="movie-section">
            <div className="section-left">
                <div className="movie-title">{data.Title}</div>
                <div className="movie-rating">
                    <span>
                        IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
                    </span>
                    <span>
                        IMDB Votes <i className="fa fa-thumbs-up"></i> : {data.imdbRating}
                    </span>
                    <span>
                        Runtime <i className="fa fa-film"></i> : {data.imdbRating}
                    </span>
                    <span>
                        Year <i className="fa fa-calendar"></i> : {data.imdbRating}
                    </span>
                </div>
                <div className="movie-plot">{data.Plot}</div>
                <div className="movie-info">
                    <div>
                        <span>Director</span>
                        <span>{data.Director}</span>
                    </div>
                    <div>
                        <span>Stars</span>
                        <span>{data.Actors}</span>
                    </div>
                    <div>
                        <span>Generes</span>
                        <span>{data.Genre}</span>
                    </div>
                    <div>
                        <span>Director</span>
                        <span>{data.Language}</span>
                    </div>
                    <div>
                        <span>Awards</span>
                        <span>{data.Awards}</span>
                    </div>
                </div>
            </div>
            <div className="section-right">
                <img src={data.Poster} alt={data.Title} />
            </div>
        </div>
    )
}

export default MovieDetail
