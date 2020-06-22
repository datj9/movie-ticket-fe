import React from "react";
import { Divider, Select, Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./style.less";
import { Card } from "antd";

const { Meta } = Card;
const { Option } = Select;

const MoviePage = () => {
    const allMovies = () => {
        const movies = [];
        for (let i = 0; i < 14; i++) {
            movies.push(
                <Card hoverable cover={<img alt='example' src='https://cdn.moveek.com/media/cache/short/5ecb42dc750fe602531221.jpg' />}>
                    <Meta title='Latte & the Magic Waterstone' />
                </Card>
            );
        }
        return movies;
    };
    return (
        <div className='movie-page'>
            <div className='container'>
                <div className='title'>List Of All Movies</div>
                <Divider />
                <div className='list-movies'>
                    <div className='movies-filter'>
                        <Select defaultValue='Languages'>
                            {["English", "Chinese", "Korean"].map((language) => (
                                <Option key={language} value={language}>
                                    {language}
                                </Option>
                            ))}
                        </Select>
                        <Select defaultValue='Genres'>
                            {["All", "Action", "Comedy"].map((genre) => (
                                <Option key={genre} value={genre}>
                                    {genre}
                                </Option>
                            ))}
                        </Select>
                    </div>
                    <div className='list-movies-container'>{allMovies()}</div>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;
