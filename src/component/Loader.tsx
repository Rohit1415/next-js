import React from 'react';
import styles from '../style/loader.module.scss';

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;
