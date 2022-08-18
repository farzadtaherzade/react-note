export default function Search({ setSearch }) {
  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  return (
    <form className="search">
      <input
        type="search"
        className="box-search"
        placeholder="Type for search..."
        onChange={searchHandler}
      />
      <i className="fa fa-search"></i>
    </form>
  );
}
