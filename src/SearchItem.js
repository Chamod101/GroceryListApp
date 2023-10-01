const SearchItem = (props) => {
    return (
        <form className="searchFrom" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input
                id='search'
                type='text'
                role="searchbox"
                placeholder="Search Items"
                value={props.search}
                onChange={(e) => props.setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchItem