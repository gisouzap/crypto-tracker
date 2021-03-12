import NextIcon from './icons/next.svg';
import BackIcon from './icons/back.svg';
import Select from '../Select';

import options from './pagerOptions';
import styles from './index.module.css';

function Pager({ onChange, currentPage, onChangeResultsPerPage, currency }) {
  return (
    <div className={styles.pager_container}>
      <div>
        <p>
          currency:
          <span className={styles.pager_currency}>
            {' '}
            {currency.toUpperCase()}
          </span>
        </p>
      </div>

      <div>
        <button
          onClick={() => onChange(currentPage - 1)}
          className={styles.button_back}
          disabled={currentPage <= 1}
        >
          <BackIcon />
        </button>

        <button
          onClick={() => onChange(currentPage + 1)}
          className={styles.button_next}
        >
          <NextIcon />
        </button>
      </div>

      <div className={styles.select_container}>
        results per page:
        <Select
          options={options}
          defaultValue={10}
          onChange={onChangeResultsPerPage}
        />
      </div>
    </div>
  );
}

export default Pager;
