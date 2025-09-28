// import React, { createContext } from "react";

// // Context create & export karo
// export const DataContext = createContext();

// const UserContext = ({ children }) => {
//   const Username = "Lokesh";

//   return (
//     <DataContext.Provider value={Username}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// export default UserContext;







import App from '../App'
import { createContext } from 'react'

export let DataContext = createContext()

const UserContext = ({children}) => {

  const username = "Lokesh"
  return (
    <div>
      <DataContext.Provider value={username}>
        {children}
      </DataContext.Provider>
    </div>
  )
}

export default UserContext
