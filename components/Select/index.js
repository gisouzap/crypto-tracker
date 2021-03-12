import styles from './index.module.css';

function Select({ options, defaultValue, onChange }) {
  return (
    <select onChange={e => onChange(e.target.value)} className={styles.select}>
      <option
        defaultValue
        value={defaultValue}
        className={styles.select_option}
      >
        {typeof defaultValue === 'string'
          ? defaultValue.toUpperCase()
          : defaultValue}
      </option>
      {options.map(({ value, label }) => (
        <option className={styles.select_option} value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default Select;
