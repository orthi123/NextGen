import Button from "../Button";
import CreatorImg from "../../assets/images/creator1.png";

const TopCreatorCard = () => {
  return (

    <div className="min-w-92 bg-[#16192A]  pt-12 flex-col justify-center items-center text-center rounded-xl border-[#2E3150]">
        <img src={CreatorImg} className="w-36 h-36 object-cover mx-auto"/>
      <h2 className="font-extrabold text-[22px] text-center pb-10">Loura chin</h2>
      <Button text={"View Details"} className="rounded-xl"/>
    </div>

  );
};

export default TopCreatorCard;