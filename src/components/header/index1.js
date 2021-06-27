
import React, { Component } from 'react';
import Styled from './styled-components';
import { Nav } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import styles from './mystyle.module.css';

class Header extends Component {
    render() {
        return (
            <Styled.Container>
                <Nav activeKey="/home">
                    <Nav.Item>
                        <Image src="holder.js/171x180" />
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/home" className={styles.dashboard} >Dashboard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" className={styles.nav}>Flows</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className={styles.nav}>Excution</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" className={styles.nav}>Users</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={styles.settingicon}>
                        <a href="url"><i class="glyphicon glyphicon-cog" ></i></a>
                    </Nav.Item>
                </Nav>
            </Styled.Container>

        );
    }
}

export default connect(
)(Header);
