const Search = ({setSearch, updatePageNumber}) => {
  let searchBtn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="d-flex flex-column flex-md-row w-full">
    <div className="col-12 col-md-6">
      <p>The example is made in react using the API integration. <br/>I am using SCSS and Bootstrap to keep things tidy.</p>
    </div>
    <form className="d-flex flex-row col-12 col-md-6 mb-3 bg-secondary gap-md-2 container-search justify-content-end">
        <input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        className="input--dark large"
        type="text"
      />
      
      <button
        onClick={searchBtn}
        className="btn btn-primary"
      >
        Search
      </button>
      
    </form>
    </div>
  );
}
  
export default Search;