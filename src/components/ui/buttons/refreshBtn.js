// Import required libraries and functions

// Import required styles
import Styles from './refreshBtn.module.css';

const RefreshBtn = () => {

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <button className={Styles.btn} onClick={handleRefresh}> Reset </button>
    )
}

export default RefreshBtn;