import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Info from '../components/UseCase/Information/Information'
import Conn from '../components/UseCase/Connections/Connections'
import Read from '../components/UseCase/Readings/Readings'
import Hist from '../components/UseCase/HistoricData/HistoricData'


const UseCaseRouter = (props) => {
    let useCase = props.useCase;
    console.log(useCase);
    return (

            <Switch>
                <Route exact path={"/usecases/:id"} render={props => <Info useCaseData={useCase} {...props} />} />
                <Route path={"/usecases/:id/information"} render={props => <Info useCaseData={useCase} {...props} />} />
                <Route path={"/usecases/:id/connections"}  render={props => <Conn useCaseData={useCase} {...props} />}/>
                <Route path={"/usecases/:id/readings"}  render={props => <Read {...props} />}/>
                <Route path={"/usecases/:id/historicData"}  render={props => <Hist {...props} />}/>
            </Switch>

)};

export default UseCaseRouter;
