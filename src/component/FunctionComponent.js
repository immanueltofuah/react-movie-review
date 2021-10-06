import axios from "axios";
import React, { useEffect, useState } from "react";


function FunctionComponent() {
  //state which stores users
  const [reviews, setReviews] = useState([]);
  const [term, setTerm] = useState("everything")

  //Asynchronous function which gets users from server
  async function getReviews() {
    //gets data using axios from url and stores it in res variable
    const res = await axios.get( `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${term}&api-key=YglynICO92Mi4lwJzAzTCRDBA0ATecfQ`)
    
    //updates the users state to contain the response
    setReviews(res.data.results);
  }

  //hook to use lifecycle methods in functional component
  useEffect(() => {
    //calls getUsers function when component is first mounted
    getReviews();

    //gets called when the component is about to be unmounted
    return () => {
      //sets the users state to an empty array
      setReviews([]);
    };
  }, []);

  return (
    <>
    <h1 className="function">Function Component</h1>
      {
        //maps through the users state and renders an h1 containing the user's name
        reviews.map((reviews, index) => {
          return (
            <div className="back" key={index}>
              <h1 className="inputs">Byline: {reviews.byline}</h1>
              <h1 className="inputs">Critics_pick: {reviews.critics_pick}</h1>
              <h1 className="inputs">Title: {reviews.display_title}</h1>
              <h1 className="inputs">Headline: {reviews.headline}</h1>

            </div>
          );
        })
      }
    </>
  );
}

export default FunctionComponent;
