import React, { useState } from "react";

function NewPlantForm({ addPlant }) {
  const [newPlant, setNewPlant] = useState({
    name:"",
    image:"",
    price:""
  })
  function handleSubmit (e) {
    e.preventDefault()
    addPlant(newPlant)
    setNewPlant({
      name:"",
      image:"",
      price:""
    })
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newPlant.name} onChange={(e) => setNewPlant({...newPlant, name: e.target.value})} required/>
        <input type="text" name="image" placeholder="Image URL" value={newPlant.image} onChange={(e) => setNewPlant({...newPlant, image: e.target.value})} required/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlant.price} onChange={(e) => setNewPlant({...newPlant, price: String(e.target.value)})} required/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
