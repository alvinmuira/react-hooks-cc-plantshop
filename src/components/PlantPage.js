import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantData, setPlantData] = useState([])
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlantData(data))
  }, [])

  function handleNewPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(newPlant)
    })
      .then((r) => r.json())
      .then((data) => setPlantData([...plantData, data]))
  }

  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlants = plantData.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm addPlant={handleNewPlant} />
      <Search setSearch={setSearchTerm} />
      <PlantList plantData={filteredPlants} />
    </main>
  );
}

export default PlantPage;
