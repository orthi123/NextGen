import Container from "../components/Container"
import Flex from "../components/Flex"
import logo from "../assets/images/logo.png";
import SocialMedia from "../components/SocialMedia";
let footerData=[
  {
    heading:"Marketplace",
  links:[
    {name:"NFTs",link:"#"},
    {name:"Art",link:"#"},
    {name:"Collections",link:"#"},
    {name:"Visual World",link:"#"},
  ],
  },
{

  heading:"Info",
  links:[
    {
      name:"Activity",
      link:"#"
    },
    {
      name:"Activity",
      link:"#"
    },
    {
      name:"Starts",
      link:"#"
    },
    {
      name:"Rankings",
      link:"#"
    },
  ],
},
{
heading:"Company",
links:[
  {
    name:"About",
    link:"#"
  },
  {
    name:"Support",
    link:"#"
  },
  {
    name:"Features",
    link:"#"
  },
  {
    name:"Top Creators",
    link:"#"
  },
],
},


{
heading:"Resourses",
links:[
  {
    name:"Info",
    link:"#"
  },
  {
    name:"Affiliates",
    link:"#"
  },
  {
    name:"Associated",
    link:"#"
  },
  {
    name:"Blog",
    link:"#"
  },
],
},
];
const Footer = () => {
  return (
    <footer className="mt-[200px] py-10 list-none">
      <Container>
        <Flex className="justify-between items-start  gap-8">
          <div className="w-[400px]">
            <img src={logo} />
            <p className="text-lg">
              Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed
              augue. Posuere ac in in nisl sed augue.
            </p>
            <SocialMedia/>
          </div>
          <div>
          <Flex className>
            {
              footerData.map((item)=>(
                       <div key={item.heading} className="mr-15">
                        <h2 className="font-extrabold">
                          {item.heading}
                        </h2>
                        {
                          item.links.map((item2)=>(
                              <li key={item2.name}>{item2.name}</li>
                          
                          ))
                        }
                       </div>


              ))
            }
          </Flex>
          </div>
        </Flex>
      </Container>
    </footer>
  );
}

export default Footer