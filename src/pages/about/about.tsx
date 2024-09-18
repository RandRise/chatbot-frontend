import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
    DribbbleOutlined,
    TwitterOutlined,
    InstagramOutlined,
    GithubOutlined,
} from '@ant-design/icons';
import Origator from "../../assets/images/Origator.png";
import '../../assets/styles/main.css';
import '../../assets/styles/responsive.css'
// import backgroundImage from "../../assets/images/Ai-Human-interaction.webp"
import './about.css'

const backgroundImage = "https://img.freepik.com/free-vector/ai-technology-brain-background-vector-digital-transformation-concept_53876-117820.jpg?t=st=1726655121~exp=1726658721~hmac=a9b06861773f7fb6a0cb77ab2144e1aa0a38cde8fa60d3ce1df2ca5694670caa&w=740"
const { Header, Footer, Content } = Layout;

const AboutUs: React.FC = () => {
    const signup = (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
                fill="#111827"
                className="fill-muted"
            />
        </svg>
    );

    const signin = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
        >
            <path
                className="fill-muted"
                d="M12.25,14H1.75A1.752,1.752,0,0,1,0,12.25V3.5A1.752,1.752,0,0,1,1.75,1.75h.876V.875a.875.875,0,0,1,1.75,0V1.75h5.25V.875a.875.875,0,0,1,1.75,0V1.75h.875A1.752,1.752,0,0,1,14,3.5v8.75A1.752,1.752,0,0,1,12.25,14ZM3.5,4.375a.875.875,0,0,0,0,1.75h7a.875.875,0,0,0,0-1.75Z"
            />
        </svg>
    );

    return (
        <Layout 
            className="layout-default layout-signin"
            
        >
            <Header className=''>
                <div className="brand">
                    <img src={Origator} alt="Origator" />
                </div>
                <div className="header-col header-nav">
                    <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to="/sign-up">
                                {signup}
                                <span> Sign Up</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/sign-in">
                                {signin}
                                <span> Sign In</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </div>
            </Header>
            <Content className="about-content" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="about-text">
                    <h1 className='about-title'>Origator</h1>
                    <p className='about-text'>
                        Origator was created from a vision to revolutionize the way users interact
                        with websites. As the digital world continues to expand, finding specific
                        information on a website can become overwhelming for users. Enter Origator
                        — a cutting-edge chatbot designed to simplify this experience. Using
                        advanced Retrieval Augmented Generation (RAG), Origator can be trained on
                        any website, empowering it to guide visitors effortlessly through vast
                        information, answer their queries, and direct them to the right resources
                        with precision.
                    </p>
                    <p className='about-text'>
                        As a blend of Oracle and Navigator, Origator doesn’t just point users in
                        the right direction — it understands their needs, learns from the website’s
                        content, and retrieves the most relevant information, making website
                        navigation intuitive and seamless.
                    </p>
                    <h3>Our Vision</h3>
                    <p className='about-text'> 
                        To become the go-to digital assistant for every website, transforming how
                        users navigate the web by offering personalized, intelligent guidance that
                        maximizes accessibility and ease of use.
                    </p>
                    <h3>Our Values</h3>
                    <ul>
                        <li>
                            <strong>User-Centric Innovation:</strong> Every feature of Origator is
                            designed to enhance user experience by simplifying the journey through
                            complex websites.
                        </li>
                        <li>
                            <strong>Empowerment Through AI:</strong> Origator empowers websites
                            with the ability to autonomously understand and address user needs,
                            making information discovery easier and faster.
                        </li>
                        <li>
                            <strong>Adaptability:</strong> As a versatile solution, Origator can be
                            tailored to various industries, ensuring that every website can
                            leverage its powerful capabilities to improve user interaction.
                        </li>
                        <li>
                            <strong>Trust and Accuracy:</strong> We believe in delivering reliable,
                            precise information to users, fostering trust between businesses and
                            their audience.
                        </li>
                        <li>
                            <strong>Continuous Learning:</strong> Origator constantly evolves by
                            learning from user interactions, improving its guidance and retrieval
                            capabilities over time.
                        </li>
                    </ul>
                </div>
            </Content>
            <Footer style={{marginTop:'30px'}}>
                <Menu mode="horizontal">
                    <Menu.Item>Company</Menu.Item>
                    <Menu.Item>
                        <Link to="/about-us">About us</Link>
                    </Menu.Item>
                    <Menu.Item>Teams</Menu.Item>
                    <Menu.Item>Blogs</Menu.Item>
                    <Menu.Item>
                        <Link to="/pricing">Pricing</Link>
                    </Menu.Item>
                </Menu>
                <Menu mode="horizontal" className="menu-nav-social">
                    <Menu.Item>
                        <Link to="#">{<DribbbleOutlined />}</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="#">{<TwitterOutlined />}</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="#">{<InstagramOutlined />}</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="#">
                            <svg
                                width="18"
                                height="18"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path>
                            </svg>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="#">{<GithubOutlined />}</Link>
                    </Menu.Item>
                </Menu>
                <p className="copyright">
                    {" "}
                    Copyright © 2024  Origator by <a href="#rand">Creative Team</a>.{" "}
                </p>
            </Footer>
        </Layout>
    );
};

export default AboutUs;
