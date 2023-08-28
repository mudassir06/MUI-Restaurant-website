import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import food from "../images/banner.jpeg"
import "./Home.css"
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${food})`}}>
        <div className="headerContainer">
          <h1>Saling Restaurant</h1>
          <p>Best Food In Ghanche</p>
          <Link to="/menu">

          <button>
            Order Now
          </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
