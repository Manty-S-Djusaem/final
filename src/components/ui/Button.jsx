import lupa from '../assets/lupa.png'
import Buton from './Button.module.scss'

const Button = (props) => {

    return (
        <button className="btnquit">
            Выйти
           {/* {props.text && <img src={lupa}></img>} */}
        </button>
    );
};

export default Button