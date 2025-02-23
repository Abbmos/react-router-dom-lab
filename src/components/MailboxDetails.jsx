import { useParams } from "react-router-dom"

const MailboxDetails = (props) =>{
const  {boxId} = useParams()
const singleBox = props.mailBoxes.find((box) => (

box._id===Number(boxId)
 
))

return (

<>
<div>
<h2>Box details</h2>
<p><strong>Box Holder: {singleBox.boxholder} </strong></p>
<p><strong>Size: {singleBox.size} </strong></p>
</div>
</>
)


}

export default MailboxDetails