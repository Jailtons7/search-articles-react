import React from 'react';

import Article from './Article';

const Articles = ({articles}) => {
  return ( 
    <>
      {
        articles.map((article) => (
          <Article key={article.CodArtigoPublicado} article={article} />
        ))
      }
    </>
  );
}
 
export default Articles;
