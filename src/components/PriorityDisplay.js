const PriorityDisplay = ({ priority }) => {

  return (
    <div className="priority-display">
      <div className="star-container">
        <h3 style={{ color: priority >= 1 ? '#FFD326' : '' }}>★</h3>
        <h3 style={{ color: priority >= 2 ? '#FFD326' : '' }}>★</h3>
        <h3 style={{ color: priority >= 3 ? '#FFD326' : '' }}>★</h3>
        <h3 style={{ color: priority >= 4 ? '#FFD326' : '' }}>★</h3>
        <h3 style={{ color: priority >= 5 ? '#FFD326' : '' }}>★</h3>
      </div>
    </div>
  )
}

export default PriorityDisplay