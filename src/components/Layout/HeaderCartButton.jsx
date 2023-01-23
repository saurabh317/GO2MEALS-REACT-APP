import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) =>{
    const cartCtx = useContext(CartContext);

    const numberOfcartItems  = cartCtx.items.reduce((total,currentValue) =>{
        return total + currentValue.amount;
    },0);
    
    return(
        <>
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={styles.badge}>{numberOfcartItems}</span>
        </button>
            
        </>
    )

   
}

export default HeaderCartButton;