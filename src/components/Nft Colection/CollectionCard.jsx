import CollectionOne from "../../assets/images/collection1.png";
import CollectionTwo from "../../assets/images/collection2.png";
import CollectionThree from "../../assets/images/collection3.png";
import CollectionFour from "../../assets/images/collection4.png";
import { Link } from "react-router";
import Container from "../Container";
import Flex from "../Flex";
const CollectionCard = () => {
  return (
    <Container>
      <Flex className="flex-row items-center gap-5">
        <div className="max-w-[400px] h-[500px] text-center border border-[#2E3150] rounded-[300px] bg-[#16192A] pb-[87px] pt-[15px] pl-[35px] pr-[35px] ">
          <img src={CollectionOne} alt="" />
          <h2 className="font-primary_font font-extrabold mb-4">Broken collection</h2>
          <Link className="text-[#BC61F3]">View Collection</Link>
        </div>
        <div className="max-w-[400px] h-[500px] text-center border border-[#2E3150] rounded-[300px] bg-[#16192A] pb-[87px] pt-[15px] pl-[35px] pr-[35px]">
          <img src={CollectionTwo} alt="" />
          <h2 className="font-primary_font font-extrabold mb-4">Broken collection</h2>
          <Link className="text-[#BC61F3]">View Collection</Link>
        </div>
        <div className="max-w-[400px] h-[500px] text-center border border-[#2E3150] rounded-[300px] bg-[#16192A] pb-[87px] pt-[15px] pl-[35px] pr-[35px]">
          <img src={CollectionThree} alt="" />
          <h2 className="font-primary_font font-extrabold mb-4">Broken collection</h2>
          <Link className="text-[#BC61F3]">View Collection</Link>
        </div>
        <div className="max-w-[400px] h-[500px] text-center border border-[#2E3150] rounded-[300px] bg-[#16192A] pb-[87px] pt-[15px] pl-[35px] pr-[35px]">
          <img src={CollectionFour} alt="" />
          <h2 className="font-primary_font font-extrabold mb-4">Broken collection</h2>
          <Link className="text-[#BC61F3]">View Collection</Link>
        </div>
      </Flex>
    </Container>
  );
};

export default CollectionCard;