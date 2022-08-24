import { useState, useEffect, useContext } from 'react'
import { uniqueCategories } from '../dummy-data'
// import { useNavigate, useParams } from 'react-router-dom'
// import axios from 'axios'
// import CategoriesContext from '../context'

const TicketPage = ({ editMode }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Q2 2022',
    owner: '',
    status: 'not started',
    progress: 0,
    timestamp: new Date().toISOString(),
  })
  console.log(formData.title)

  function handleSubmit() {
    console.log('submit')
  }

  function handleChange(e) {
    const value = e.target.value
    const name = e.target.name
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="ticket">
      <h1>{editMode ? 'Update Your Ticket' : 'Create a Ticket'}</h1>
      <div className="ticket-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              required={true}
              value={formData.title}
              onChange={handleChange}
            />

            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              type="text"
              required={true}
              value={formData.description}
              onChange={handleChange}
            />

            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {uniqueCategories?.map((category, index) => (
                <option key={index}>{category}</option>
              ))}
            </select>

            <label htmlFor="new-category">New Category</label>
            <input
              id="new-category"
              name="category"
              type="text"
              value={formData.category}
              onChange={handleChange}
            />

            <label>Priority</label>
            <div className="multiple-input-container">
              <label htmlFor="priority-1">1</label>
              <input
                id="priority-1"
                name="priority"
                type="radio"
                checked={formData.priority === 1}
                value={1}
                onChange={handleChange}
              />

              <label htmlFor="priority-2">2</label>
              <input
                id="priority-2"
                name="priority"
                type="radio"
                checked={formData.priority === 2}
                onChange={handleChange}
              />
              <label htmlFor="priority-3">3</label>
              <input
                id="priority-3"
                name="priority"
                type="radio"
                checked={formData.priority === 3}
                onChange={handleChange}
              />
              <label htmlFor="priority-4">4</label>
              <input
                id="priority-4"
                name="priority"
                type="radio"
                checked={formData.priority === 4}
                onChange={handleChange}
              />
              <label htmlFor="priority-5">5</label>
              <input
                id="priority-5"
                name="priority"
                type="radio"
                checked={formData.priority === 5}
                onChange={handleChange}
              />
            </div>

            {editMode && (
              <>
                <label htmlFor="progress">Progress</label>
                <input
                  type="range"
                  id="progress"
                  name="progress"
                  min="0"
                  max="100"
                />

                <label>Status</label>
                <select name="status">
                  <option value="done" selected={formData.status === 'done'}>
                    Done
                  </option>
                  <option
                    value="working on it"
                    selected={formData.status === 'working on it'}
                  >
                    Working on it
                  </option>
                  <option value="stuck" selected={formData.status === 'stuck'}>
                    Stuck
                  </option>
                  <option
                    value="not started"
                    selected={formData.status === 'not started'}
                  >
                    Not Started
                  </option>
                </select>
              </>
            )}

            <input type="submit" />
          </section>

          <section>
            <label htmlFor="owner">Owner</label>
            <input
              id="owner"
              name="owner"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.owner}
            />

            <label htmlFor="avatar">Avatar</label>
            <input
              id="avatar"
              name="avatar"
              type="url"
              onChange={handleChange}
            />
            <div className="img-preview">
              {!formData.avatar && (
                <img src={formData.avatar} alt="image preview" />
              )}
            </div>
          </section>
        </form>
      </div>
    </div>
  )
}

export default TicketPage
