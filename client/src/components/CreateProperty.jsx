import React from 'react';
import style from './property.module.scss';

const CreateProperty = () => {

    return (
        <form>
            <label>
                Title
                <input type='text' value='' />
            </label>
            <label>
                Town
                <input type='text' value='' />
            </label>
            <label>
                Price
                <input type='text' value='' />
            </label>
            <label>
                Disctrict
                <input type='text' value='' />
            </label>
            <label>
                Area
                <input type='text' value='' />
            </label>
            <label>
                Floor
                <input type='text' value='' />
            </label>
            <label>
                Building Floors
                <input type='text' value='' />
            </label>
        </form>
        //price
        //categories: 
        //area: 
        //floor: 
        //buildingFloors: { type: mongoose.SchemaTypes.String, required: true },
    )
};

export default CreateProperty;