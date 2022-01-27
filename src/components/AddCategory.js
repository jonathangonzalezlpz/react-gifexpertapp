
import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategorias}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // previene el comportamiento por defecto de recarga de página
        //console.log('Submit hecho');

        //Validacion vacios
        if ( inputValue.trim().length > 2) {
            setCategorias(cats => [inputValue,...cats]);
            setinputValue('');
        }
    };

    return (<form onSubmit={ handleSubmit }>
                <p>{ inputValue }</p>
                <input 
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange }/>
            </form>);

};

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
