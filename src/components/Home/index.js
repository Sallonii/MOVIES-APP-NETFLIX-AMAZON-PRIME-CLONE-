import './index.css'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import Header from '../Header'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="home-main-container">
      <Header />
      <h1>Super Man</h1>
    </div>
  )
}

export default Home
