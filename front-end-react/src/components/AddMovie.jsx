

const AddMovie = () => {

    return (
        <div className="Form">
            <h2>Add A Movie</h2>
            <form>
                <label>Movie Title: </label>
                <input 
                    type="text"
                    required
                />
                <label>Picture: </label>
                <input 
                    type="url"
                />
                <label>Release Date: </label>
                <input 
                    type="text"
                    required
                />
                <label>Duration: </label>
                <input 
                    type="text"
                />
                <label>Genre: </label>
                <input 
                    type="text"
                    required
                />
                <label>Movie Description: </label>
                <textarea 
                    required
                />
                {/* <button>Add Movie</button> */}
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