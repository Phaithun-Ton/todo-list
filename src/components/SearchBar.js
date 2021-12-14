import StatusFilter from "./StatusFilter";
import TextFilter from "./TextFilter";

function SearchBar({ status, setStatus }) {
  return (
    <div className="mt-4 d-flex">
      <TextFilter />
      <StatusFilter status={status} setStatus={setStatus} />
    </div>
  );
}

export default SearchBar;
