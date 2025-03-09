import Container from "../components/Container";
import Flex from "../components/Flex";
import subscribeImg from "../assets/images/subscribe.png";
import Button from "../components/Button";
import bgImage from "../assets/images/bg3.png";

const NewsLetter = () => {
  return (
    <section className="mt-40 mb-96 relative">
            <img src={bgImage} alt="" className="absolute -bottom-[200px] leftt-0"/>
      <Container>
        <Flex className="justify-between items-center">
          <div className="z-50">
            <img src={subscribeImg} alt="" />
          </div>
          <div className="max-w-[680px]">
            <h2 className="font-black text-[56px]">
              Subscribe And get Latest news update about NFTs.
            </h2>
            <p className="text-lg">
              In commodo auctor eget congue sit. Ultrices eget pretium sit
              euismod mi id. Risus, aliquam odio posuere ac in in nisl sed
              augue. Porta aenean egestas malesuada in pulvinar enim viverra.
            </p>
            <form className="relative">
              <input type="email" placeholder="Write your email here" className="w-full bg-[#16192A] py-7 pl-10 outline-none border border-[#2E3150] rounded-lg mt-15 "/>
             <Button text={"Subscribe"} className="absolute right-2 top-[70%] -translate-y-1/2"/>
            </form>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default NewsLetter;
