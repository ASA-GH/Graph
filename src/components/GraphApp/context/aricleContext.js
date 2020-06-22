import React, { createContext, useReducer } from "react"
import { reducer } from '../store/reducer'
export const ArticleContext = createContext()

const ArticleProvider = ({ children }) => {
  const [articles, dispatch] = useReducer(reducer, [
    
  ])

  return (
    <ArticleContext.Provider value={{ articles, dispatch }}>
      {children}
    </ArticleContext.Provider>
  )
}

export default ArticleProvider;