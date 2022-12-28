import {Link} from 'react-router-dom'
import {forwardRef} from 'react'

const Button = forwardRef(
    (
        {color = 'primary', size = 'small', to, children, className, onClick, disabled, ...rest},
        ref,
    ) => {
        const buttonStyles = `${
            color === 'primary'
                ? `bg-emerald-400 hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-green-600 text-white`
                : ''
        }
    ${size === 'normal' ? `md:text-base px-8 py-3` : size === 'small' ? `md:text-sm px-6 py-2 m-2` : ``}
     flex items-center justify-center gap-4 text-sm font-semibold text-center rounded-xl outline-none transition-all duration-150 ${className} 
     ${
            disabled
                ? `text-gray-200 bg-gray-400 hover:bg-gray-400 hover:text-gray-200 active:bg-gray-400 active:text-gray-200 cursor-default`
                : ''
        }`

        if (to && !disabled)
            return (
                <Link ref={ref} {...rest} to={to} className={buttonStyles}>
                    {children}
                </Link>
            )
        else
            return (
                <button ref={ref} {...rest} onClick={onClick} className={buttonStyles} disabled={disabled}>
                    {children}
                </button>
            )
    },
)

export default Button

