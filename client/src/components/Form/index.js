import React from "react";


function Form(props){
return (
  <div className="container">
  <form>
    <div className="form-group">
      <label><h2>Lets see what we can find for you!</h2></label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search for Book"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-success mt-3 mb-5">
        Search
        </button>
    </div>
  </form>
  </div>
);
}

export default Form;