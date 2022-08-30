import { useNavigate } from 'react-router-dom'
import { tickets, uniqueCategories } from '../dummy-data'
import TicketCard from '../components/TicketCard'
import { useContext } from 'react'
import { DataContext } from '../Context'


export default function Dashboard() {
  const { getData, setGetData } = useContext(DataContext)
  const colors = [
    'rgb(255,179,186)',
    'rgb(255,223,186)',
    'rgb(255,255,186)',
    'rgb(186,255,201)',
    'rgb(186,225,255)',
  ]

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {getData
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    key={_index}
                    // meselen gelecekde categories cox olarsa colors[] errorvermesin deye default olaraq colors[0] qeyd edirik
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  )
}
