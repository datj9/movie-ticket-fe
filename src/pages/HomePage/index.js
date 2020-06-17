import React, { useEffect, useState } from "react";
import "./style.less";
import { Select } from "antd";
import { Button } from "antd";

const { Option } = Select;

const HomePage = () => {
    const [theaters, settheaters] = useState([
        { name: "CGV LVV", address: "123 LVV", id: "5eca5d071f0903255c733f80" },
        { name: "CGV Ly Chinh Thang", address: "123 Ly Chinh Thang", id: "5ee8182ecdb8b8093cfb5074" },
    ]);
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
    const [theaterId, setTheaterId] = useState("");
    useEffect(() => {}, []);

    const submitSearchForm = () => {};

    const handleTheaterChange = (id) => {};

    return (
        <div className='home'>
            <div className='overlay'>
                <form className='search-movie-form' onSubmit={submitSearchForm}>
                    <Select size='large' placeholder='Chọn rạp chiếu' onSelect={handleTheaterChange}>
                        {theaters.map((theater) => (
                            <Option key={theater.id} value={theater.id}>
                                {theater.name}
                            </Option>
                        ))}
                    </Select>
                    <Select size='large' placeholder='...' loading>
                        {movies.map((movie) => (
                            <Option key={movie.id} value={movie.id}>
                                {movie.name}
                            </Option>
                        ))}
                    </Select>
                    <Button size='large' type='primary' onClick={submitSearchForm} loading>
                        Tìm kiếm
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default HomePage;
