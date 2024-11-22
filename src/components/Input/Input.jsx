import ClearIcon from '../assets/close.png';
import {Icon} from '../Icon';
import './styles.css';



const Input = ({value, onChange, clear, placeholder}) => {

    const handleChange = (event) => {
        onChange(event.target.value)
    }

    return (
    <div className='input-wrapper'>
        <input className='form-input' value={value} onChange={handleChange} placeholder={placeholder}/>
        <div className='input-clear-icon' onClick={clear}>
            <Icon src={ClearIcon} />
        </div>
    </div>
)
}

export default Input;