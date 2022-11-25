import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";

export const ContactBoxData = [
  {
    id: "1",
    name: "What`s app",
    value: "+371 26406100",
    icon: <AiOutlineWhatsApp className="wrapper-2-icon" />,
    href: "https://api.whatsapp.com/send?phone=37126406100",
  },
  {
    id: "2",
    name: "Facebook",
    value: "Raitis Vilums",
    icon: <RiMessengerLine className="wrapper-2-icon" />,
    href: "https://m.me/raitis.vilums.75",
  },
  {
    id: "3",
    name: "Email",
    value: "rvilums80@gmail.com",
    icon: <AiOutlineMail className="wrapper-2-icon" />,
    href: "mailto:rvilums80@gmail.com",
  },
];
