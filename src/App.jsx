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
    axios.post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', data)
      .then(response => {
        console.log("Success!: ", response.data);
        alert("Post added!")
      })
      .catch(error => {
        console.log("Error: ", error);
        alert("Something went wrong!")
      })
    setData({
      author: "",
      title: "",
      body: "",
      checkbox: false
    })

  }
  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 border rounded p-4 bg-light">
            <h2 className="text-center mb-4">Add here your new post</h2>

            <form onSubmit={getUserData}>
              <div className="mb-3 text-start">
                <label htmlFor="author" className="form-label fw-bold">Author</label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  name="author"
                  value={data.author}
                  onChange={e => setData({ ...data, author: e.target.value })}
                  placeholder="Add Author here"
                />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="title" className="form-label fw-bold">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={data.title}
                  onChange={e => setData({ ...data, title: e.target.value })}
                  placeholder="Add Title here"
                />
              </div>

              <div className="mb-3 text-start">
                <label htmlFor="body" className="form-label fw-bold">Content</label>
                <textarea
                  className="form-control"
                  id="body"
                  name="body"
                  rows="4"
                  value={data.body}
                  onChange={e => setData({ ...data, body: e.target.value })}
                  placeholder="Add post here"
                />
              </div>
              <div className="mb-4 text-start">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    checked={data.checkbox}
                    onChange={e => setData({ ...data, checkbox: e.target.checked })}
                  />
                  <label className="form-check-label" htmlFor="checkbox">
                    Do you want to make it pubblic?
                  </label>
                </div>
              </div>

              <div className="d-grid">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary btn-lg"
                />
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};


export default App