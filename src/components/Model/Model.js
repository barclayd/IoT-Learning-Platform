import React, {Component} from 'react';
import styles from './Model.module.scss'
// import { Row, Col} from 'antd';

class Model extends Component {
    render() {
        return (
            <main className={styles.Model}>
                {this.props.children}
            </main>
        )
    }
}

export default Model;