import { useState } from 'react';
import './App.css'
import axios from 'axios'

function App() {

  const [data, setData] = useState({

    author: "",
    title: "",
    body: "",
    checkbox: false

  })


  function getUserData(e) {
    e.preventDefault()
    console.log("Sono attivo");
  }
  return (
    <>
      <form onChange={getUserData}>
        <label >Author: </label>
        <input type="text" id="author" name="author" value={data.author} onChange={e => setData({ ...data, author: e.target.value })} /><br /><br />

        <label >Title: </label>
        <input type="text" id="title" name="title" /><br /><br />

        <label >Body: </label>
        <textarea type="text" id="body" name="body" /><br /><br />

        <label>Do you want to make it public?</label>
        <input type="checkbox" id="checkbox" name="checkbox" />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};


export default App