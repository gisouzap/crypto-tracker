import NextIcon from './icons/next.svg';
import BackIcon from './icons/back.svg';

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
        <select
          onChange={e => onChangeResultsPerPage(e.target.value)}
          className={styles.pager_select}
        >
          <option
            defaultValue
            value={10}
            className={styles.pager_select_option}
          >
            10
          </option>
          <option className={styles.pager_select_option} value={50}>
            50
          </option>
          <option className={styles.pager_select_option} value={100}>
            100
          </option>
          <option className={styles.pager_select_option} value={150}>
            150
          </option>
          <option className={styles.pager_select_option} value={200}>
            200
          </option>
          <option className={styles.pager_select_option} value={250}>
            250
          </option>
        </select>
      </div>
    </div>
  );
}

export default Pager;
