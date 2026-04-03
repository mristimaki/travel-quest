import { Routes, Route } from 'react-router-dom'
import BucketlistPage from './pages/BucketlistPage'
import DestinationPage from './pages/DestinationPage'
import ExplorePage from './pages/ExplorePage'
import './App.css'

function App() {

  return (
    <>
      { /* Lägg din navbar här sen*/ }

      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/bucketlist" element={<BucketlistPage />} />
        <Route path="/destination/:id" element={<DestinationPage />} />
      </Routes>
    </>
  )
}

export default App
