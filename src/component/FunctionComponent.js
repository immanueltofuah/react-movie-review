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
    console.log(res);;
    
    //updates the users state to contain the response
    setReviews(res.data);
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
      {
        //maps through the users state and renders an h1 containing the user's name
        reviews.map((reviews) => {
          return (
            <div className="back" key={reviews.id}>
              <h1 className="inputs">{reviews.byline}</h1>
              <h1 className="inputs">{reviews.critic.pick}</h1>
              <h1 className="inputs">{reviews.title}</h1>
              <h1 className="inputs">{reviews.headline}</h1>

            </div>
          );
        })
      }
    </>
  );
}

export default FunctionComponent;
