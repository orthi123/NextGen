import Flex from '../Flex'
import TopCreatorCard from './TopCreatorCard'
import creator_1 from "../../assets/images/creator1.png"
import creator_2 from "../../assets/images/creator2.png"
import creator_3 from "../../assets/images/creator2.png"
import creator_4 from "../../assets/images/creator2.png"
const TopCreatorContainer = () => {
  return (
    <Flex className="mt-16 mb-16 gap-5">
      <TopCreatorCard img={creator_1} name={"ORTHI"}/>
      <TopCreatorCard img={creator_2} name={"Orthi"}/>
      <TopCreatorCard img={creator_3} name={"Orthi"}/>
      <TopCreatorCard img={creator_4} name={"Orthi"}/>
     
    </Flex>
  );
}

export default TopCreatorContainer