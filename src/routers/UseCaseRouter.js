import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Information from '../components/UseCase/Information/Information'
import ConfigureArduino from '../components/UseCase/Connections/ConfigureArduino'
import Readings from '../components/UseCase/Readings/Readings'
import HistoricData from '../components/UseCase/HistoricData/HistoricData'
import Settings from '../components/UseCase/Settings/Settings';


const UseCaseRouter = (props) => {
    console.log(props);
    let useCase = props.useCase;
    return (
            <Switch>
                <Route exact path={"/usecases/:id"} render={props => <Information useCaseData={useCase} {...props} />} />
                <Route path={"/usecases/:id/information"} render={props => <Information useCaseData={useCase} {...props} />} />
                <Route path={"/usecases/:id/configure-arduino"}  render={props => <ConfigureArduino useCaseData={useCase} {...props} />}/>
                <Route path={"/usecases/:id/readings"}  render={props => <Readings useCaseData={useCase} {...props} />}/>
                <Route path={"/usecases/:id/historicData"}  render={props => <HistoricData useCaseData={useCase} {...props} />}/>
                <Route path={"/usecases/:id/settings"}  render={props => <Settings useCaseData={useCase} {...props} />}/>
            </Switch>
)};

export default UseCaseRouter;
