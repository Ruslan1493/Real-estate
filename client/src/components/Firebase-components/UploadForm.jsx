import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import styles from './progress-bar.module.scss';
import { useEffect } from 'react';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [previewFile, setPreviewFile] = useState('');

    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    useEffect(() => {
        if (!error && file) {
            previewImage(file);
        } else {
            setFile(null);
            setPreviewFile('');
        }
    }, [file, error]);

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
        // console.log(previewFile)
        if (!file) {
            setError('Please, select a file first');
            return;
        };

        fetch('http://localhost:4000/property/upload/image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: previewFile })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }




    return (
        <form className={styles.createForm} onSubmit={addImageHandler}>
            <p>Create property</p>
            <input type='file' onChange={changeHandler} />
            {error && <p>{error}</p>}
            {file && <p>{file.name}</p>}
            {(file && !error) && <ProgressBar file={file} />}
            <button type='submit'>Add Image</button>
            {previewFile && <img src={previewFile} />}
        </form>
    )
};

export default UploadForm;