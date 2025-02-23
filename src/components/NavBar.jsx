import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link> <span>          </span>
      <Link to="/mailboxes">Mailboxes</Link>  <span>          </span>
      <Link to="/new-mailbox">New Mailbox</Link>
    </>
  );
};

export default NavBar