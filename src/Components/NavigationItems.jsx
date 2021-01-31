import React from 'react';
import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { Tooltip, Overlay } from 'react-bootstrap';
import { FaBriefcase, FaGraduationCap, FaHome, FaUser } from 'react-icons/fa';
import './Style.css';

function NavigationItems({ navSelected, setNavSelected }) {

    const [showHome, setShowHome] = useState(false);
    const [showAboutMe, setShowAboutme] = useState(false);
    const [showEducation, setShowEducation] = useState(false);
    const [showWork, setShowWork] = useState(false);

    const targetHomepage = useRef(null);
    const targetAboutMe = useRef(null);
    const targetEducation = useRef(null);
    const targetWork = useRef(null);

    const getClickeditem = e => {
        if (e.target.dataset.item !== undefined) {
            setNavSelected(e.target.dataset.item);
        }
    }

    useEffect(() => {
        var navList = document.getElementById("nav_items");
        var listElements = navList.getElementsByTagName("li");
        for (let element of listElements) {
            if (element.dataset.item === navSelected) {
                element.classList.add("active-nav");
            } else {
                element.classList.remove("active-nav");
            }
        }
    })


    return (
        <ul className="navigation" id="nav_items">
            <li data-item="home" onClick={getClickeditem.bind(this)} ref={targetHomepage}>
                <FaHome size={32} data-item="home" color={"#2c4269"} className="nav-icon" 
                    onMouseEnter={() => setShowHome(true)} onMouseLeave={() => setShowHome(false)}/>
            </li>
            <Overlay target={targetHomepage.current} show={showHome} placement="left">
                {(props) => (
                    <Tooltip id="overlay-homepage" {...props} style={{
                        padding: '2px 10px',
                        color: 'white',
                        borderRadius: 3,
                        ...props.style,
                    }}>
                        <strong>Homepage</strong>
                    </Tooltip>
                )}
            </Overlay>

            <li data-item="aboutme" onClick={getClickeditem.bind(this)} ref={targetAboutMe}>
                <FaUser size={32} data-item="aboutme" color={"#2c4269"} className="nav-icon"  
                    onMouseEnter={() => setShowAboutme(true)} onMouseLeave={() => setShowAboutme(false)}/>
            </li>
            <Overlay target={targetAboutMe.current} show={showAboutMe} placement="left">
                {(props) => (
                    <Tooltip id="overlay-aboutme" {...props} style={{
                        padding: '2px 10px',
                        color: 'white',
                        borderRadius: 3,
                        ...props.style,
                    }}>
                        <strong>About Me</strong>
                    </Tooltip>
                )}
            </Overlay>

            <li data-item="education" onClick={getClickeditem.bind(this)} ref={targetEducation}>
                <FaGraduationCap size={32} data-item="education" color={"#2c4269"} className="nav-icon"
                    onMouseEnter={() => setShowEducation(true)} onMouseLeave={() => setShowEducation(false)}/>
            </li>
            <Overlay target={targetEducation.current} show={showEducation} placement="left">
                {(props) => (
                    <Tooltip id="overlay-education" {...props} style={{
                        padding: '2px 10px',
                        color: 'white',
                        borderRadius: 3,
                        ...props.style,
                    }}>
                        <strong>My Education</strong>
                    </Tooltip>
                )}
            </Overlay>

            <li data-item="work" onClick={getClickeditem.bind(this)} ref={targetWork}>
                <FaBriefcase size={32} data-item="work" color={"#2c4269"} className="nav-icon"
                    onMouseEnter={() => setShowWork(true)} onMouseLeave={() => setShowWork(false)}/>
            </li>
            <Overlay target={targetWork.current} show={showWork} placement="left">
                {(props) => (
                    <Tooltip id="overlay-work" {...props} style={{
                        padding: '2px 10px',
                        color: 'white',
                        borderRadius: 3,
                        ...props.style,
                    }}>
                        <strong>My Work</strong>
                    </Tooltip>
                )}
            </Overlay>

        </ul>   
    );
}

export default NavigationItems;