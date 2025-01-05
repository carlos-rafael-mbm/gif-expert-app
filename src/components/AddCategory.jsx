import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    if (value.trim().length <= 1) return;
    onAdd(value);
    setValue("");
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
