import './css/App.css'
import Navbar from './components/Navbar'
import Journal from './components/Journal'
import journalData from './journalData'

function App() {
  const journal = journalData.map(data => {
    return <Journal   
      key={data.id}
      data={data}              
    />
  })

  return (
    <div>
        <Navbar/>
        {journal}
    </div>
  )
}

export default App
