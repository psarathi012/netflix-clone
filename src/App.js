import React from "react";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="TOP RATED MOVIES" fetchUrl={requests.fetchtrending} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActions} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedy} />
      <Row title="ROMANTIC MOVIES" fetchUrl={requests.fetchRomance} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorror} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
