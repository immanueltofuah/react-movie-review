import React, { Component } from "react";
import Card from "./card/Card";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      review: [],
      term: "everything",
      isLoading: true
    };
  }
  async getReview() {
    fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.term}&api-key=YglynICO92Mi4lwJzAzTCRDBA0ATecfQ`
    )
      .then((response) => response.json())
      .then((review) => {
        this.setState({ review: review.results, isLoading: false });
      });
  }

  componentDidMount() {
    this.getReview();
  }

  componentWillUnmount() {
    this.setState({ review: [] });
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <p className="isLoading">Loading...</p>
        ):(
          this.state.review.map((item, index) => {
            const { byline, display_title, critics_pick, headline } = item;
            return (
              <Card key={index}>
                <div className="rev-card">
                  <div>
                    <span>Byline:</span>
                    {byline}
                  </div>
                  <div>
                    <span>Critic:</span>
                    {critics_pick}
                  </div>
                  <div>
                    <span>Title:</span>
                    {display_title}
                  </div>
                  <div>
                    <span>Headling:</span>
                    {headline}
                  </div>
                </div>
              </Card>
            );
          })
        )}
      </div>
    );
  }
}