import React, { createContext, useReducer } from "react"
import { reducer } from '../store/reducer'
export const ChipContext = createContext()

const ChipProvider = ({ children }) => {
  const [chips, dispatch] = useReducer(reducer, [
  ])

  return (
    <ChipContext.Provider value={{ chips, dispatch }}>
      {children}
    </ChipContext.Provider>
  )
}

export default ChipProvider;