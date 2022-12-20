import {BsFillPersonFill, BsTable} from "react-icons/bs";
import {MdHome, MdOutlineAddAPhoto} from "react-icons/md";
import {TbPills} from "react-icons/tb";
import {GiGymBag, GiReceiveMoney, GiWeightLiftingUp} from "react-icons/gi";
import {BiMessageDetail} from "react-icons/bi";

export const SidebarData = [
    {
        titles: 'Dashboard',
        path: '/dashboard',
        icon: <MdHome/>,
    },
    {
        titles: 'Clients',
        path: '/clients',
        icon: <BsFillPersonFill/>,
    },
    {
        titles: 'Table',
        path:'/table',
        icon: <BsTable/>
    },
    {
        titles: "Supplementation",
        path: '/supplementation',
        icon: <TbPills/>
    },
    {
        titles: "Trainings",
        path: '/trainings',
        icon: <GiWeightLiftingUp/>
    },
    {
        titles: "Finance",
        path: '/finance',
        icon: <GiReceiveMoney/>
    },
    {
        titles: "Gallery",
        path: '/gallery',
        icon: <MdOutlineAddAPhoto/>
    },
    {
        titles: "Messages",
        path: '/messages',
        icon: <BiMessageDetail/>
    },
    {
        titles: "Equipment",
        path: '/equipment',
        icon: <GiGymBag/>
    },

]