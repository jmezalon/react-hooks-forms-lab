import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    category: 'Produce',
    search: ""
  })

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter(item => item.name.includes(formData.search)).filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function handleSearchChange(e) {
    const name = e.target.name
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setFormData({ 
      ...formData, 
      [name]: value 
    })  
  }

  function handleSubmit(e, newItem) {
    e.preventDefault()
    
    setItems([...items, newItem]) 
    e.target.reset()
  }

  return (
    <div className="ShoppingList">
      <ItemForm 
        name={formData.name} 
        category={formData.category} 
        onSearchChange={handleSearchChange} 
        onItemFormSubmit={handleSubmit} 
      />
      <Filter onSearchChange={handleSearchChange} search={formData.search} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
