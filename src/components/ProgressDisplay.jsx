const ProgressDisplay = ({ progress }) => {
  return (
    <div className="progress-display">
      <div className="progress-bar">
        <div
          style={{ width: progress + '%' }}
          className="progress-indicator"
        ></div>
      </div>
      <h3>{progress}%</h3>
    </div>
  )
}

export default ProgressDisplay
