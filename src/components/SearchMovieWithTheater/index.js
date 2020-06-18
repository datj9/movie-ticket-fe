import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import { Button } from "antd";

const { Option } = Select;

const SearchMovieWithTheater = () => {
    const [theater, setTheater] = useState("");
    const [movie, setMovie] = useState("");
    const theaters = useSelector((state) => state.theater.theaters);
    const loadingTheaters = useSelector((state) => state.theater.isLoading);
    const [movies, setMovies] = useState([
        {
            releaseDate: "2020-05-24T11:37:57.170Z",
            name: "NONOffdsa212",
            imageUrl: "https://local.com",
            runningTime: 12,
            genres: [
                { _id: "5ec4b666084c7c2268937015", name: "Action", imageUrl: "https://portfolio-dn.s3-ap-southeast-1.amazonaws.com/1584435394850.jpg", __v: 0 },
                { _id: "5ec4b673084c7c2268937016", name: "Comedy", imageUrl: "https://portfolio-dn.s3-ap-southeast-1.amazonaws.com/1584435394850.jpg", __v: 0 },
            ],
            id: "5eca5ccf1f0903255c733ef7",
        },
    ]);
    const handleTheaterChange = (theaterName) => {
        setTheater(theaterName);
    };
    const handleMovieChange = (movieName) => {
        setMovie(movieName);
    };

    const submitSearchForm = () => {};

    return (
        <form className='search-movie-form' onSubmit={submitSearchForm}>
            <Select size='large' defaultValue='Chọn rạp chiếu' onChange={handleTheaterChange} loading={loadingTheaters}>
                {theaters.map((theater) => (
                    <Option key={theater.id} value={theater.name}>
                        {theater.name}
                    </Option>
                ))}
            </Select>
            <Select size='large' defaultValue='Chọn rạp chiếu' onChange={handleMovieChange} loading>
                {movies.map((movie) => (
                    <Option key={movie.id} value={movie.name}>
                        {movie.name}
                    </Option>
                ))}
            </Select>
            <Button size='large' type='primary' onClick={submitSearchForm} disabled={!theater || !movie}>
                Tìm kiếm
            </Button>
        </form>
    );
};

export default SearchMovieWithTheater;
