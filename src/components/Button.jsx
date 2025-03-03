import { Link } from "react-router";

const Button = ({ text, link="/", className="", bgShow=true}) => {
  return (
    <Link
      href={link}
      className={`${bgShow ? "btnlinear" : "gradient_border"}
    py-4 px-12 text-xl text-second_text font-medium ${className}`}
    >
      {text}
    </Link>
  );
};

export default Button;