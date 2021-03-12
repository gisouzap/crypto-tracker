import Select from '../Select';
import styles from './index.module.css';

const SearchBar = ({ onChange, currencies }) => {
  return (
    <>
      <div className={styles.coin_search}>
        <input
          type="text"
          className={styles.coin_input}
          onChange={onChange}
          placeholder="Search"
        />
      </div>
    </>
  );
};

export default SearchBar;
