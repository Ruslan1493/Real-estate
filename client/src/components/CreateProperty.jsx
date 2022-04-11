import React, { useState } from 'react';
import style from './property.module.scss';
import { createProperty } from '../services/userServices';

const CreateProperty = () => {
    const [values, setValues] = useState({
        categories: [],
        title: '',
        description: '',
        town: '',
        price: 0,
        district: '',
        area: '',
        floor: '',
        buildingFloors: '',
        buildingType: '',
    });

    let onFormSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        createProperty(values)
            .then(res => {
                console.log(res);
            })
    }

    let onChange = (e) => {
        // e.preventDefault();
        console.log(e.target.name);
        if (e.target.name === 'sale' || e.target.name === 'rent') {
            console.log(e.target.checked)
            console.log(e.target.value)
            const isChecked = e.target.checked;
            const categoryName = e.target.name;
            // if (values.categories.includes(categoryName)) {
            let newCategories;
            if (!isChecked) {
                newCategories = values.categories.filter(c => c !== categoryName);
            } else {
                newCategories = [...values.categories, categoryName];
            }
            setValues({
                ...values,
                categories: newCategories
            })
            return
        }
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={style.formWrapper}>
            <form action='/create' method='POST' onSubmit={onFormSubmit}>
                <label>
                    <h3>Categories</h3>
                    <div className={style.divCheckboxWrapper}>
                        <p className={style.checkboxWrapper}>
                            <label className={style.checkboxLabel} htmlFor='sale'>Sale</label>
                            <input type='checkbox' name='sale' value={values.categories} onChange={onChange} />
                        </p>
                        <p className={style.checkboxWrapper}>
                            <label className={style.checkboxLabel} htmlFor='rent'>Rent</label>
                            <input type='checkbox' name='rent' value={values.categories} onChange={onChange} />
                        </p>
                    </div>
                </label>
                <label>
                    <p>Title</p>
                    <input type='text' name='title' value={values.title} onChange={onChange} />
                </label>
                <label>
                    <p>Description</p>
                    <textarea name='description' value={values.description} onChange={onChange}></textarea>
                </label>
                <label>
                    <p>Town</p>
                    <input type='text' name='town' value={values.town} onChange={onChange} />
                </label>
                <label>
                    <p>Price</p>
                    <input type='text' name='price' value={values.price} onChange={onChange} />
                </label>
                {
                    values.categories.includes('rent')
                        ?
                        <label>
                            <p>Rent Price</p>
                            <input type='text' name='rentPrice' value={values.rentPrice} onChange={onChange} />
                        </label>
                        :
                        null
                }
                <label>
                    <p>Disctrict</p>
                    <input type='text' name='district' value={values.district} onChange={onChange} />
                </label>
                <label>
                    <p>Area</p>
                    <input type='text' name='area' value={values.area} onChange={onChange} />
                </label>
                <label>
                    <p>Floor</p>
                    <input type='text' name='floor' value={values.floor} onChange={onChange} />
                </label>
                <label>
                    <p>Building Floors</p>
                    <input type='text' name='buildingFloors' value={values.buildingFloors} onChange={onChange} />
                </label>
                <label>
                    <p>Building Type</p>
                    <input type='text' name='buildingType' value={values.buildingType} onChange={onChange} />
                </label>

                <button>Submit</button>
            </form>
        </div>
    )
};

export default CreateProperty;