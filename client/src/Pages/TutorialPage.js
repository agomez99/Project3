import React from 'react';
import "./style.css"
import Card from "react-bootstrap/Card"
const TutorialPage = () => {
    return (
        <div>

            <Card bg="danger">
                <Card.Body className="video-container">
                    <iframe
                        title="json"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/4fCr1IepJRw"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </Card.Body>
            </Card>
            <Card bg="dark">
                <Card.Body className="video-container">
                    <iframe
                        title="data"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/6iZiqQZBQJY"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </Card.Body>
            </Card>
            <Card bg="danger">
                <Card.Body className="video-container">
                    <iframe
                        title='traversy'
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/UB1O30fR-EE"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </Card.Body>
            </Card>
            <Card bg="dark">
                <Card.Body className="video-container">
                    <iframe
                        title="traversy"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Wy9q22isx3U"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </Card.Body>
            </Card>
            <Card bg="danger">
                <Card.Body className="video-container">
                    <iframe
                        title='traversy'
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Uyei2iDA4Hs"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </Card.Body>
            </Card>
        <h1>TutorialPage</h1>

        </div>
    )

}


export default TutorialPage;