const Card = ({ children, className, ...rest }) => {
    return (
        <div
            {...rest}
            className={
                'bg-white mt-3 text-black p-4 shadow  ' + className
            }>
            {children}
        </div>
    )
}

export default Card
