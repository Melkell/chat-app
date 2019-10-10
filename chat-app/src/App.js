import React from "react";

import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <Contact
        img="https://randomuser.me/api/portraits/women/43.jpg"
        name="Megan Parker"
        online={false}
      />
      <Contact
        img="https://randomuser.me/api/portraits/men/87.jpg"
        name="Byron Curtis"
        online={true}
      />
      <Contact
        img="https://randomuser.me/api/portraits/men/4.jpg"
        name="Julian Obrien"
        online={false}
      />
    </div>
  );
};

export default App;

