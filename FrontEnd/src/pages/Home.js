import React, {useState} from "react";
import {Col, Container, Row, ListGroup, ListGroupItem} from "react-bootstrap";
import ModalInfoGeneral from '../modals/InfoGeneral.js';
import ModalNumeroPar_Impar from '../modals/Numero_par_impar.js';
import ModalCubica from '../modals/Cubica.js';

function Home(props) {
    const [showCubica, setShowCubica] = useState(false);
    const [showInfoGeneral, setShowInfoGeneral] = useState(false);
    const [showNumeroPar, setShowNumeroPar] = useState(false);
    // Damihan

    // Damihan
    function handleInfoGeneral() {
        setShowInfoGeneral(showInfoGeneral ? false : true);
    }

    // Damihan
    function handleNumeroPar() {
        setShowNumeroPar(showNumeroPar ? false : true);
    }
    function handleCubica() {
        setShowCubica(showCubica ? false : true);
    }

    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col
                        lg={10}
                        md={10}
                        sm={12}
                        className="p-5 m-auto shadow-sm rounded-lg"
                    >
                        <ListGroup>
                            <ListGroupItem action onClick={() => handleInfoGeneral()}>
                                Información General
                            </ListGroupItem>
                            <ListGroupItem action onClick={() => handleNumeroPar()} >
                                Número Par o Impar
                            </ListGroupItem>

                            <ListGroupItem action onClick={() => handleCubica()} >
                                Potencia al cubo y Raíz cúbica
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <ModalInfoGeneral show={showInfoGeneral} setShow={setShowInfoGeneral}/>
                    <ModalNumeroPar_Impar show={showNumeroPar} setShow= {setShowNumeroPar}/>
                    <ModalCubica show={showCubica} setShow= {setShowCubica}/>
                </Row>
            </Container>
        </>
    );
}

export default Home;
