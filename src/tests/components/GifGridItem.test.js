import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas componente <GifGridItem />', () => {
    
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe de tener una imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');

        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
    });
    
    
    
});