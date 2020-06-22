import React from 'react';
import './GraphData.css';
import Card from '../Card/Card';
import Button from '../Button/Button';
import ArticleProvider from '../context/aricleContext';
import Articles from '../containers/Articles';
import AddArticle from '../AddArticle/AddArticle';
const GraphData = (props) => {
  return(
    <div className = 'wrapperGraphData'>
     {/*<div className = 'wrapperDataInput'>
      <Card DataInput />
      <Button DataInputButton/>
     </div>  
     <div   className ='graphDatalist'>  

      <Card wrapperData/>
      <Card wrapperData/>
  </div>*/}
      <ArticleProvider>
      <AddArticle />
      <Articles />
      </ArticleProvider>



     </div>


  );
};

export default GraphData;