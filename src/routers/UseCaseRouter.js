import React from 'react';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';
import Info from '../components/UseCase/Information/Information'
import Conn from '../components/UseCase/Connections/Connections'
import Read from '../components/UseCase/Readings/Readings'
import Hist from '../components/UseCase/HistoricData/HistoricData'


const UseCaseRouter = (props) => (

    <BrowserRouter>
            <Switch>
                <Route exact path={props.url + "/"} component={Info} />
                <Route path={props.url + "/information"} component={Info} />
                <Route path={props.url + "/connections"}  component={Conn}/>
                <Route path={props.url + "/readings"}  component={Read}/>
                <Route path={props.url + "/historicData"}  component={Hist}/>
            </Switch>

    </BrowserRouter>


);

export default UseCaseRouter;
