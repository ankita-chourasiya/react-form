import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Box,
  Dialog,
  DialogTitle } from '@mui/material';

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
      <Box>
        <form>
          <label>First name:</label><br />
          <TextField
            type="text"
            id="fname"
            name="fname"
            value={formVal.fname}
            onChange={handleFormVal}
          /><br />
          <label>Last name:</label><br />
          <TextField
            type="text"
            id="lname"
            name="lname"
            value={formVal.lname}
            onChange={handleFormVal}
          /><br /><br />
          <Button variant="contained" color="primary" onClick={formSubmit}>
            Submit
          </Button>
        </form>
      </Box>

      <Dialog open={true} > 
        <h1>hello</h1>
        <DialogTitle>Set backup account</DialogTitle>
      </Dialog>
    </>
  );
}
