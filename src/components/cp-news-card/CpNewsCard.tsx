import style from './cpnewscard.module.scss';
import { useEffect, useState } from "react";
import Loading from "./../cp-loading/CpLoading";
import { Link } from "react-router-dom";


const NewsCards = () => {
  const [newsData, setNewsData ] = useState([]);
  const apiKey =process.env.REACT_APP_API_KEY;
  const baseURL=process.env.REACT_APP_BASE_URL;
  
  useEffect(() => {
    const fetchNewsApi = async () => {
      try {
        const response = await fetch(
          `${baseURL}api-key=${apiKey}`
        );
        const data = await response.json();

        setNewsData(data.results);
      } catch (err) {
        console.log("error", err);
        throw err;
      }
    };

    fetchNewsApi();
  }, []);

  if (!newsData || newsData.length === 0) {
    console.log("loading");
    return <Loading />;
  }

  return (
    <ul className={`list-wrap ${style["list-wrap"]}`}>
    {newsData?.map((news:any) => {
      return (
        <li className={`news-list ${style["news-list"]}`} key={news.id}>
          <Link to={news.url} className={`link ${style["link"]}`}>
            <div>
            {news.media[0] && news.media[0]['media-metadata'] && news.media[0]['media-metadata'].length >= 1 && (
              <img
                src={news.media[0]["media-metadata"][2].url} 
                alt={news.title}
              />)}
            </div>
            <h3 className={`title ${style["title"]}`}>{news.title}</h3>
            <p className={`desc ${style["desc"]}`}>{news.abstract}</p>
            <p className={`readMore ${style["readMore"]}`}>Read More</p>
          </Link>
        </li>
      );
    })}
  </ul>
  
  );
};

export default NewsCards;
