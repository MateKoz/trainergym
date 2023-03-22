
export const Datatable = ({ children, headers }) => {
    const width = headers.reduce((acc, { colSize }) => acc + colSize, 0)

    if (children?.length <= 0 || children?.length === 0) {
        return (
            <div className="bg-white p-4 rounded-2xl border-2 border-green-300 overflow-x-auto w-full text-center">
                No records to display
            </div>
        )
    }

    return (
        <div className="bg-white overflow-x-auto shadow-md w-full text-sm">
            <table className="bg-white max-w-full  border-collapse w-full">
                <thead className="hidden lg:table-header-group font-bold text-center border-b-2 border-lime-200 text-lime-600">
                <tr>
                    {headers.map(({ id, label, colSize }) => (
                        <th
                            className="px-5 py-5 bg-lime-200"
                            key={id}
                            style={{
                                width: `${Math.round((colSize / width) * 10000) / 100}%`,
                            }}>
                            <div className='font-bold flex items-center justify-center gap-1'>
                                {label}
                            </div>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    )
}
