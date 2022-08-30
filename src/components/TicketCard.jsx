import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import StatusDisplay from './StatusDisplay'
import AvatarDisplay from './AvatarDisplay'
import { Link, useNavigate } from 'react-router-dom'
import DeleteBlock from './DeleteBlock'
import { useContext } from 'react'
import { EditModeContext, EditTicketContext } from '../Context'

export default function TicketCard({ color, ticket }) {
  const navigate = useNavigate()
  const { editMode, setEditMode } = useContext(EditModeContext)
  const { ticketForEdit, setTicketForEdit } = useContext(EditTicketContext)

  function gotoTicketPage() {
    console.log(ticket)
    setEditMode(true)
    setTicketForEdit(ticket)
    navigate(`/ticket/:${ticket.id}`)
  }

  return (
    <div onClick={gotoTicketPage} className="ticket-card">
      <div className="ticket-color" style={{ backgroundColor: color }}></div>
      <Link to="/" id="link">
        <h3>{ticket.title}</h3>
        <AvatarDisplay ticket={ticket} />
        <StatusDisplay status={ticket.status} />
        <PriorityDisplay priority={Number(ticket.priority)} />
        <ProgressDisplay progress={Number(ticket.progress)} />
      </Link>
      <DeleteBlock ticket={ticket} />
    </div>
  )
}
