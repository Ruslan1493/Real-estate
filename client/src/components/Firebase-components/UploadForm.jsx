import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        const selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please, select either png or jpeg file');
        }
    };


    return (
        <form>
            <input type='file' onChange={changeHandler} />
            {error && <p>{error}</p>}
            {file && <p>{file.name}</p>}
            {file && <ProgressBar file={file} />}
        </form>
    )
};

export default UploadForm;