import Button from "../Button";

const TopCreatorCard = ({name,img}) => {
  return (

    <div className="min-w-92 bg-[#16192A]  pt-12 flex-col justify-center items-center text-center rounded-xl border border-[#2E3150]">
        <img src={img} className="w-36 h-36 object-cover mx-auto"/>
      <h2 className="font-extrabold text-[22px] text-center pb-10">{name}</h2>
      <Button text={"View Details"} className="rounded-xl"/>
    </div>

  );
};

export default TopCreatorCard;