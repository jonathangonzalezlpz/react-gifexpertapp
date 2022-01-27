import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({defaultCategories = []}) => {

    //const categorias = ['OnePunch','Samurai X','Dragon Ball'];
    //const [categorias, setCategorias] = useState(['OnePunch']);
    const [categorias, setCategorias] = useState( defaultCategories );

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={ setCategorias }/>
            <hr/>

            { 
                categorias.map( c => <GifGrid key={ c } 
                                            categoria={ c } /> )
            }

        </>
    )
};

export default GifExpertApp; 