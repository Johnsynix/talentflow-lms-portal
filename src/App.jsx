import Dashboard from './pages/dashboard/Dashboard'
// import Home from './pages/dashboard/view/home/Home'
import { NotFound } from './pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App