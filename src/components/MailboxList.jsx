import { Link } from "react-router-dom";
const MailboxList = (props) =>{

    return (
        <>
          <h2>Mailboxes</h2>
          <ul>
            {props.mailBoxes.map((box) => (
              <li key={box._id} className=".mail-box">
                  <Link to={`/mailboxes/${box._id}`}>{box.boxholder}</Link>
                  
                  </li>
            ))}
          </ul>
        </>
      );
    
    }
    
    export default MailboxList