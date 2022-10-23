const EditMovie = () => {

    return (
        <div className="Form">
            <h2>Edit Movie</h2>
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
                {/* <button>Edit Movie</button> */}
                <input 
                    className="btn"
                    type="submit"
                    value="Update Movie"
                />
            </form>
        </div>
    )
}

export default EditMovie;