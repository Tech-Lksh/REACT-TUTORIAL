{/* Two Way Binding */}
{/*
  
import React from 'react'
import TwoWayBinding from './components/Two Way Binding/TwoWayBinding'

const App = () => {
  return (
    <div>
      <TwoWayBinding />
    </div>
  )
}

export default App

*/}


{/* React Router DOM */}
{/*
  
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/React-Router-DOM/Navbar'
import Home from './components/React-Router-DOM/Home'
import About from './components/React-Router-DOM/About'
import Product from './components/React-Router-DOM/Product'
import Contact from './components/React-Router-DOM/Contact'

const App = () => {
  return (
    <div className='p-10'>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} ></Route>
        <Route path='/product' element={<Product />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
      </Routes>
    </div>
  )
}

export default App

*/}


{/* Props Or Props Drilling */}
{/* 
  
import React from 'react'
import Cards from './components/Props Or Props Drilling/Cards'

const App = () => {

  const data = [
  {
    "name": "Rahul Sharma",
    "city": "Bangalore",
    "age": 24,
    "profession": "Software Engineer",
    "profilePhoto": "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    "name": "Ananya Verma",
    "city": "Delhi",
    "age": 22,
    "profession": "UI/UX Designer",
    "profilePhoto": "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    "name": "Arjun Patel",
    "city": "Ahmedabad",
    "age": 27,
    "profession": "Data Scientist",
    "profilePhoto": "https://randomuser.me/api/portraits/men/31.jpg"
  },
  {
    "name": "Sneha Reddy",
    "city": "Hyderabad",
    "age": 23,
    "profession": "Frontend Developer",
    "profilePhoto": "https://randomuser.me/api/portraits/women/41.jpg"
  },
  {
    "name": "Vikram Singh",
    "city": "Mumbai",
    "age": 29,
    "profession": "Backend Developer",
    "profilePhoto": "https://randomuser.me/api/portraits/men/51.jpg"
  }
]

  return (
    <div className='p-10'>
      {data.map( (props, index)=> {
          return <Cards key={index} profile={props.profilePhoto} name={props.name} city={props.city} age={props.age} profession={props.profession} />
      })}
    </div>
  )
}

export default App

*/}


{/* Hooks UseState / UseStateSnippet */}
{/*
  
import React from 'react'
import Hooks from './components/Hooks/Hooks'

const App = () => {
  return (
    <div>
      <Hooks />
    </div>
  )
}

export default App

*/}


{/* Form Handling */}
{/*
  
import React from 'react'
import FormHandling from './components/Form Handling/FormHandling'

const App = () => {
  return (
    <div>
      <FormHandling />
    </div>
  )
}

export default App

*/}


{/* Footer */}
{/*
  
import React from 'react'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Footer />
    </div>
  )
}

export default App

*/}


{/* Api Calling With Axios */}
{/*
  
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import Api from './components/Api Calling with Axios/Api'

const App = () => {

  const [data, setData] = useState([])

  const getdata = async ()=> {
    const response = await axios.get('https://picsum.photos/v2/list')

    setData(response.data)
    console.log(data)
  }

  useEffect(() => {
  getdata();
  }, [])
  
  return (
    <div className='p-10'>
      <div className='p-5 mt-5 bg-gray-950'>
        {data.map( (props, index)=> {
          return <Api key={index} img={props.download_url} id={props.id} name={props.author} />
        })}
      </div>
    </div>
  )
}

export default App

*/}