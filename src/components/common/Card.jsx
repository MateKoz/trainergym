const Card = ({ children, className, ...rest }) => {
    return (
        <div
            {...rest}
            className={
                'bg-white m-5 text-black rounded p-4 shadow ' + className
            }>
            {children}
        </div>
    )
}

export default Card
