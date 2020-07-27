import React from "react";
import { Button, Divider } from "antd";
import "./style.less";
import SearchMovieWithTheater from "../../components/SearchMovieWithTheater";

const SearchShowPage = () => {
    return (
        <div className='search-show-page'>
            <div className='container'>
                <SearchMovieWithTheater />
                <Divider />
                <div className='shows-list'>
                    <div className='show-container'>
                        <div className='movie-info'>
                            <img src='https://cdn.moveek.com/media/cache/short/5ecb42dc750fe602531221.jpg' alt='' />
                            <div className='show-info'>
                                <div className='movie-name'>Phim: lorem12345</div>
                                <div className='movie-theater'>Rạp chiếu: CGV Ly Chinh Thang</div>
                                <div className='show-time'>Giờ chiếu: 12:30</div>
                            </div>
                        </div>
                        <div className='btn-wp'>
                            <Button type='primary'>Mua Ve</Button>
                            <Button type='ghost'>Thong Tin Them</Button>
                        </div>
                    </div>
                    <div className='show-container'>
                        <div className='movie-info'>
                            <img src='https://cdn.moveek.com/media/cache/short/5ecb42dc750fe602531221.jpg' alt='' />
                            <div className='show-info'>
                                <div className='movie-name'>Phim: lorem12345</div>
                                <div className='movie-theater'>Rạp chiếu: CGV Ly Chinh Thang</div>
                                <div className='show-time'>Giờ chiếu: 12:30</div>
                            </div>
                        </div>
                        <div className='btn-wp'>
                            <Button type='primary'>Mua Ve</Button>
                            <Button type='ghost'>Thong Tin Them</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchShowPage;
