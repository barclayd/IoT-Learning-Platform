import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { Card } from 'antd';


import ReactRouterEnzymeContext from 'react-router-enzyme-context';


import UseCaseCard from './UseCaseCard';
// import SensorLive from '../../components/LiveSensor/LiveSensor';


configure({adapter: new Adapter()});

const { Meta } = Card;
const mockedUseCase = {
    "access" : {
      "community" : false,
      "listedUsers" : [ "kwLX0IevWZMyQmhESLU4CMGj2gO2", "l5AExuLCwlOwevsTCBI8f27q3Vt1", "qB0dbGthCDZwRhcNVRdAnslEXES2", "WcgsnhsRsiSxRykCmrnE2Vv4Pwe2", "MYPw0PQJAzb9XhnWlpMIY837yQ43", "tddO4URF3Qh6mxJoBTIPhkyR0Qb2" ],
      "student" : true,
      "trainer" : true
    },
    "arduino" : "tmp36.jpg",
    "arduinoDesc" : "The LM35 series are precision integrated-circuit temperature devices with an output voltage linearly-proportional to the Centigrade temperature. The LM35 device has an advantage over linear temperature sensors calibrated in Kelvin, as the user is not required to subtract a large constant voltage from the output to obtain convenient Centigrade scaling. The LM35 device does not require any external calibration or trimming to provide typical accuracies of ±¼°C at room temperature and ±¾°C over a full −55°C to 150°C temperature range.",
    "arduinoName" : "LM35",
    "email" : {
      "body" : "Fridge door has been left open 🌋🖍",
      "senders" : [ [ "t@t.com" ] ],
      "subject" : "ALERT ⚠️✂️ FRIDGE DOOR IS OPEN 🚨😩⚠️🙄"
    },
    "id" : "0",
    "image" : "nhsfridge.jpg",
    "imageDesc" : "A fridge image",
    "key" : "nhsfridgetemp",
    "longDesc" : "If you leave the fridge door open, heat is recycled from the room into the refrigerator, then back into the room. A net room temperature increase would result from the heat of the motor that would be constantly running to move energy around in a circle. This makes precious, double-blind research drugs at great risk of becoming spoilt and along with other medical equipment, all of which are vitally important for application to patients within hospitals whose lives depend on the application of working drugs and medicines.",
    "messages" : [ {
      "authorName" : "Peter Trott",
      "date" : "5th Dec 2018 | 17:04 PM",
      "message" : "Please update sensor values and components",
      "profileImage" : "beach.jpg",
      "rating" : 2.5,
      "title" : "Needs improvement"
    }, {
      "authorName" : "Peter Trott",
      "date" : "9th Dec 2018 | 18:04 PM",
      "message" : "Very good work on this Use Case - I am very impressed",
      "profileImage" : "nhsfridge.jpg",
      "rating" : 4,
      "title" : "Top Work"
    } ],
    "name" : "NHS Fridges 💉",
    "sensorsData" : [ {
      "maxValue" : 10,
      "minValue" : 7,
      "sensorComponent" : "LM35",
      "sensorName" : "Temperature Sensor"
    } ],
    "shortDesc" : "Check the temperature of fridges in University Hospital, Cardiff"
  }

  describe('<UseCard />', () => {
    let wrapper
    // before if test "it()" do the below
    beforeEach(() => {
        wrapper = shallow(<UseCaseCard isLoading={false} {...mockedUseCase} />);
    })

    it('should renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('component should render the correct useCaseCard values', () => {
        const card = wrapper.find('.card');
        expect(card.find(Meta).prop('title')).toEqual(mockedUseCase.name);
        expect(card.find(Meta).prop('description')).toEqual(mockedUseCase.shortDesc);
    })
})