import './App.css'
import { useState } from 'react'
import DomainFetcher from './components/DomainFetcher'

function App() {
  const [domain, setDomain] = useState('')

 
  return (
    <>
    <DomainFetcher domain={domain} setDomain={setDomain} />
    
    </>
  )
}

export default App;
