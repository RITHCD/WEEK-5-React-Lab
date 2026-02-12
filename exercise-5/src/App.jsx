// import React from "react";
import { data } from "./data";
import Card from "./components/Card";




function App() {
  return (
    <div className="app">
      {data.map(user => (
        <Card key={user.id} item={user} />
      ))}
    </div>
  );
}

export default App;
