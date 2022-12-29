import { Tooltip as Tippy } from 'react-tippy'
import 'react-tippy/dist/tippy.css'

const Tooltip = ({ value, children, className = '',  ...props }) => (
    <Tippy title={value} duration={250} animateFill className={className}>
        <div className={`flex`} {...props}>
            {children}
        </div>
    </Tippy>
)

export default Tooltip

