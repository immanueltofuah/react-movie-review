
import React, { Component } from 'react'


 class ClassComponent extends Component {
    constructor() {
        super();
        this.state = { reviews: [],
                        term:"everything",
        };
        
    
    }
    async getreviews() {
        fetch(
            `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.term}&api-key=YglynICO92Mi4lwJzAzTCRDBA0ATecfQ`
        )
        .then((response) => {

            return response.json();
        })
        .then((reviews) => {

            this.setState({ reviews: reviews.results});
            console.log(reviews);
        });
    }

    componentDidMount() {

        this.getreviews();
    }


    componentWillUnmount() {

        this.setState({ reviews: [] });
    }

    render() {
        return(
            <>
            {this.state.reviews.map((reviews,index) => {
                return(
                    
                    <div className="background"  key={reviews.index}>
                <h1 className="component">Class Component</h1>
                 <h1 className="inputs">{reviews.byline}</h1>
                 <h1 className="inputs">{reviews.critic_pick}</h1>
                 <h1 className="inputs">{reviews.display_title}</h1>
                 <h1 className="inputs">{reviews.headline}</h1>

                 </div>
            )
            })}
            </>
        );
    }
}

export default ClassComponent;