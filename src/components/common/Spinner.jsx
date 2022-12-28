import { CgSpinner } from 'react-icons/cg'

const Spinner = () => {
    return (
        <div className="w-full h-full grid place-items-center py-10">
            <CgSpinner className="animate-spin text-primary dark:text-blue-400" size={48} />
        </div>
    )
}

export default Spinner
