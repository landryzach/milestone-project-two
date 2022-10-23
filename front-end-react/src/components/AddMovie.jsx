const AddMovie = () => {

    return (
        <div className="Form">
            <h2>Add A Movie</h2>
            <form method="POST" action="/movies">
                <label>Movie Title: </label>
                <input 
                    id="title"
                    name="title"
                    type="text"
                    required
                />
                <label>Picture: </label>
                <input 
                    type="url"
                    id="pic"
                    name="pic"
                />
                <label>Release Date: </label>
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
                    required
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