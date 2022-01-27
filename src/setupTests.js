import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer( createSerializer({mode: 'deep'}));
// Como usamos Enzyme ya no utilizamos la por defecto
//import '@testing-library/jest-dom/extend-expect';