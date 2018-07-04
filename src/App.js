import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Routing from "./components/Routing";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routing />
        <Footer />
      </div>
    );
  }
};

export default App;