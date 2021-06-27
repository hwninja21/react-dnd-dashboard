
import React, { Component } from 'react';
import Styled from './styled-components';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import styles from './mystylepreview.module.css';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import { Modal } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';


class Preview extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.toggleSide = this.toggleSide.bind(this);
        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    toggleSide() {
        alert();
        var content = document.getElementById("sidecontent");
        console.log(content);
    }

    handleShow() {
        this.setState({ show: true });
    }
    render() {
        return (
            <Styled.Container>
                <Row>
                    <Col>
                        <Form>
                            <Row>
                                <Col className={styles.preview} >
                                    <a href="url"><Image src="/icon/goback.png" style={{ borderRadius: "5px", width: "40px" }} /></a>
                                </Col>
                                <Col className={styles.previewinput}>
                                    <Form.Control style={{ height: "45px", marginTop: "-5px", fontSize: "20px" }} placeholder="  Flows     C9911" />
                                </Col>
                                <Col className={styles.previewedit}>
                                    <div className={styles.edit}>
                                        <a href="url"><Image src="/icon/add.png" style={{ borderRadius: "5px", width: "30px", height: "30px", marginTop: "-23px", marginLeft: "6px" }} /></a>
                                    </div>
                                </Col>
                                <Col className={styles.previewcopy}>
                                    <div className={styles.copy}>
                                        <a href="url"><Image src="/icon/edit.png" style={{ borderRadius: "5px", width: "30px", height: "30px", marginTop: "-15px", marginLeft: "6px" }} /></a>
                                    </div>
                                </Col>
                                <Col className={styles.previewdelete}>
                                    <div className={styles.edit}>
                                        <a href="url"><Image src="/icon/remove.png" style={{ borderRadius: "5px", width: "28px", height: "28px", marginTop: "-23px", marginLeft: "6px" }} /></a>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col>
                        <div>
                            <p style={{ color: "#ffc95e", fontSize: "20px" }}><Image src="/icon/warning.png" />Unable to preview, configure all action crrectly</p>
                        </div>

                    </Col>
                    <Col>
                        <Row>
                            <Col className={styles.previewbuttoncol}>
                                <div className={styles.preview}>
                                    <Button className={styles.previewbutton} variant="primary">Run Preview</Button>
                                </div>
                            </Col>
                            <Col className={styles.previewdropcol}>
                                <Dropdown >
                                    <Dropdown.Toggle variant="success" id="dropdown-Warning" className={styles.previewdrop}>
                                        10K Rows limit
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">1K Rows limit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">5K Rows limit</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col className={styles.previewset}>
                                <div className={styles.setting}>
                                    <a style={{ margin: "auto" }} onClick={this.handleShow}>
                                        <Image src="/icon/setting.png" style={{ width: "100%", height: "100%" }} rounded />
                                    </a>
                                </div>
                            </Col>
                            <Col className={styles.previewques}>
                                <div className={styles.help}>
                                    <a href="url" style={{ margin: "auto" }}><Image src="/icon/help.png" style={{ width: "100%", height: "100%" }} rounded /></a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Modal show={this.state.show}
                    onHide={this.handleClose}
                    centered
                    size="lg"
                    className={styles.modal}
                    aria-labelledby="contained-modal-title-vcenter"
                >
                    <Modal.Header closeButton>
                        <div style={{ margin: "auto", paddingLeft: "40px" }}>
                            <Nav fill variant="tabs" defaultActiveKey="/home" style={{ margin: "auto", fontSize: "18px" }}>
                                <Nav.Item>
                                    <Nav.Link href="/home">Schedule</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Url</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2">Notification</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="disabled">Desabled</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>

                    </Modal.Header>
                    <Modal.Body>
                        <div style={{ fontSize: "18px", fontStyle: "bold", padding: "30px 0px 10px 20px" }}>Trigger Frequency/Schedule</div>
                        <div style={{ fontSize: "15px", fontStyle: "bold", padding: "10px 0px 10px 20px" }}>
                            When would you like to start running?
                        </div>
                        <div style={{ fontSize: "15px", fontStyle: "bold", padding: "10px 0px 10px 20px" }}>
                            <Dropdown className={styles.scheduledropdown}>
                                <Dropdown.Toggle variant="light" id="dropdown-schedule">
                                    On a Schedule
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div style={{ padding: "10px 0px 10px 20px" }}>
                            <Row className="show-grid">
                                <Col xs={12} md={3}>
                                    <Dropdown className={styles.weekdropdown} style={{ display: "inline-block", marginTop: "-7px" }}>
                                        <Dropdown.Toggle variant="light" id="dropdown-week">
                                            On a Schedule
                                            </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                <Col xs={12} md={4}>
                                    <ButtonToolbar aria-label="Toolbar with button groups">
                                        <ButtonGroup className="mr-2" aria-label="First group">
                                            <Button variant="light">S</Button>
                                            <Button className={styles.dayselected}>M</Button>
                                            <Button variant="light">T</Button>
                                            <Button variant="light">W</Button>
                                            <Button variant="light">T</Button>
                                            <Button variant="light">F</Button>
                                            <Button variant="light">S</Button>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </Col>
                                <Col xs={12} md={2}>
                                    <Button variant="light">At</Button>
                                    <Button variant="light">05:28</Button>
                                </Col>
                                <Col xs={12} md={3}>
                                    <ButtonGroup className="mr-2" aria-label="First group">
                                        <Button variant="light">AM</Button>
                                        <Button className={styles.dayselected}>PM</Button>
                                    </ButtonGroup>
                                    <Button variant="light">EET</Button>
                                </Col>
                            </Row>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={this.handleClose} style={{ margin: "auto", padding: "8px 50px" }}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div className={styles.sidemenu}>
                    <Button onClick={this.toggleSide} className={styles.sidebutton}>
                        <Image src="/icon/checklist.png" style={{ width: "100%", height: "100%" }} rounded />
                    </Button>
                    <div className={styles.sidecontent} id="sidecontent">
                        <p><i class="fa fa-check" style={{ fontSize: "25px", color: "#6fb2ff", paddingRight: "10px" }}></i>Drag input DataSet action</p>
                        <p><i class="fa fa-check" style={{ fontSize: "25px", color: "#6fb2ff", paddingRight: "10px" }}></i>Drag any action</p>
                        <p><i class="fa fa-minus" style={{ fontSize: "25px", color: "#dadada", paddingRight: "10px" }}></i>Draw Connection lines between actions</p>
                        <p><i class="fa fa-minus" style={{ fontSize: "25px", color: "#dadada", paddingRight: "10px" }}></i>Configure the action</p>
                        <p><i class="fa fa-minus" style={{ fontSize: "25px", color: "#dadada", paddingRight: "10px" }}></i>Drag output DataSet action</p>
                        <p><i class="fa fa-minus" style={{ fontSize: "25px", color: "#dadada", paddingRight: "10px" }}></i>Name and save your DataFlow</p>
                    </div>
                </div>
                <div className={styles.zoom}>
                    <div className={styles.zoomitem}>
                        <Image src="/icon/plus.png" style={{ width: "100%", height: "100%" }} rounded />
                    </div>
                    <div className={styles.zoomitem}>
                        <Image src="/icon/minus.png" style={{ width: "100%", height: "100%" }} rounded />
                    </div>
                </div>
            </Styled.Container >

        );
    }
}

export default connect(
)(Preview);