import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ name, category, onSearchChange, onItemFormSubmit }) {

  

  const newItem = {
    id: uuid(),
    name: name,
    category: category
  }


  return (
    <form className="NewItem" onSubmit={(e) => onItemFormSubmit(e, newItem)}>
      <label>
        Name:
        <input type="text" name="name" onChange={onSearchChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={onSearchChange} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
