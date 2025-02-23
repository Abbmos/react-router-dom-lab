// src/App.jsx
import './App.css'
import NavBar from './components/NavBar';
import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';







const App = () => {
 
  const [mailBoxes,setMailBoxes] = useState([])

const addBox = (formData) => {
formData._id=mailBoxes.length+1;
setMailBoxes([...mailBoxes,formData])
}



  return (
  
  <>
<NavBar/>
<h1>MailBox!</h1>
<Routes>
<Route path={'/'} element={<main> Post Office </main>}/>
  <Route path={'/mailboxes'} element={ <MailboxList mailBoxes={mailBoxes}/>} />
  <Route path={'/new-mailbox'} element={ <MailboxForm addBox={addBox}/> } />
  <Route path={'/mailboxes/:boxId'} element={ <MailboxDetails mailBoxes={mailBoxes}/> } />
  
</Routes>

  </>
  
  
  )
};

export default App;