import styles from './index.module.css';

const SearchBar = ({ ...rest }) => {
  return (
    <div className={styles.coin_search}>
      <input type="text" className={styles.coin_input} {...rest} />
    </div>
  );
};

export default SearchBar;
