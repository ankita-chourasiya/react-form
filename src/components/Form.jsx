import React, { useState } from 'react';

export default function Form() {

  return (
    <>
      <form>
        <label htmlFor="fname">First name:</label><br />
        <input type="text" id="fname" name="fname" value="John" /><br />
        <label htmlFor="lname">Last name:</label><br />
        <input type="text" id="lname" name="lname" value="Doe" /><br /><br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
