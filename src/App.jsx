import './App.css'
import axios from 'axios'


function App() {
 
  return (
    <>
      <form>
        <label >Author: </label>
        <input type="text" id="author" name="author" /><br/><br/>
        
        <label >Title: </label>
        <input type="text" id="title" name="title" /><br/><br/>

        <label >Body: </label>
        <textarea type="text" id="body" name="body" /><br/><br/>
        <label>Do you want to make it public?</label>
        <input type="checkbox" id="checkbox" name="checkbox" />
        
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};


export default App