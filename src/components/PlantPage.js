import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  

  const displayPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])  

  return (
    <main>
      <NewPlantForm plants={plants} />
      <Search setSearchTerm ={setSearchTerm} searchTerm= {searchTerm}  />
      <PlantList  plants={displayPlants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
