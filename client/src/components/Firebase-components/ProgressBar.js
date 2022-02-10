import React from 'react';
import useStorage from '../../hooks/useStorage';

const ProgressBar = ({ file }) => {
    const { progress, url } = useStorage(file);
    return (
        <div>progress</div>
    )
};

export default ProgressBar;