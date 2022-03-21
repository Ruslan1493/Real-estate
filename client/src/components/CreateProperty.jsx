import React, { useState } from 'react';
import style from './property.module.scss';

const CreateProperty = () => {
    const [values, setValues] = useState({
        categories: [],
        title: '',
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
        console.log(values)
    }

    let onChange = (e) => {
        // e.preventDefault();
        console.log(e.target.name);
        if (e.target.name === 'sale' || e.target.name === 'rent') {
            console.log(e.target.checked)
            console.log(e.target.value)
            const isChecked = e.target.checked;
            const categoryName = e.target.name;
            if (values.categories.includes(categoryName)) {
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
            } else if (!values.categories.includes(categoryName)) {
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
                return;
            }

            // setValues({
            //     ...values,
            //     categories: newCategories
            // })
            // return
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
                            <label className={style.checkboxLabel} for='sale'>Sale</label>
                            <input type='checkbox' name='sale' value={values.categories} onChange={onChange} />
                        </p>
                        <p className={style.checkboxWrapper}>
                            <label className={style.checkboxLabel} for='rent'>Rent</label>
                            <input type='checkbox' name='rent' value={values.categories} onChange={onChange} />
                        </p>
                    </div>
                </label>
                <label>
                    <p>Title</p>
                    <input type='text' name='title' value={values.title} onChange={onChange} />
                </label>
                <label>
                    <p>Town</p>
                    <input type='text' name='town' value={values.town} onChange={onChange} />
                </label>
                <label>
                    <p>Price</p>
                    <input type='text' name='price' value={values.price} onChange={onChange} />
                </label>
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