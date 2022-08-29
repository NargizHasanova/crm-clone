import axios from 'axios'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { EditModeContext, EditTicketContext } from '../Context'
import { uniqueCategories } from '../dummy-data'
import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

export default function TicketPage() {
  const navigate = useNavigate()
  const { editMode, setEditMode } = useContext(EditModeContext)
  const { ticketForEdit, setTicketForEdit } = useContext(EditTicketContext)
  const [formData, setFormData] = useState({
    id: Date.now(),
    title: editMode ? ticketForEdit.title : '',
    description: editMode ? ticketForEdit.description : '',
    category: editMode ? ticketForEdit.category : 'Q2 2022',
    progress: editMode ? ticketForEdit.progress : '',
    priority: editMode ? ticketForEdit.priority : 1,
    avatar: editMode ? ticketForEdit.avatar : '',
    owner: editMode ? ticketForEdit.owner : '',
    status: editMode ? ticketForEdit.status : 'not started',
    timestamp: new Date().toISOString(), // bu ne meqsed ucun yazilib bilmirem
  })

  console.log(formData.status)

  async function handleSubmit(e) {
    e.preventDefault()
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
            <textarea
              value={formData.description}
              onChange={handleChange}
              name="description"
              id="description"
              cols="30"
              rows="10"
            ></textarea>

            {editMode && (
              <>
                <label htmlFor="progress">
                  Progress( {formData.progress}% )
                </label>
                <Box>
                  <Slider
                    value={formData.progress}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    name="progress"
                    onChange={handleChange}
                  />
                </Box>

                <label>Status</label>
                <select
                  name="status"
                  onChange={handleChange}
                  defaultValue={formData.status}
                >
                  <option value="done">Done</option>
                  <option value="working on it">Working on it</option>
                  <option value="stuck">Stuck</option>
                  <option value="not started">Not Started</option>
                </select>
              </>
            )}

            <input className="submit-btn" type="submit" />
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

            <Box sx={{ '& > legend': { mt: 2 } }}>
              <Typography component="legend">Priority</Typography>
              <Rating
                value={formData.priority}
                onChange={(event, newValue) => {
                  setFormData((prev) => ({ ...prev, priority: newValue }))
                }}
              />
            </Box>

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

            <label htmlFor="avatar">Avatar</label>
            <input
              id="avatar"
              name="avatar"
              type="url"
              onChange={handleChange}
            />
            <div className="img-preview">
              <img src={formData.avatar} alt="image preview" />
            </div>
          </section>
        </form>
      </div>
    </div>
  )
}
