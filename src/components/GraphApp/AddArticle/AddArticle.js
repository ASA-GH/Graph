import React, { useState, useContext } from "react"
import './AddArticle.css';
import  {ArticleContext}  from '../context/aricleContext';
import Puls from '../ikonate/svg/plus.svg';

const AddArticle = () => {
  const { dispatch } = useContext(ArticleContext)
  const [article, setArticle] = useState()

  const handleArticleData = e => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value,
    })
  }

  const addNewArticle = e => {
    e.preventDefault()
    dispatch({ type: "ADD_ARTICLE", article })
  }

  return (
    <form onSubmit={addNewArticle} className="add-article">
      <input
        type="text"
        id="title"
        placeholder="Graph"
        onChange={handleArticleData}
      />
      <button>
        <img className ='plusSvg' src ={Puls} alt='+'/>
      </button>
    </form>
  )
}
export default AddArticle;