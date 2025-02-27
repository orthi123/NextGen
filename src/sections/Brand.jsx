import Container from "../components/Container";
import Flex from "../components/Flex";
import brand1 from "../assets/images/brand1.png";
import brand2 from "../assets/images/brand2.png";
import brand3 from "../assets/images/brand3.png";
import brand4 from "../assets/images/brand4.png"; 
import brand5 from "../assets/images/brand5.png";
import bgImage from "../assets/images/bg.png";

const brandImages = [
  {
    src: brand1, // Use imported variable instead of string
    alt: "brand1",
  },
  {
    src: brand2,
    alt: "brand2",
  },
  {
    src: brand3,
    alt: "brand3",
  },
  {
    src: brand4, 
    alt: "brand4", 
  },
  {
    src: brand5,
    alt: "brand5",
  },
  
  
];

const Brand = () => {
  return (
    <section className="py-44">
    <img src={bgImage} alt="" className="absolute -top-[-400px] left-0"/>
      <Container>
        <Flex className={` ${brandImages.length>5&&"flex-wrap"} gap-28`}>
          {brandImages.map(({ src, alt }) => (
            <div key={alt}>
              <img src={src} alt={alt} />
            </div>
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default Brand;
