import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Select } from "antd";
import { Button } from "antd";

const { Option } = Select;

const SearchMovieWithTheater = () => {
    const [theater, setTheater] = useState("");
    const theaters = useSelector((state) => state.theater.theaters);
    const loadingTheaters = useSelector((state) => state.theater.isLoading);
   
    const handleTheaterChange = (theaterName) => {
        setTheater(theaterName);
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
            
            <Button size='large' type='primary' onClick={submitSearchForm} disabled={!theater || !movie}>
                Tìm kiếm
            </Button>
        </form>
    );
};

export default SearchMovieWithTheater;
