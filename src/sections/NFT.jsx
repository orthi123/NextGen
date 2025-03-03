import Container from "../components/Container";
import Flex from "../components/Flex";
import SliderComponent from "../components/Slider";
import Title from "../components/Title";
import nftImg from "../assets/images/nft1.png";
import nftImg2 from "../assets/images/nft2.png";
import nftImg3 from "../assets/images/nft3.png";
import Button from "../components/Button";
import avatarImg from "../assets/images/avatar1.png"

const NFT = () => {
  const settings={
     arrows: false,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,

appendDots:(dots) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i)=> (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid"
        }}
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <section className="relative z-50">
      <Container>
         <Flex className="flex-col items-center">
          <Title title={"Collect some NFTs"} />
        </Flex> 
        <SliderComponent
          className="mt-16"
          settings={settings}
        >
          <div>
            <img src={nftImg} className="object-cover" />
            <div className="max-w-[90%] mx-auto bg-white p-6 rounded-4xl -translate-y-16">
              <Flex className="flex-col e text-primary_bg">
                <Flex className="justify-between font-extrabold text-2xl text-primary_bg items-center">
                  <h4>Lighting Axe</h4>
                  <h5>0.36 eth</h5>
                </Flex>
                <Flex className="mb-6 mt-12 items-center">
                  <img src={avatarImg} className="w-9" />
                  <h6 className="text-xl font-medium">Loura chin</h6>
                </Flex>
              </Flex>
              <Button
                text={"Buy it now"}
                className="w-full block text-center rounded-2xl"
              />
            </div>
          </div>

          <div>
            <img src={nftImg2} className="object-cover" />
            <div className="max-w-[90%] mx-auto bg-white p-6 rounded-4xl -translate-y-16">
              <Flex className="flex-col e text-primary_bg">
                <Flex className="justify-between font-extrabold text-2xl text-primary_bg items-center">
                  <h4>Lighting Axe</h4>
                  <h5>0.36 eth</h5>
                </Flex>
                <Flex className="mb-6 mt-12 items-center">
                  <img src={avatarImg} className="w-9" />
                  <h6 className="text-xl font-medium">Loura chin</h6>
                </Flex>
              </Flex>
              <Button
                text={"Buy it now"}
                className="w-full block text-center rounded-2xl"
              />
            </div>
          </div>

          <div>
            <img src={nftImg3} className="object-cover" />
            <div className="max-w-[90%] mx-auto bg-white p-6 rounded-4xl -translate-y-16">
              <Flex className="flex-col e text-primary_bg">
                <Flex className="justify-between font-extrabold text-2xl text-primary_bg items-center">
                  <h4>Lighting Axe</h4>
                  <h5>0.36 eth</h5>
                </Flex>
                <Flex className="mb-6 mt-12 items-center">
                  <img src={avatarImg} className="w-9" />
                  <h6 className="text-xl font-medium">Loura chin</h6>
                </Flex>
              </Flex>
              <Button
                text={"Buy it now"}
                className="w-full block text-center rounded-2xl"
              />
            </div>
          </div>
        </SliderComponent>
      </Container>
    </section>
  );
};

export default NFT;