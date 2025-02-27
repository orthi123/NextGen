import Button from "../components/Button";
import Container from "../components/Container";
import Flex from "../components/Flex";
import bannerImg from "../assets/images/banner.png";

const Banner = () => {
  return (
    <section className="py-14">
      <Container>
        <Flex className="items-center">
          <div className="max-w-[785px]">
            <h1 className="font-black text-8xl text-white banner-heading loading-[121%] tracking-wider">
              Best NFTs Marketplace.
            </h1>
            <p className="mt-8 mb-16 text-second_text max-w-[720px] tracking-[-2%] leading-[183%]">
              Ultrices eget pretium sit euismod mi id. In commodo auctor eget
              congue sit. Risus, aliquam odio posuere ac in in nisl sed augue.
              Porta aenean egestas malesuada in pulvinar enim viverra.
            </p>
            <Flex className="gap-4">
              <Button text="Get started" />
              <Button text="Create NFTs" bgShow={false} />
            </Flex>
          </div>
          <Flex className="rounded-full max-w-[750px] max-h-[750px] overflow-hidden justify-center bg-[#8698DF] border-4 border-[#17152c] relative">
            <img src={bannerImg} alt="NFT Marketplace Banner" />
            <div className="absolute z-0 w-full h-full bg-[rgba(18,12,40,0.26)]"></div>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
