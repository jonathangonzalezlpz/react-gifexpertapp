import React from 'react';

import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import {GifGrid} from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
// MOCK
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid />', () => {
    test('debe de mostrar el componente correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid categoria='One Punch'/>);

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Cualquier cosa',
                url: 'https://localhost/cualquier/cosa.jpg'
            },
            {
                id: 'BCD',
                title: 'Cualquier cosa',
                url: 'https://localhost/cualquier/cosa.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid categoria='One Punch'/>);

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists()).toBe(false);
        expect( wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
    

});
