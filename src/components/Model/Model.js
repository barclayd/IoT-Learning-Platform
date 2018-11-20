import React, {Component} from 'react';
import styles from './Model.module.css'

class Model extends Component {
    render() {
        return (
            <div className={styles.Model}>
                {this.props.children}
            </div>
        )
    }
}

export default Model;