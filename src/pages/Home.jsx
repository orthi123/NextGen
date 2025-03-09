
import CollectionCard from "../components/Nft Colection/CollectionCard";
import Banner from "../sections/Banner";
import Blog from "../sections/Blog";
import Brand from "../sections/Brand";
import NewsLetter from "../sections/NewsLetter";
import NFT from "../sections/NFT";
import TopCreators from "../sections/TopCreators";
const Home = () => {
  return (
    <>
      <Banner />
      <Brand/>
      <NFT/>
      <TopCreators/>
      <NewsLetter/>
     <CollectionCard/>
     <Blog/>
    </>
  );
};

export default Home;
