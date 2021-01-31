import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
import './Style.css';
import Resume from './../img/pallotta_resume.pdf';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

function ContentContainer({ navSelected, setShowToast }) {

    const [index, setIndex] = useState(0);
    

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    useEffect(() => {
        var divContainer = document.getElementById("content_container");
        var divs = divContainer.getElementsByClassName("contentDivs");
        var carouselDescriptionsContainer = document.getElementById("carousel-descriptions");
        var carouselDescriptions = carouselDescriptionsContainer.getElementsByTagName("div");

        for (let item of divs) {
            if (item.dataset.item !== navSelected) {
                item.classList.add("hiddenDivs");
                
            } else {
                item.classList.remove("hiddenDivs");
            }
        }

        for (let description of carouselDescriptions) {
            if (parseInt(description.dataset.index) !== index) {
                description.classList.add("hiddenDivs");
            } else {
                description.classList.remove("hiddenDivs");
            }
        }
        
      });

    return (
        <Container id="content_container">

            <div data-item="home" className="contentDivs">
                <h1 id="homepage-title-personal">About Me</h1>
                <div className="homepage-container">
                    <p className="homepage-description">
                        Growing up, I have always been excited about learning as much as I could. 
                        My curiosity allowed me to learn about different topics, especially programming and physics.  
                        I decided to attend college in the United States, and I learned how to adapt to different 
                        situations, how to get the most out of them, and how to be versatile.  
                    </p>
                    <p className="homepage-description">
                        I moved to the United States at the age of 16, looking for opportunities that I had no chance to find in Italy.  
                        I had the opportunity to experience and love a completely different culture that allowed me to think from distinct points of view.
                    </p>

                    <p className="homepage-description">
                        After I graduate, I plan to start my own business in the IT industry in order to offer useful services to the community.
                    </p>
                </div>

                <h1 id="homepage-title-coop">What I am looking for</h1>
                <div className="homepage-container">
                    <p className="homepage-description">
                        I am looking for a Summer 2021 intership and a Fall 2021 Co-op in Software Engineering or Web Development.
                    </p>
                    <p className="homepage-description">
                        I want to be able to understand how softwares and web applications are developed, andwork together with more experienced people that I can learn from.
                    </p>
                  
                </div>
            </div>

            <div data-item="aboutme" className="contentDivs">

            <h1 id="aboutme-techical-title">Technical Skills</h1>
                <div className="aboutme-container">
                    <ul className="aboutme-list">
                        <li>OOP (Java): <span><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt></span></li>
                        <li>Web Development (HTML, CSS, JS): <span><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt></span></li>
                        <li>CSS Frameworks (Bootstrap, Bulma, SkeletonCSS): <span><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt></span></li>
                        <li>JS Frameworks/Libraries (ReactJS, jQuery, ElectronJS): <span><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span></li>
                        <li>SOP (Spring, NodeJS, Java.NET): <span><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span></li>
                        <li>Automation (Bash, Shell, Gradle, Make, XML): <span><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt></span></li>
                        <li>Design (UI, UX, UML): <span><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt></span></li>
                    </ul>
                </div>

                <h1 id="aboutme-social-title">Social Skills</h1>
                <div className="aboutme-container">
                    <ul className="aboutme-list">
                        <li>Team-based work: <span><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span></li>
                        <li>Individual-based work: <span><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt></span></li>
                        <li>Organization: <span><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span></li>
                        <li>Curiosity: <span><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span></li>
                        <li>Verbal/written communication: <span><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt></span></li>
                        <li>Italian: <span><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span></li>
                        <li>English: <span><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt></span></li>
                        <li>French: <span><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt></span></li>
                    </ul>
                </div>
            </div>

            <div data-item="education" className="contentDivs">
                <h1 id="education-title">My Education</h1>
                <div className="education-container">
                    
                    <p className="education-description">
                        <span>High School (Italy):</span>
                        <a href="https://www.liceoscientificoromita.cb.it/" target="_blank" rel="noopener noreferrer"> Liceo Scientifico A. Romita, Campobasso, Italy</a>
                    </p>
                    <p className="education-description">
                        <span>High School (USA):</span> 
                        <a href="https://bishopgrimes.org/" target="_blank" rel="noopener noreferrer"> Bishop Grimes Jr./Sr. High School, Syracuse, NY</a>
                    </p>
                    <p className="education-description">
                        <span>University:</span>
                        <a href="https://www.rit.edu/" target="_blank" rel="noopener noreferrer"> Rochester Institute of Technology, Rochester, NY</a>
                    </p>
                    <p className="education-description">
                        <span>Major:</span>
                        <a href="https://www.rit.edu/study/web-and-mobile-computing-bs" target="_blank" rel="noopener noreferrer"> Web and Mobile Computing</a>
                    </p>
                    <p className="education-description">
                        <span>Minor:</span>
                        <a href="https://www.rit.edu/study/computing-security-minor" target="_blank" rel="noopener noreferrer"> Computer Security</a>
                    </p>
                </div>
                
                <h1 id="education-achievement-title">Educational Achievements</h1>
                <div className="education-container">
                    <p className="education-description">Completed three years of high school at the Liceo Scientifico A. Romita, Campobasso, Italy.</p>
                    <p className="education-description">Graduated from Bishop Grimes Jr./Sr. High School in Syracuse, NY.</p>
                    <p className="education-description">Received the <a href="https://www.rit.edu/admissions/aid/merit-based-scholarships#freshman-merit-based" target="_blank" rel="noopener noreferrer">RIT's Founder Scholarship for Internation Students.</a></p>
                    <p className="education-description">Awarded the <a href="https://rit.meritpages.com/updates?c=1" target="_blank" rel="noopener noreferrer">B. Thomas Golisano College of Computing and Information Sciences Dean's List</a> (Fall 2018, Spring 2019, Fall 2019, Spring 2020).</p>
                </div>

                <Button href={Resume} target="_blank" rel="noopener noreferrer" variant="outline-light" size="lg" block style={{marginBottom: "0.5em"}}>Resume</Button>
            </div>

            <div data-item="work" className="contentDivs">
                <h1 id="work-title">My Projects</h1>

                <Carousel activeIndex={index} onSelect={handleSelect} id="carousel-work">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1764a162974%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1764a162974%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22289.71875%22%20y%3D%22221.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                            alt="First slide" 
                        />
                        <Carousel.Caption>
                            <h3>Tapaut</h3>
                            <p>Event Finder Mobile Application</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1764a162976%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1764a162976%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23282c34%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22251.96875%22%20y%3D%22221.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Wellness Manager</h3>
                        <p>Desktop Application for managing nutrients and calories intake</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1764a162977%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1764a162977%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%2320232a%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22278.3203125%22%20y%3D%22221.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Key-Word Searching Software</h3>
                        <p>Desktop Application that returns all the files that contain a key-word</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1764a162974%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1764a162974%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22289.71875%22%20y%3D%22221.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>The Great Depression</h3>
                        <p>Full-stack application that emulates stock market investments</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div id="carousel-descriptions">

                    <div data-index="0" className="description">
                        <p className="tech-description"><span>GitHub:</span> <a href="javascript:void(0);" onClick={() => setShowToast(true)}>Private</a></p>
                        <p className="tech-description"><span>Front-End:</span> Swift 5 (iOS) - Java 8 (Android)</p>
                        <p className="tech-description"><span>Back-End:</span> NodeJS</p>
                        <p className="tech-description"><span>Server Host:</span> Microsoft Azure</p>
                    </div>   

                    <div data-index="1" className="description">
                        <p className="tech-description"><span>GitHub:</span> <a href="https://github.com/AndreaPallotta/WellnessManagerJAVA" target="_blank" rel="noopener noreferrer">Link</a></p>
                        <p className="tech-description"><span>Front-End:</span> Java + 3rd-party libraries</p>
                    </div>  

                    <div data-index="2" className="description">
                        <p className="tech-description"><span>GitHub:</span> <a href="javascript:void(0);" onClick={() => setShowToast(true)}>Private</a></p>
                        <p className="tech-description"><span>Front-End:</span> ElectronJS</p>
                    </div>
                    
                    <div data-index="3" className="description">
                        <p className="tech-description"><span>GitHub:</span> <a href="https://github.com/AndreaPallotta/stock-market" target="_blank" rel="noopener noreferrer">Link</a></p>
                        <p className="tech-description"><span>Front-End:</span> JavaFX</p>
                        <p className="tech-description"><span>Back-End:</span> Java.NET</p>
                    </div>

                    
                </div>
            </div>
            
        </Container>
    );
}

export default ContentContainer;