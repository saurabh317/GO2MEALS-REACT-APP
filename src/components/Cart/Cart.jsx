import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = (props) => {
    const cartItems = <ul>{[
        {
            id: 'cl',
            name: 'sushi',
            amount: 2,
            price: 12.99
        }
    ].map((item) => <li>{item.name}</li>)}
    </ul>

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>45.90</span>
            </div>
            <div className={styles.actions}>
                <button className={styles[ 'button--alt' ]} onClick={props.onClose}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )

}
export default Cart;