function SearchPerson(props: any) {
    return (
        <div className="container mt-3 mb-3">
            <form className="search">
                <div className="row">
                    <div className="col-2">
                        <label className="text-center"><h3>Search:</h3></label>
                    </div>
                    <div className="col-8">
                        <input
                        name="search"
                        onChange={props.handleInputChange}
                        type="text"
                        className="form-control"
                        placeholder="Search for Cast Member"
                        id="search"
                        autoComplete="off"
                        />
                    </div>
                </div>
            </form>
        </div>
)
}

export default SearchPerson