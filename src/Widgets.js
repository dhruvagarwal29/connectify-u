import React from 'react'
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__article_left'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__article_right' >
                <h4>{heading}</h4>
                <p> {subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>
                Connectify News
            </h2>
            <InfoIcon />
        </div>
        {newsArticle("Aliens are Here", "Top news - 9099 reader")}
        {newsArticle("Coronavirus: UK updates", "Top news - 886 reader")}
        {newsArticle("Bitcoin Breaks $22K", "Crypto - 8000 reader")}
        {newsArticle("JavaScript Mastery", "Code - 120000 reader")}
        {newsArticle("Tesla hits new highs", "Cars & auto - 300 reader")}
    </div>
  )
}


export default Widgets

// import React, { useEffect, useState } from 'react';
// import './Widgets.css';
// import InfoIcon from '@mui/icons-material/Info';
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// function Widgets() {
//   const [newsData, setNewsData] = useState([]);

//   useEffect(() => {
//     // Fetch news data from NewsAPI
//     fetch(
//         'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9f16ca3480754ca0a17b42f93a7f8c06'
//     )
//       .then((response) => response.json())
//       .then((data) => setNewsData(data.articles));
//   }, []);

//   const newsArticle = (article) => (
//     <div className="widgets__article" key={article.title}>
//       <div className="widgets__article_left">
//         <FiberManualRecordIcon />
//       </div>
//       <div className="widgets__article_right">
//         <a href={article.url} target="_blank" rel="noreferrer">
//           <h4>{article.title}</h4>
//         </a>
//         <p>{article.description}</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="widgets">
//       <div className="widgets__header">
//         <h2>Connectify News</h2>
//         <InfoIcon />
//       </div>
//       {newsArticle("Dhruv Is Back", "Top news - 9099 reader")}
//       {newsArticle("Coronavirus: UK updates", "Top news - 886 reader")}
//       {newsArticle("Bitcoin Breaks $22K", "Crypto - 8000 reader")}
//       {newsArticle("JavaScript Mastery", "Code - 120000 reader")}
//       {newsArticle("Tesla hits new highs", "Cars & auto - 300 reader")}
//       {/* {newsData && newsData.map((article) => newsArticle(article))} */}
//     </div>
//   );
// }

// export default Widgets;

