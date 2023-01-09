import React, { useContext } from 'react';
import styles from './Search.module.scss';
import icon from '../../assets/img/search.svg';
import close from '../../assets/img/close.svg';
import { MyContext } from '../../App';
import debounce from 'lodash.debounce';

const Search = () => {
  const { setSearchString } = useContext(MyContext);
  const inputRef = React.useRef();
  const [localValue, setLocalValue] = React.useState(''); 

  const inputDebounce = React.useCallback(
    debounce((str) => {
      setSearchString(str);
    }, 1000),
    [],
  );

  const onClearInput = () => {
    setSearchString('');
    setLocalValue('');
    inputRef.current?.focus();
  };

  const onChangeInput = (e) => {
    setLocalValue(e.target.value);
    inputDebounce(e.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.icon} width="20" src={icon} alt="search" />
      <input
        ref={inputRef}
        className={styles.input}
        placeholder="Поиск пиццы..."
        onChange={onChangeInput}
        value={localValue}
      />
      {localValue && (
        <img onClick={onClearInput} className={styles.close} width="25" src={close} alt="search" />
      )}
    </div>
  );
};

export default Search;
