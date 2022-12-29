export const DatatableItem = ({ children, headers }) => {

    return (
        <tr
            className={`even:bg-slate-100 flex flex-wrap lg:table-row`}>
            {children?.length != null ? (
                children.map((child, i) => (
                    <td className='p-2 first:rounded-l-lg last:rounded-r-lg block lg:table-cell'>
                        <div className="font-bold text-xs text-gray-600 lg:hidden flex items-center gap-1">
                            {headers[i].label}
                        </div>
                        {child}
                    </td>
                ))
            ) : (
                <td className="p-4 first:rounded-lg last:rounded-lg">{children}</td>
            )}
        </tr>
    )
}

