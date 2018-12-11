import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Content from '../components/Documentation/Content/Content';

const DocumentationRouter = (props) => {
    let content = props.content;
    return(
        <Switch>
            <Route exact path="/documentation" render={props => <Content content={content} {...props}/>} />
            <Route path="/documentation/:title" render={props => <Content content={content} {...props}/>} />
        </Switch>
    )
}

export default DocumentationRouter;