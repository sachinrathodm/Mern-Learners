import react from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import MemberRegistrationScreen from './screens/MemberRegistrationScreen'
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' component={MemberRegistrationScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
