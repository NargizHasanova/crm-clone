import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { EditModeContext } from '../Context'
import logo from '../images/crm-logo.png'

const Nav = () => {
  const { editMode, setEditMode } = useContext(EditModeContext)
  const navigate = useNavigate()

  function goToCreateTicketPage() {
    navigate("/ticket")
    setEditMode(false)
  }

  function goToHomePage() {
    navigate("/")
  }

  return (
    <nav>
      <div onClick={goToHomePage} className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="controls-container">
        <div onClick={goToCreateTicketPage} className="icon" >➕</div>
        <div className="icon">❮❮</div>
      </div>
    </nav>
  )
}

export default Nav
