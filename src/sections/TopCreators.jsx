import Container from "../components/Container"
import Title from "../components/Title"
import Button from "../components/Button";
import Flex from "../components/Flex";
import TopCreatorContainer from "../components/top creator/TopCreatorContainer";
const TopCreators = () => {
  return (
    <section className="mt-8 relative z-50">
      <Container>
        <Flex className="flex-col">
          <Title title={"Top Crators"}/>
          <p className="mx-auto text-second_text font-primary_font text-xl max-w-[678px] mt-8 mb-8 text-center">
            In commodo auctor eget congue sit. Ultrices eget pretium sit euismod
            mi id. Risus, aliquam odio posuere ac in in nisl sed augue.{" "}
          </p>
          <Button text={"View all creators"} className="self-center inline-block"/>
        </Flex>
        <TopCreatorContainer/>
      </Container>
    </section>
  );
}

export default TopCreators