import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import styles from './progress-bar.module.scss';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [previewFile, setPreviewFile] = useState('');

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        const selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
        } else {
            setFile(null);
            setError('Please, select either png or jpeg file');
        }
    };

    const previewImage = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = reader.result;
            console.log(data)
            setPreviewFile(data);
        };
        reader.readAsDataURL(file);
        console.log(file)
    }

    const addImageHandler = (e) => {
        e.preventDefault();

        if (!file) {
            return;
        }

        previewImage(file);

    }


    return (
        <form className={styles.createForm} onSubmit={addImageHandler}>
            <p>Create property</p>
            <input type='file' onChange={changeHandler} />
            {error && <p>{error}</p>}
            {file && <p>{file.name}</p>}
            {file && <ProgressBar file={file} />}
            <button type='submit'>Add Image</button>
            {previewFile && <img src={previewFile} />}
        </form>
    )
};

export default UploadForm;