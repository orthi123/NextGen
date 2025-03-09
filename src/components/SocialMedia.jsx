import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Flex from "./Flex";

let socialMediaLinks = [
  {
    icon: "facebook",
    link: "#",
    iconLogo:<FaInstagram/>
  },
  {
    icon: "insta",
    link: "#",
    iconLogo:< FaFacebook/>
  },
  {
    icon: "twitter",
    link: "#",
    iconLogo:<FaTwitter/>
  },
  {
    icon: "linkedin",
    link: "#",
    iconLogo:< FaLinkedin/>
  },
  {
    icon: "youtube",
    link: "#",
    iconLogo:<FaYoutube/>
  },
];

// const showIcon = (iconName) => {
//   switch (iconName) {
//     case "facebook":
//       return <FaFacebook />;
//     case "insta":
//       return <FaInstagram />;
//     case "twitter":
//       return <FaTwitter />;
//     case "linkedin":
//       return <FaLinkedin />;
//     case "youtube":
//       return <FaYoutube />;
//     default:
//       return null;
//   }
// };

const SocialMedia = () => {
  return (
    <Flex className="items-center gap-3">
      {socialMediaLinks.map(({ icon, link,iconLogo }) => (
        <Flex key={icon} className="w-12 h-12 bg-[#16192A] rounded-full border border-[#535488] justify-center items-center" >
          <a href={link}>{iconLogo}</a>
        </Flex>
      ))}
    </Flex>
  );
};

export default SocialMedia;
