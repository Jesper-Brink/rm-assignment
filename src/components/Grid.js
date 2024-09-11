import Rows from './Rows';

const Grid = ({results}) => {
    return (
      <div className="grid">
        <div className="container">
          <div className="row p-2 mb-3 bg-secondary text-bg-secondary">
            <div className="col d-none d-md-block col-2">Name</div>
            <div className="col-2 col-md-1 text-truncate" title="Status">Status</div>
            <div className="col-3 col-md-2 text-truncate" title="Species">Species</div>
            <div className="col-2 col-md-2 text-truncate" title="Gender">Gender</div>
            <div className="col-3 col-md-2 text-truncate" title="Location">Location</div>
            <div className="col-2 col-md-2 text-truncate" title="Episodes">Episodes</div>
            <div className="col"></div>
          </div>
        </div>
        <Rows results={results} />
      </div>
    );
  }
export default Grid;