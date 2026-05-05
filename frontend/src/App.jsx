import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Generate from './pages/Generate'
import WebsiteEditor from './pages/WebsiteEditor'
import LiveSite from './pages/LiveSite'
import Pricing from './pages/Pricing'
import { useSelector } from 'react-redux'

const App = () => {
  const { userData } = useSelector(state => state.user)

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={userData ? <Dashboard /> : <Home />} />
          <Route path='/generate' element={userData ? <Generate /> : <Home />} />
          <Route path='/editor/:id' element={userData ? <WebsiteEditor /> : <Home />} />
          <Route path='/site/:slug' element={<LiveSite />} />
          <Route path='/pricing' element={<Pricing />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App