import React from "react";
import { Card, CardBody } from 'reactstrap';

const NewsInDetail = (props) => {
    var screenHeight= window.innerHeight;
    var screenWidth = window.innerWidth;
    var cardHeight= screenHeight - 135;
    var cardWidth= screenWidth - 395;
    return(
        <div className="hidden-xs card-left">
            <Card style={{minHeight: cardHeight+'px', minWidth: cardWidth+'px'}}>
                <CardBody className="d-flex pad-solid-fill">
                    <iframe className="fill-width" src={props.href} title="newsindetail" />
                </CardBody>
            </Card>
        </div>
    )
}

export default NewsInDetail;