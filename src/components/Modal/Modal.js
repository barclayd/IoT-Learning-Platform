import React, {Component} from 'react';
import styles from './Modal.module.scss'

class Modal extends Component {
    render() {
        return (
            <main role="main" className={styles.Model}>
                {this.props.children}
            </main>
        )
    }
}

export default Modal;
