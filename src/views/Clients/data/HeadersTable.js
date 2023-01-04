import {FiUser} from "react-icons/fi";
import { GiPodiumWinner} from "react-icons/gi";
import { BsHourglassBottom, BsHourglassTop, BsPersonBoundingBox} from "react-icons/bs";
import {MdFoodBank} from "react-icons/md";
import {FaPills} from "react-icons/fa";
import {AiOutlineFileText} from "react-icons/ai";

export const headers = [
    {
        id: '1',
        label: (
            <>
                <FiUser size={18} className="mr-1 text-lime-600"/>
                Name
            </>
        ),
        colSize: 1,

    },
    {
        id: '2',
        label: (
            <>
                <BsPersonBoundingBox size={18} className="mr-1 text-lime-600"/>
                Surname
            </>
        ),
        colSize: 1,

    },
    {
        id: '3',
        label: (
            <>
                <BsHourglassBottom size={18} className="mr-1 text-lime-600"/>
                Age
            </>
        ),
        colSize: 1,

    },
    {
        id: '4',
        label: (
            <>
                <BsHourglassTop size={18} className="mr-1 text-lime-600"/>
                Start in
            </>
        ),
        colSize: 1,

    },
    {
        id: '5',
        label: (
            <>
                <GiPodiumWinner size={18} className="mr-1 text-lime-600"/>
                Target
            </>
        ),
        colSize: 1,

    },
    {
        id: '6',
        label: (
            <>
                <MdFoodBank size={18} className="mr-1 text-lime-600"/>
                Diet
            </>
        ),
        colSize: 1,
        mobileHidden: false,
        mobileGrow: true,
    },
    {
        id: '7',
        label: (
            <>
                <FaPills size={18} className="mr-1 text-lime-600"/>
                Supplementation
            </>
        ),
        colSize: 1,
    },
    {
        id: '8',
        label: (
            <>
                <AiOutlineFileText size={18} className="mr-1 text-lime-600"/>
                Description
            </>
        ),
        colSize: 1,
    },
    {
        id: '9',
        label: (
            <>
            </>
        ),
        colSize: 1,

    },
]
