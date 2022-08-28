import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Menu from './Menu';
import { useParams } from 'react-router-dom';

import './ArticleDetails.css';

const ArticleDetails = () => {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleResume, setArticleResume] = useState("");
  const [articleBody, setArticleBody] = useState("");
  const [articleAuthor, setArticleAuthor] = useState("");
  const [articleInstitution, setArticleInstitution] = useState("");

  const params = useParams()
  console.log(params.id)

  useEffect(() => {
    const header  = {
      'Authorization': 'Bearer ' + localStorage.getItem('access')
    }
    const fetchArticle = async (url) => {
      await axios.get(url, {headers: header}).then(
        (response) => {
          setArticleTitle(response.data.title)
          setArticleResume(response.data.resume)
          setArticleBody(response.data.body)
          setArticleAuthor(response.data.author)
          setArticleInstitution(response.data.intitution)
        }
      )
    }

    fetchArticle('http://localhost:8000/api/v1/articles/' + params.id)
  }, [params.id])

  console.log(articleBody)

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <Menu />
          <div className='col mt-5 d-flex justify-content-center'>
            <div className='col-md-10'>
              <h2 className='my-3'>{articleTitle}</h2>
              <strong><p className='text-end'>{articleAuthor}<span> - {articleInstitution}</span></p></strong>
              <div className='row justify-content-center'>
                <div className='col-md-6'>
                  <h6 className='my-3 justify'>{articleResume}</h6>
                </div>
              </div>
              <p className='my-3 justify'>{articleBody}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default ArticleDetails;
