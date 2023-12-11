import React from "react";
import { useGlobalContext } from "./Context";
const Stories = () => {
  const { hits, nbPages, isLoading, handleDelete } = useGlobalContext();
  if (isLoading) {
    return (
      <>
        <h1>Loading.........</h1>
      </>
    );
  }
  return (
    <>
      <div className="stories-div">
        {hits.map((curPost) => {
          const { title, author, objectID, url, num_comments } = curPost;
          return (
            
              <div className="card" key={objectID}>
                <h2>{title}</h2>
                <p>
                  By {author} | <span>{num_comments}</span>
                </p>
                <div className="card-btn">
                  <a href={url} target="_blank">
                    Read More
                  </a>
                  <a href="#" onClick={()=>handleDelete(objectID)}>Remove </a>
                </div>
              </div>
          
          );
        })}
      </div>
    </>
  );
};

export default Stories;
