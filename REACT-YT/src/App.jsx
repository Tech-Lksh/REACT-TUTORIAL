// import React, { useState } from 'react'

// const App = () => {
//   const [name, setName] = useState("Lokesh")

//   const changeA = () =>{
//     setName("Luvkesh")
//   }

//   return (
//     <div>
//       <h1>userName is {name}</h1>
//       <button onClick={changeA}>Change A</button>
//     </div>
//   )
// }

// export default App




// import React, { useState } from 'react'



// const App = () => {
//   const [no, setNo] = useState(0)
//   return (
//     <div>
//       <h2>Number is {no}</h2>
//       <button onClick={()=>setNo(no+10)}>Increment</button>
//       <button onClick={()=>setNo(no-10)}>Decrement</button>
//     </div>
//   )
// }

// export default App





// Form Handling 

// import React from 'react'
// import { log } from 'three/src/nodes/TSL.js'

// const App = () => {
//   const sbmtHandler = (e)=>{
//     e.preventDefault()
//     console.log("hello")

//   }

//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         sbmtHandler(e)
//       }}>
//       <input className='text-black m-5 px-4 rounded py-3' type="text" placeholder='Enter ur name'/>
//       <button className='text-white m-5 px-4 py-3 text-xl font-semibold bg-emerald-500 rounded'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App



// 2 way binding

// import React, { useState } from 'react'
// import { log } from 'three/src/nodes/TSL.js'

// const App = () => {
//   const [username, setUsername] = useState('')

//   const sbmtHandler = (e) =>{
//     e.preventDefault()

//     console.log("submt", username);

//     setUsername('')
//   }

//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         sbmtHandler(e)
//       }}>
//       <input 
//       value={username}
//       onChange={(e)=>{
//         setUsername(e.target.value)
//       }}
//       className='text-black m-5 px-4 rounded py-3' 
//       type="text" 
//       placeholder='Enter ur name'/>
//       <button className='text-white m-5 px-4 py-3 text-xl font-semibold bg-emerald-500 rounded'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'


// const App = () => {

//   const [userName, setUserName] = useState('')

// const sbmtHandler = (e) =>{
//   e.preventDefault()
//  console.log(userName);

//   setUserName('')
// }


//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         sbmtHandler(e)
//       }}>
//         <input 
//         value={userName}
//         onChange={(e)=>{
//           setUserName(e.target.value)
//         }} 
//         className='text-black m-5 px-4 rounded py-3'
//         type="text" placeholder='Enter ur name' />
//         <button className='text-white m-5 px-4 py-3 text-xl font-semibold bg-emerald-500 rounded'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App





// Fragments :  Empety tag/*
//  <> </>
//  */

import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
    return (
        <div>
            <Header />
            <Footer />
        </div>
    )
}

export default App
