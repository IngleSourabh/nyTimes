import style from "./cpnewscard.module.scss";
import { useEffect, useState } from "react";
import Loading from "./../cp-loading/CpLoading";
import { Link } from "react-router-dom";

interface NewsDataItem {
  id: string;
  section: string;
  title: string;
  abstract: string;
  url: string;
  media: {
    "media-metadata": {
      url: string;
    }[];
  }[];
}

const NewsCards = () => {
  const [newsData, setNewsData] = useState<NewsDataItem[]>([]);
  const [visibleData, setVisibleData] = useState<NewsDataItem[]>([]);
  const [visibleDataCount, setVisibleDataCount] = useState<number>(5);
  const [filterData, setFilterData] = useState<NewsDataItem[]>([]);
  const [activeTag, setActiveTag] = useState<string>("All");
  const [disable, setDisable] = useState<boolean>(false);

  const apiKey = process.env.REACT_APP_API_KEY;
  const baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchNewsApi = async () => {
      try {
        const response = await fetch(`${baseURL}api-key=${apiKey}`);
        const data = await response.json();

        setNewsData(data.results);
        setVisibleData(data.results.slice(0, 5));
        setFilterData(data.results);
      } catch (err) {
        console.log("error", err);
        throw err;
      }
    };

    fetchNewsApi();
  }, [apiKey,baseURL]);

  if (!newsData || newsData.length === 0) {
    console.log("loading");
    return <Loading />;
  }
 

  const handleLoadMore = () => {
    const newVisibleCount = visibleDataCount + 5;
    setVisibleDataCount(newVisibleCount);

    setVisibleData(filterData.slice(0, newVisibleCount));
    if (newVisibleCount >= filterData.length) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  const arrSection = Array.from(
    new Set(newsData?.map((data: any) => data?.section))
  );

  arrSection.unshift("All");

  const handlefilterItem = (e: string) => {
    setActiveTag(e);
    const initialCount =5
    console.log(e,'section')
    if (e === "All") {
      setFilterData(newsData);
      setVisibleData(newsData.slice(0, initialCount));
      setDisable(newsData.length <= 5);
    } else {
      const filterTagData = newsData.filter((data: any) => data.section === e);
      setFilterData(filterTagData);
      setVisibleData(filterTagData.slice(0, initialCount));
      console.log(visibleDataCount,"inside else")
      setDisable(filterTagData.length <= 5);
    }
  };


  console.log(visibleDataCount,"visibleDataCount")

  return (
    <div>
      <ul className={style["tags"]}>
        {arrSection?.map((data: any, i: number) => {
          return (
            <li key={i}>
              <button
                className={`${style["btn-tags"]} ${
                  activeTag === data && style["active"]
                }`}
                onClick={() => handlefilterItem(data)}
              >
                {data}
              </button>
            </li>
          );
        })}
      </ul>

      <ul className={`list-wrap ${style["list-wrap"]}`}>
        {visibleData?.map((news: any) => {
          return (
            <li className={`news-list ${style["news-list"]}`} key={news.id}>
              <Link to={news.url} className={`link ${style["link"]}`}>
                <div>
                  {news.media[0] &&
                    news.media[0]["media-metadata"] &&
                    news.media[0]["media-metadata"].length >= 1 && (
                      <img
                        src={news.media[0]["media-metadata"][2].url}
                        alt={news.title}
                      />
                    )}
                </div>
                <h3 className={`title ${style["title"]}`}>{news.title}</h3>
                <p className={`desc ${style["desc"]}`}>{news.abstract}</p>
                <p className={`readMore ${style["readMore"]}`}>Read More</p>
              </Link>
            </li>
          );
        })}
      </ul>

      {!disable && (
        <div className={style["center"]}>
          <button
            disabled={disable}
            className={`${style["btn-load"]} ${style["btn-loadmore"]}`}
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsCards;
