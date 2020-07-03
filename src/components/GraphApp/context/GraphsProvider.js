import React, { createContext, useReducer } from "react"
import { reducer } from '../store/reducer'
export const GraphsContext = createContext()

const GraphsProvider = ({ children }) => {
  const [chips, dispatch] = useReducer(reducer, [
    
  ])

  return (
    <GraphsContext.Provider value={{ chips, dispatch }}>
      {children}
    </GraphsContext.Provider>
  )
}

export default GraphsProvider;