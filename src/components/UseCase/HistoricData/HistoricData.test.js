import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HistoricTemperatures from "../../../containers/HistoricData/HistoricTemperatures";
import HistoricData from "../HistoricData/HistoricData";
import Charts from '../../../containers/Charts/HistoricCharts';

configure({adapter: new Adapter()});

describe('<HistoricTemperatures />', () => {
    let wrapper;
    beforeEach(() => {
        // wrapper.setProps({isAuthenticated: true});
        wrapper = shallow(<HistoricData store />);
    });
    it('should render 1 <HistoricTemperatures /> item', () => {
        expect(wrapper.find(HistoricTemperatures)).toHaveLength(1);
    });
});

describe('<Charts />', () => {
    let wrapper;
    beforeEach(() => {
        // wrapper.setProps({isAuthenticated: true});
        wrapper = shallow(<HistoricData store />);
    });
    it('should render 1 <Charts /> item', () => {
        expect(wrapper.find(Charts)).toHaveLength(1);
    });
});
