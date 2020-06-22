import React from "react"
import './Article.css'
import Card from '../Card/Card'
import Button from '../Button/Button'

const article = ({ article }) => (
  <Card wrapperArticle>
    <p>{article.title}</p>
    <Button>X</Button>
  </Card>
)

export default article