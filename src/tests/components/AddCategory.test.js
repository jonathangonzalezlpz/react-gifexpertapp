import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en el componente <AddCategory />', () => {
    const setCategorias = jest.fn();
    let wrapper = shallow(<AddCategory setCategorias={setCategorias}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategorias={setCategorias}/>);

    });

    test('debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar el input de texto', () => {
        const input = wrapper.find('input');

        const value = 'Hola Mundo';
        input.simulate('change', { target: {value: value}});

        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(value);
        
    });

    test('NO debe de postear la informacion onSubmit', () => {
        
        wrapper.find('form').simulate('submit',{ preventDefault(){}});

        expect(setCategorias).not.toHaveBeenCalled();

    });
    
    test('debe de llamar el setCategorias y enviar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo!';

        input.simulate('change',{target:{value}});
        wrapper.find('form').simulate('submit',{preventDefault(){}});

        expect(setCategorias).toHaveBeenCalled();
        expect(setCategorias).toHaveBeenCalledWith( expect.any(Function));
        
        expect(input.text()).toBe('');
    });
    
    
});
