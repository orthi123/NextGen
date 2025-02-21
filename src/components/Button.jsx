const Button = ({ text, link="/", className, bgShow=true}) => {
  return (
    <a 
    href={link} className={`${bgShow? "btnLinear":"gradient_border"}
    py-4 px-12  text-xl text-second_text font-medium ${className}`}>
      {text}
    </a>
  );
};

export default Button;