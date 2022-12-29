import {FiUser} from "react-icons/fi";
import {GiBrain, GiMuscleUp,} from "react-icons/gi";
import {FaUserTie,} from "react-icons/fa";
import {BsFillPersonFill, BsBriefcase, BsHourglassBottom} from "react-icons/bs";

export  const headers = [
    {
        id: '1',
        label: (
            <>
                <FiUser className="mr-1"/>
                Name
            </>
        ),
        colSize: 1,

    },
    {
        id: '2',
        label: (
            <>
                <BsBriefcase className="mr-1"/>
                Surname
            </>
        ),
        colSize: 1,

    },
    {
        id: '3',
        label: (
            <>
                <BsHourglassBottom className="mr-1"/>
                Age
            </>
        ),
        colSize: 1,

    },
    {
        id: '4',
        label: (
            <>
                <GiBrain className="mr-1"/>
                Start in
            </>
        ),
        colSize: 1,

    },
    {
        id: '5',
        label: (
            <>
                <GiMuscleUp className="mr-1"/>
                Target
            </>
        ),
        colSize: 1,

    },
    {
        id: '6',
        label: (
            <>
                <FaUserTie className="mr-1"/>
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
                <BsFillPersonFill className="mr-1"/>
                Supplementation
            </>
        ),
        colSize: 1,

    },
]
