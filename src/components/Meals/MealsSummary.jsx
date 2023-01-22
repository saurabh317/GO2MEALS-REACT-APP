import styles from './MealsSummary.module.css';
const MealsSummary =() =>{
    return(
        <section className={styles.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>Choose your favourite meal from ouur brand selection of the available Meals
            and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
            All out meals are cooked with high-quality ingredients,just-in-time and
             of course by experienced chefs! 
        </p>
        </section>
    )
}

export default MealsSummary;