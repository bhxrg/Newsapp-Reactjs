
import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {

  let [articles,setArticles]=useState([]);

  useEffect(()=>{

    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=2ac3b91e04ae4896aa9f07dd9122c83c")
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles);
   })
    .catch((err)=>{
    console.log(err)
    })

   },[])


return(
  <div className="App">
    

  <header className='header'>

    <h1> NewsTimes  </h1>

    <input type='text' placeholder='Search News'/>



  </header>


  <section className='news-articles'>

    {
      articles.map((article)=>{
        return (
          <News article = {article}/>
        )
      })
    }
    <News/>
  
  </section>
    
  </div>
);
}

export default App;