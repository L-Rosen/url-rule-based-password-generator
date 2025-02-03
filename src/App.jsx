import './App.css'
import { useState } from 'react'
import DomainFetcher from './components/DomainFetcher'
import RulesForm from './components/RulesForm'

function App() {
  const [domain, setDomain] = useState('')
  const [rules, setRules] = useState([])

 
  return (
    <>
    <DomainFetcher domain={domain} setDomain={setDomain} />
    <RulesForm rules={rules} setRules={setRules} />
    </>
  )
}

export default App;
