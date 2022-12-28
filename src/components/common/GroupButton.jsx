import { AiOutlinePlus} from 'react-icons/ai'
import {  FaLayerGroup } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { forwardRef } from 'react'

const GroupButton = forwardRef(
    (
        {
            color = 'primary',
            size = 'normal',
            to,
            type,
            children,
            className,
            onClick,
            disabled,
            ...rest
        },
        ref,
    ) => {
        const buttonStyles = (type) => {
            switch (type) {
                case 'status':
                    return ' h-8 bg-primary dark:bg-blue-500 hover:bg-primary-dark active:bg-primary-dark gap-x-2 text-white dark:hover:bg-blue-400 md:text-sm px-4 py-1 flex items-center justify-center gap-1 ring-offset-4  text-sm  text-center rounded-lg outline-none transition-all duration-200  font-light'
                case 'skills':
                    return ' h-8 bg-primary dark:bg-blue-500 hover:bg-primary-dark active:bg-primary-dark gap-x-2 text-white dark:hover:bg-blue-400 md:text-sm px-4 py-1 flex items-center justify-center gap-1 ring-offset-4  text-sm  text-center rounded-lg outline-none transition-all duration-200  font-light'
                default:
                    return ' h-8 bg-primary dark:bg-blue-500 hover:bg-primary-dark active:bg-primary-dark gap-x-2 text-white dark:hover:bg-blue-400 md:text-sm px-4 py-1 flex items-center justify-center gap-1 ring-offset-4  text-sm  text-center rounded-lg outline-none transition-all duration-200  font-light'
            }
        }
        if (to && !disabled)
            return (
                <Link ref={ref} {...rest} to={to} className={buttonStyles(type)}>
                    <></>
                    {type === 'status' ? <FaLayerGroup /> : <AiOutlinePlus />}
                    {children}
                </Link>
            )
        else
            return (
                <button
                    ref={ref}
                    {...rest}
                    onClick={onClick}
                    className={buttonStyles(type)}
                    disabled={disabled}>
                    {type === 'status' ? null : <FaLayerGroup />}
                    {children}
                </button>
            )
    },
)

export default GroupButton

