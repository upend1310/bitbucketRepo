import React from "react";

import NewsCard from "./NewsCard";

const API_KEY = "16aa484d005e480388dd82243d35cb03";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          data: undefined,
          paramType: props.paramType.toLowerCase(),
          defaultParam: props.param.toLowerCase()
        };
    } 

    componentDidMount() {
        var apiUrl;
        if(this.state.paramType === "category") {
            apiUrl= `https://newsapi.org/v2/top-headlines?${this.state.paramType}=${this.state.defaultParam}&country=in&apiKey=${API_KEY}`
        }

        if(this.state.paramType === "country") {
            apiUrl= `https://newsapi.org/v2/top-headlines?${this.state.paramType}=${this.state.defaultParam}&apiKey=${API_KEY}`
        }

        fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                data: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
            );
    }

    render() {
        const { error, isLoaded, data } = this.state;
        var screenHeight= window.innerHeight;
        var cardHeight= screenHeight - 135;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="page-center"><div className="lds-circle"></div></div>;
        } else {
            return(
                <div>
                    <NewsCard data= {data} cardHeight= {cardHeight}/>
                </div>
            )
        }
    }
}

export default Body;