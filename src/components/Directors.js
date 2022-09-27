import React from "react";
import { directors } from "../data";

function Directors() {
  return(
    <React.Fragment>
      <h1>Directors Page</h1>

      {directors.map((director) => (
        <React.Fragment key={director.name}>
          <div>
            {director.name}
          </div>

          <>
            {director.movies.map((movies) => (
              <ul key={movies}>
                <li>
                  {movies}
                </li>
              </ul>
            ))}
          </>
        </React.Fragment>
      ))}
    </React.Fragment>
  )
  
}

export default Directors;
