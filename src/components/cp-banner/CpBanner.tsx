import styles from './cpbanner.module.scss';


const Banner = () => {
  return (
    <div className={`banner-style ${styles["banner-style"]}`}>
      <h2 className={`banner-heading ${styles["banner-heading"]}`}>
        Stay Informed. Stay Ahead.
      </h2>
      <p className={`banner-sec ${styles["banner-sec"]}`}>
        Your Source for Breaking News, In-Depth Analysis, and Expert Opinions
      </p>
      <p className={`banner-para ${styles["banner-para"]}`}>
        We bring you the latest news from around the globe
      </p>
    </div>
  );
};

export default Banner;
