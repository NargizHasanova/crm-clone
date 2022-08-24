// import { useNavigate } from 'react-router-dom'
import logo from '../images/crm-logo.png'

const Nav = () => {

  // const navigate = useNavigate()

  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="controls-container">
        <div className="icon" >➕</div>
        <div className="icon">❮❮</div>
      </div>
    </nav>
  )
}

export default Nav
