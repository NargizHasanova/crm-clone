import { useContext } from "react";
import { DataContext } from "../Context";

const DeleteBlock = ({ ticket }) => {
  const { getData, setGetData } = useContext(DataContext)

  function deleteTicket(e, id) {
    e.stopPropagation()
    console.log('delete');
    const filtered = getData.filter(item => item.id !== id)
    setGetData(filtered)
  }


  return (
    <div className="delete-block">
      <div className="delete-icon" onClick={(e) => deleteTicket(e, ticket.id)}>❌</div>
    </div>
  )
}

export default DeleteBlock
