import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Title from '../components/Title'
import BlogOne from "../assets/images/blog1.png";
import BlogTwo from "../assets/images/blog2.png";
import BlogThree from "../assets/images/blog3.png";
import BlogFour from "../assets/images/blog4.png";
import { Link } from 'react-router';
const Blog = () => {
  return (
    <Container>
      <section className='mt-15 mb-15'>
        <Flex className="justify-between items-center mb-15">
          <Title title={"Our Latest Blog"} />
          <Button text={"Read our blogs"} />
        </Flex>
        <Flex className="gap-4">
          <div className="border border-[#2E3150] bg-[#16192A]">
            <img src={BlogOne} alt="" />
            <Link className="text-[#BC61F3] ml-9">Arts</Link>
            <h1 className="max-w-[330px] font-extrabold text-xl items-center ml-9">
              Best NFTs arts collections from best artists{" "}
            </h1>
          </div>
          <div className="border border-[#2E3150] bg-[#16192A]">
            <img src={BlogTwo} alt="" />
            <Link className="text-[#BC61F3] ml-9">Design</Link>
            <h1 className="max-w-[330px] font-extrabold text-xl items-center ml-9">
              Best NFTs arts collections from best artists{" "}
            </h1>
          </div>
          <div className="border border-[#2E3150] bg-[#16192A]">
            <img src={BlogThree} alt="" />
            <Link className="text-[#BC61F3] ml-9">NFT's</Link>
            <h1 className="max-w-[330px] font-extrabold text-xl items-center ml-9">
              Best NFTs arts collections from best artists{" "}
            </h1>
          </div>
          <div className="border border-[#2E3150] bg-[#16192A]">
            <img src={BlogFour} alt="" />
            <Link className="text-[#BC61F3] ml-9">Arts</Link>
            <h1 className="max-w-[330px] font-extrabold text-xl items-center ml-9">
              Best NFTs arts collections from best artists{" "}
            </h1>
          </div>
        </Flex>
      </section>
    </Container>
  );
}

export default Blog