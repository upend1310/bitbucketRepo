import React from "react";
import { Card, CardBody,
    CardTitle, CardImg,  CardText } from 'reactstrap';

const About = () => {
    var screenHeight= window.innerHeight;
    var cardHeight= screenHeight - 135;
    return(
        <div>
            <div className="pad-10 last-card"> 
                <Card className="pad-10" style={{minHeight: cardHeight+'px'}}>
                    <CardBody>
                        <CardTitle>About Me</CardTitle>
                        <div className="min-height-200">
                            <CardImg className="img-circle" src="../img/20180704_102834.jpg" alt="Upendra Kumar" />
                        </div>
                        <CardText>
                            Upendra Kumar<br />
                            Senior System Engineer<br />
                            Infosys<br />
                            upendrace62@gmail.com<br />
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default About;