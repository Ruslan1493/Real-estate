import React from 'react';
import useStorage from '../../hooks/useStorage';
import styles from './progress-bar.module.scss';

const ProgressBar = ({ file }) => {
    const { progress, url } = useStorage(file);
    console.log(progress);
    return (
        <div id={styles.ProgressBar}></div>
    )
};

export default ProgressBar;