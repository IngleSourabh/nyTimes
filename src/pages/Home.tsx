import { Suspense } from "react";
import Banner from "./../components/cp-banner/CpBanner";
import Navbar from "./../components/cp-navbar/CpNavbar";
import NewsCards from "./../components/cp-news-card/CpNewsCard";

const Home = () => {
  
  return (
    <div>

      <Navbar />

      <Banner />

      <Suspense fallback="Loading...">
        <NewsCards />
      </Suspense>
    </div>
  );
};

export default Home;
