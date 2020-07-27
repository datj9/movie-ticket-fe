import React, { useEffect } from "react";
import "./style.less";
import { useDispatch } from "react-redux";
import { getTheatersStart } from "../../redux/theater/actions";
import SearchMovieWithTheater from "../../components/SearchMovieWithTheater";

const HomePage = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTheatersStart());
    });

    return (
        <div className='home'>
            <div className='overlay'>
                <div className='form-container'>
                    <SearchMovieWithTheater />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
