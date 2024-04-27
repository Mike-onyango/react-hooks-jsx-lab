import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return <div>
    Home
  <div id = "home">
    <h1 style = {{ color: "fireback"}}> "Your {name} is a Web Developer from Your {city}" </h1>
  </div>

    </div>;
}

export default Home;
