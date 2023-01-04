export const DatatableItem = ({ children, headers }) => {

    return (
        <tr
            className={`even:bg-lime-100 flex flex-wrap lg:table-row text-center`}>
            {children?.length != null ? (
                children.map((child, i) => (
                    <td key={i} className='p-2 block lg:table-cell'>
                        <div  className="font-bold text-xs text-gray-600 lg:hidden flex items-center gap-1">
                            {headers[i].label}
                        </div>
                        {child}
                    </td>
                ))
            ) : (
                <td className="p-4">{children}</td>
            )}
        </tr>
    )
}

