import React from 'react';
import Container from '../components/Container';
import Flex from '../components/Flex';
import logo from '../assets/images/logo.png';
let menu=[
  {
    name:"Home",
   link:"/",
  },
  {
    name:"Marketplace",
    link:"/marketplace",
  },
  {
    name:"Artist",
    link:"/artist",
  },
  { 
    name:"Community",
    link:"/community",

  }
]

const Navbar = () => {
  return (
    <nav>
      <Container>

        <Flex>
          <div>
     <img src={logo} alt="" />

        </div>
        <menu>
           <ul>
            {menu.map((item,index)=>(
                <li>{item.name}</li>
            
            ))}
    
        
           </ul>
        </menu>
        </Flex>
        <div>Navbar</div>
    
      </Container>
    </nav>
  );
};

export default Navbar;
