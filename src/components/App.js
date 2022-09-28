import React from "react";
import Header from "./Header";
// import PlantCard from "./PlantCard";
import PlantPage from "./PlantPage";

function App() {

  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;




// const filteredTerms = () => {
//   return listings.filter((listObj) => ( listObj.description.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === "")) 
// }