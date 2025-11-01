import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Grid } from '@mui/material'
import ContactList from './components/ContactList.jsx'
import ContractForm from './components/ContactForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="title">Phone Book</h1>
      <Grid maxWidth="800px" margin="0px auto" padding="20px">
        <Grid item xs={6}>
          <ContractForm />
        </Grid>
        <Grid item xs={6}>
          <ContactList />
        </Grid>
      </Grid> 
    </div>
  )
}

export default App
