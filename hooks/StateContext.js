import React, { createContext, useContext, useState } from 'react';

const StateContext = React.createContext();
const StateUpdateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function useUpdateStateContext() {
  return useContext(StateUpdateContext);
}

export default function StateProvider({children}) {
  const [state, setState] = useState({
    homeButton: false,
    servicesButton: false,
    contactButton: false,
    Services: false,
    Contact: false,
    Thanks: false,
    loggedIn: false
  })

  const updateState = (newState) => {
    setState((prevState) => ({
      ...prevState,
      ...newState
    }));
  }

  return (
    <StateContext.Provider value={state}>
      <StateUpdateContext.Provider value={updateState}>
        {children}
      </StateUpdateContext.Provider>
    </StateContext.Provider>
  )
}