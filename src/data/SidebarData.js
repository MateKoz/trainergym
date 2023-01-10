import {BsFillPersonFill} from "react-icons/bs";
import {MdHome, MdOutlineAddAPhoto} from "react-icons/md";
import {TbPills} from "react-icons/tb";
import {GiGymBag, GiMeal, GiReceiveMoney, GiWeightLiftingUp} from "react-icons/gi";
import {BiMessageDetail} from "react-icons/bi";

export const SidebarData = [
    {
        titles: 'Strona Główna',
        path: '/',
        icon: <MdHome/>,
    },
    {
        titles: 'Podopieczni',
        path: '/clients',
        icon: <BsFillPersonFill/>,
    },
    {
        titles: "Dieta",
        path: '/diet',
        icon: <GiMeal/>
    },
    {
        titles: "Suplementacja",
        path: '/supplementation',
        icon: <TbPills/>
    },
    {
        titles: "Treningi",
        path: '/trainings',
        icon: <GiWeightLiftingUp/>
    },
    {
        titles: "Finanse",
        path: '/finance',
        icon: <GiReceiveMoney/>
    },
    {
        titles: "Galeria",
        path: '/gallery',
        icon: <MdOutlineAddAPhoto/>
    },
    {
        titles: "Wiadomości",
        path: '/messages',
        icon: <BiMessageDetail/>
    },
    {
        titles: "Sprzęt",
        path: '/equipment',
        icon: <GiGymBag/>
    },

]