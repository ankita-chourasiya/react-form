import React, { useState } from 'react';

export default function Form() {
  const [formVal, setFormVal] = useState({
    fname: "",
    lname: ""
  });

  const handleFormVal = (event) => {
    const { name, value } = event.target;
    // const name = event.target.name;
    // const value  = event.target.value;

    setFormVal(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const formSubmit = (event) => {
    event.preventDefault();
    console.log("FormValue", formVal);
  }

  return (
    <>
      <form>
        <label>First name:</label><br />
        <input type="text" id="fname" name="fname" onChange={(event) => handleFormVal(event)} /><br />
        <label>Last name:</label><br />
        <input type="text" id="lname" name="lname" onChange={(event) => handleFormVal(event)} /><br /><br />
        <input type="submit" value="Submit" onClick={(event) => formSubmit(event)} />
      </form>
    </>
  );
}
