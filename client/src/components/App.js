import React from "react";
import { Router, Route } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import history from "../history";
import Header from "./Header";
const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/Streams/new" exact component={StreamCreate} />
          <Route path="/Streams/edit/:id" exact component={StreamEdit} />
          <Route path="/Streams/delete/:id" exact component={StreamDelete} />
          <Route path="/Streams/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
