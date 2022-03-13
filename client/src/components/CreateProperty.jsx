import React, { useState } from 'react';
import style from './property.module.scss';

const CreateProperty = () => {
    const values = useState({
        title: '',
        town: '',
        price: 0,
        district: '',
        area: '',

    });

    let onFormSubmit = (e) => {
        e.preventDefault();
        console.log()
    }

    return (
        <div className={style.formWrapper}>
            <form onSubmit={onFormSubmit}>
                <label>
                    <p>Title</p>
                    <input type='text' value='' />
                </label>
                <label>
                    <p>Town</p>
                    <input type='text' value='' />
                </label>
                <label>
                    <p>Price</p>
                    <input type='text' value='' />
                </label>
                <label>
                    <p>Disctrict</p>
                    <input type='text' value='' />
                </label>
                <label>
                    <p>Area</p>
                    <input type='text' value='' />
                </label>
                <label>
                    <p>Floor</p>
                    <input type='text' value='' />
                </label>
                <label>
                    <p>Building Floors</p>
                    <input type='text' value='' />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default CreateProperty;