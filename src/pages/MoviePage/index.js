import React from "react";
import { Divider, Select, Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Option } = Select;

const MoviePage = () => {
    const menu = (
        <Menu>
            <Menu.Item key='1'>All</Menu.Item>
            <Menu.Item key='2'>Action</Menu.Item>
            <Menu.Item key='3'>Horror</Menu.Item>
        </Menu>
    );
    return (
        <div className='movie-page'>
            <div className='title'>List Of All Movies</div>
            <Divider />
            <div className='list-movies'>
                <div className='movies-filter'>
                    <Select size='large' defaultValue='Languages'>
                        {["English", "Chinese", "Korean"].map((language) => (
                            <Option key={language} value={language}>
                                {language}
                            </Option>
                        ))}
                    </Select>
                    <Dropdown overlay={menu}>
                        <Button>
                            Genres <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className='list-movies-container'></div>
            </div>
        </div>
    );
};

export default MoviePage;
