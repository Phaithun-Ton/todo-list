function StatusFilter({ status, setStatus }) {
  const filterAll = () => {
    setStatus(0);
  };
  const filterComplete = () => {
    setStatus(1);
  };
  const filterUncomplete = () => {
    setStatus(2);
  };
  return (
    <div className="btn-group ms-3">
      <input
        type="radio"
        className="btn-check"
        id="all"
        name="status"
        defaultChecked
        onClick={filterAll}
      />
      <label className="btn btn-outline-secondary rounded-0" htmlFor="all">
        <i className="fas fa-tasks" />
      </label>
      <input
        onClick={filterComplete}
        className="btn-check"
        type="radio"
        id="done"
        name="status"
      />
      <label className="btn btn-outline-secondary rounded-0" htmlFor="done">
        <i className="fas fa-clipboard-check" />
      </label>
      <input
        onClick={filterUncomplete}
        className="btn-check"
        type="radio"
        id="doing"
        name="status"
      />
      <label className="btn btn-outline-secondary rounded-0" htmlFor="doing">
        <i className="far fa-clipboard" />
      </label>
    </div>
  );
}

export default StatusFilter;
