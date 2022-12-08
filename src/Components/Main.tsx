import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { DataType } from "../Players/PlayersData";
const Main = () => {
  const [dataStore, setDataStore] = useState<DataType[]>([]);

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      console.log("Got it ", response);
      if (response.ok) {
        let store = await response.json();
        console.log("data is okay", store);
        setDataStore(store);
      } else {
        console.log("Oops smth went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row ">
            {dataStore.map((store) => (
        <div className=" col col-md-12">
      
              <div className="post-slide ">
                <div className="post-img">
                  <img src={store.imageUrl} alt="" />
                </div>
                <div className="post-content">
                  <h3 className="post-title">
                    <a href="#">{store.title}</a>
                  </h3>
                  <p className="post-description">{store.summary}</p>
                  <span className="post-date">
                    <i className="fa fa-clock-o"></i>
                    {store.publishedAt}
                  </span>
                </div>
              </div>
        </div>
            ))}
        
      </div>
  

    </div>
  );
};

export default Main;
