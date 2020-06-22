import React from 'react';
import './App.css';
import GraphApp from './components/GraphApp/GraphApp'

const App = (props) => {
  return (
    <div className = 'wrapperApp'>  
    <GraphApp />
    </div>
  )
}

export default App;
/*import React from "react";
import './App.css';
import ArticleProvider from "./context/aricleContext";
import Articles from "./containers/Articles";
import AddArticle from "./components/AddArticle/AddArticle";

function App() {
  return (
    <ArticleProvider>
      <AddArticle />
      <Articles />
    </ArticleProvider>
  );
}
export default App;*/
