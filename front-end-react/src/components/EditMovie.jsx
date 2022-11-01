import React from 'react'
import { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom';


const EditMovie = (data) => {
    const {id} = useParams()
    console.log('THI si the person we need to get out of the DB!', id)
        
    
        useEffect(()=> {
             // fetch !!! and 
        }, [])

        // const [title, editTitle] = useState('')
        // console.log('title!!!', title)
    
        // const [image, editImage] = useState('')
        // console.log('image!!!', image)
    
        // const [date, editDate] = useState('')
        // console.log('date!!!', date)
    
        // const [duration, editDuration] = useState('')
        // console.log('duration!!!', duration)
    
        // const [genre, editGenre] = useState('')
        // console.log('genre!!!', genre)
    
        // const [description, editDescription] = useState('')
        // console.log('description!!!', description)

        const movieEdit = async ()=> {
            console.log('We are about to save!!!!!')
            const requestOption = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  title: title,
                  image: image,
                  date: date,
                  duration: duration,
                  genre: genre,
                  description: description
                })
              };

             // do our fetch stuff!!
            const data = await fetch('/movie', requestOption)
            console.log('time to edit movie!!', data)
       
        }
        console.log('this is the data props thing', data)
    return (
        <div className="Form">
            <h2>Edit Movie</h2>
            {/* <form method="PUT" action={`/movies/${data.movie.id}?_method=PUT`}> */}
            {/* <form>
>>>>>>> main
                <label>Movie Title: </label>
                <input 
                    id="title"
                    name="title"
<<<<<<< HEAD
                    value={data.movie.title}
                    onChange={(e)=> {setTitle(e.target.value)}}
=======
                    value={title}
>>>>>>> main
                    required
                    onChange={(e)=> {editTitle(e.target.value)}}
                />
                <label>Image URL: </label>
                <input 
                    type="url"
                    id="image"
                    name="image"
                    value={data.movie.image}
<<<<<<< HEAD
                    onChange={(e)=> {setImage(e.target.value)}}
=======
                    onChange={(e)=> {editImage(e.target.value)}}
>>>>>>> main
                />
                <label>Date Released (year): </label>
                <input 
                    type="number"
                    id="date"
                    name="date"
                    value={data.movie.date}
                    onChange={(e)=> {setDate(e.target.value)}}
                    required
                    onChange={(e)=> {editDate(e.target.value)}}
                />
                <label>Duration (in minutes): </label>
                <input 
                    type="number"
                    id="duration"
                    name="duration"
                    value={data.movie.duration}
<<<<<<< HEAD
                    onChange={(e)=> {setDuration(e.target.value)}}
=======
                    onChange={(e)=> {editDuration(e.target.value)}}
>>>>>>> main
                />
                <label>Genre: </label>
                <input 
                    type="text"
                    id="genre"
                    name="genre"
                    value={data.movie.genre}
<<<<<<< HEAD
                    onChange={(e)=> {setGenre(e.target.value)}}
=======
                    onChange={(e)=> {editGenre(e.target.value)}}
>>>>>>> main
                />
                <label>Movie Description: </label>
                <textarea
                    id="description"
                    name="description" 
                    value={data.movie.description}
                    onChange={(e)=> {setDescription(e.target.value)}}
                    required
                    onChange={(e)=> {editDescription(e.target.value)}}
                />
                <input 
                    onClick={updateMovie}
                    className="btn"
<<<<<<< HEAD
                    // type="submit"
=======
                    onClick={movieEdit}
                    type="submit"
>>>>>>> main
                    value="Update Movie"
                />
            </form> */}
        </div>
    )





/* 
 //     const getData = async () => {
        //     const data = await fetch('/movie' +id)
        //      const cleanData = await data.json();
        //      editTitle(cleanData.title)
        //      editImage(cleanData.image)
        //      editDate(cleanData.date)
        //      editDuration(cleanData.duration)
        //      editGenre(cleanData.genre)
        //      editDescription(cleanData.description)
        // };

        // useEffect(() => {
        //     getData();
        // }, []);
        // const editMovies = async ()=> {
        //     const requestOption = {
        //         method: 'PUT',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({
        //           title: title,
        //           image: image,
        //           date: date,
        //           duration: duration,
        //           genre: genre,
        //           description: description
        //         })
        //       };
        //     const data = await fetch('/movie', requestOption)
        //     Navigate('/movie');
} */}

export default EditMovie;