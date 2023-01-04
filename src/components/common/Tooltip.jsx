import { Tooltip as Tip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'

const Tooltip = ({ value, children, className = '',  ...props }) => (
    <Tip title={value} duration={250} animateFill className={className}>
        <div className={`flex justify-center`} {...props}>
            {children}
        </div>
    </Tip>
)

export default Tooltip

