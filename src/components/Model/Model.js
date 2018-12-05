import React, {Component} from 'react';
import styles from './Model.module.scss'

class Model extends Component {
    render() {
        return (
            <main role="main" className={styles.Model}>
                {this.props.children}
            </main>
        )
    }
}

export default Model;
