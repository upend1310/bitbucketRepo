import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

import NewsInDetail from "./NewsInDetail"; 

class NewsCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardData: props.data.articles,
            img_url: props.data.articles[0].urlToImage,
            title: props.data.articles[0].title,
            subtitle: props.data.articles[0].author,
            description: props.data.articles[0].description,
            source: props.data.articles[0].source.name,
            sourceUrl: props.data.articles[0].url,
            index: 0,
            cardHeight: props.cardHeight
        };

        this.nextCard = this.nextCard.bind(this);
        this.prevCard = this.prevCard.bind(this);
    }

    nextCard(event) {
        if(this.state.index < this.state.cardData.length-1){
            this.setState({
                img_url: this.state.cardData[this.state.index+1].urlToImage,
                title: this.state.cardData[this.state.index+1].title,
                subtitle: this.state.cardData[this.state.index+1].author,
                description: this.state.cardData[this.state.index+1].description,
                source: this.state.cardData[this.state.index+1].source.name,
                sourceUrl: this.state.cardData[this.state.index+1].url,
                index: this.state.index+1
            })
        }
    }

    prevCard(event) {
        if(this.state.index > 0){
            this.setState({
                img_url: this.state.cardData[this.state.index-1].urlToImage,
                title: this.state.cardData[this.state.index-1].title,
                subtitle: this.state.cardData[this.state.index-1].author,
                description: this.state.cardData[this.state.index-1].description,
                source: this.state.cardData[this.state.index-1].source.name,
                sourceUrl: this.state.cardData[this.state.index-1].url,
                index: this.state.index-1
            })
        }
    }

    componentWillUpdate(){
        document.getElementsByClassName("card")[0].classList.add("card-translucent");
    }

    componentDidUpdate(){
        setTimeout(function(){
            document.getElementsByClassName("card")[0].classList.remove("card-translucent");
        }, 200);
    }

    render(){      
        return(
            <div className="pad-10 last-card float-left">
                <NewsInDetail href={this.state.sourceUrl} />
                <Card className="float-left overflow-desk" id={"card-"+this.state.index} style={{minHeight: this.state.cardHeight+'px'}}>
                    <CardImg top width="100%" src={this.state.img_url} alt="Card image cap" />
                    <CardBody className="d-flex flex-column">
                        <CardTitle>{this.state.title}</CardTitle>
                        { this.state.subtitle && <CardSubtitle>-{this.state.subtitle}</CardSubtitle> }
                        <CardText>{this.state.description}</CardText>
                        <div className="mt-auto">
                            <button onClick={this.prevCard} className={"previous float-left round "+ (this.state.index === 0 ? 'disabled' : 'enabled')}>&#8249;</button>
                            { this.state.source && <small className="vertical-center"><a href={this.state.sourceUrl}>Source: {this.state.source}</a></small> }
                            <button onClick={this.nextCard} className={"next float-right round "+ (this.state.index ===  this.state.cardData.length-1 ? 'disabled' : 'enabled')}>&#8250;</button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default NewsCard;