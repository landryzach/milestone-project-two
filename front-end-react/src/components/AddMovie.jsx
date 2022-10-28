import NavBar from "./NavBar";

const AddMovie = () => {

    return (
        
        <div className="Form">
            <h2>Add A Movie</h2>
            {/* method is the HTTP verb and action is the destination path */}
            <form method="POST" action="/movies">
                <label>Movie Title: </label>
                <input 
                    id="title"
                    name="title"
                    required
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
                    className="btn"
                    type="submit"
                    value="Add Movie"
                />
            </form>
        </div>
    )
}

export default AddMovie;