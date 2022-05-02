import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import styles from './progress-bar.module.scss';
import { useEffect } from 'react';

const UploadForm = () => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [previewFile, setPreviewFile] = useState('');

    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    useEffect(() => {
        if (!error && selectedFile) {
            console.log('useEffect')
            previewImage(selectedFile);
        } else {
            setPreviewFile('');
        }
    }, [selectedFile]);

    const changeHandler = (e) => {
        console.log('Files: ')
        console.log(e.target.files)
        const selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            // setImages((oldArray => {
            //     console.log(oldArray)
            //     return [...oldArray, selected.name]
            // }));
            setSelectedFile(selected);
            console.log(images)
            setError('');
        } else {
            // setImages(null);
            setSelectedFile('');
            setError('Please, select either png or jpeg file');
        }
    };

    const previewImage = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = reader.result;
            console.log(data)
            setImages((oldArray => {
                return [...oldArray, data]
            }));
            setPreviewFile(data);
        };
        reader.readAsDataURL(file);
        console.log(file)
    }

    const createProperty = (e) => {
        e.preventDefault();
        // console.log(previewFile)
        if (images.length === 0) {
            setError('Please, select a file first');
            return;
        };

        console.log('Images: ', images )

        fetch('http://localhost:4000/property/upload/images', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ images })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err);
            });
    };

    const addImageHandler = (e) => {
        e.preventDefault();

    };



    return (
        <span>
            <form className={styles.createForm} onSubmit={createProperty}>
                <p>Create property</p>
                <input type='file' onChange={changeHandler} />
                {error && <p>{error}</p>}
                {(previewFile && !error) && <ProgressBar file={previewFile} />}
                <button type='button' onClick={addImageHandler}>Add Image</button>
                <button type='submit'>Create Property</button>
            </form>
            {images && <ul>{images.map(el => (<li><img src={el} /></li>))}</ul>}
            {previewFile && <img src={previewFile} />}
        </span>
    )
};

export default UploadForm;