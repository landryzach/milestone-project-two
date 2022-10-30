import NavBar from "./NavBar";

import {useState} from 'react'

const NewMovie = () => {

    const [title, setTitle] = useState('')
    console.log('title!!!', title)

    const saveMovie = async ()=> {
        console.log('We are about to save!!!!!')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title: title,
              
            })
          };
         // do our fetch stuff!!
        const data = await fetch('/movie', requestOptions)
         console.log('time to save movei!!', data)
    }
    
    return (
        
        <div className="Form">
            <h2>Add A New Movie</h2>
            {/* method is the HTTP verb and action is the destination path */}
            {/* <form method="POST" action="/movie"> */}
            <form >
                <label>Movie Title: </label>
                <input 
                    id="title"
                    name="title"
                    required
                    onChange={(e)=> {setTitle(e.target.value)}}
                />
                <label>Image URL: </label>
                <input 
                    type="url"
                    id="image"
                    name="image"
                />
                <label>Date Released (year): </label>
                <input 
                    type="number"
                    id="date"
                    name="date"
                    required
                />
                <label>Duration (in minutes): </label>
                <input 
                    type="number"
                    id="duration"
                    name="duration"
                />
                <label>Genre: </label>
                <input 
                    type="text"
                    id="genre"
                    name="genre"
                />
                <label>Movie Description: </label>
                <textarea
                    id="description"
                    name="description" 
                    required
                />
                <input 
                onClick={saveMovie}
                    className="btn"
                   // type="submit"
                    value="Add Movie"
                />
            </form>
        </div>
    )
}

export default NewMovie;