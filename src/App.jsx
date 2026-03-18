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
    console.log(data);
  }
  return (
    <>
      <form onSubmit={getUserData}>
        <label >Author: </label>
        <input type="text" id="author" name="author" value={data.author} onChange={e => setData({ ...data, author: e.target.value })} /><br /><br />

        <label >Title: </label>
        <input type="text" id="title" name="title" value={data.title} onChange={e => setData({...data, title: e.target.value})}/><br /><br />

        <label >Body: </label>
        <textarea type="text" id="body" name="body" value={data.body} onChange={e=> setData({...data, body: e.target.value})}/><br /><br />

        <label>Do you want to make it public?</label>
        <input type="checkbox" id="checkbox" name="checkbox" checked={data.checkbox} onChange={e => setData({...data, checkbox: e.target.checked})} />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};


export default App