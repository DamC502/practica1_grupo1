import React, { useState } from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import ModalCubica from '../modals/Cubica.js';
import ModalFibonacci from '../modals/Fibonacci.js';
import ModalInfoGeneral from '../modals/InfoGeneral.js';
import ModalStr from '../modals/Invertir.js';
import ModalNumeroPar_Impar from '../modals/Numero_par_impar.js';
import ModalAritmetica from '../modals/Aritmetica.js';
import ModalAritmetica2  from '../modals/Aritmetica2.js';

function Home(props) {
    const [showCubica, setShowCubica] = useState(false);
    const [showInfoGeneral, setShowInfoGeneral] = useState(false);
    const [showNumeroPar, setShowNumeroPar] = useState(false);
    const [showFibonacci, setShowFibonacci] = useState(false);
    const [showStr, setShowStr] = useState(false);
    const [showAritmetica, setShowAritmetica] = useState(false);
    const [showAritmetica2, setShowAritmetica2] = useState(false);

    function handleInfoGeneral() {
        setShowInfoGeneral(showInfoGeneral ? false : true);
    }

    function handleNumeroPar() {
        setShowNumeroPar(showNumeroPar ? false : true);
    }
    function handleCubica() {
        setShowCubica(showCubica ? false : true);
    }
    function handleFibonacci() {
        setShowFibonacci(showFibonacci ? false : true);
    }
    function handleStr() {
        setShowStr(showStr ? false : true);
    }

    function handlearitmetica() {
        setShowAritmetica(showAritmetica ? false : true);
    }

    function handlearitmetica2() {
        setShowAritmetica2(showAritmetica2 ? false : true);
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
                            <ListGroupItem action onClick={() => handleFibonacci()} >
                                Fibonacci de un número 
                            </ListGroupItem>
                            <ListGroupItem  action onClick={() => handleStr()} >
                                Invertir Palabra
                            </ListGroupItem>

                            <ListGroupItem action onClick={() => handlearitmetica()} >
                                Multiplicación y División
                            </ListGroupItem>

                            <ListGroupItem action onClick={() => handlearitmetica2()} >
                                Suma y Resta
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <ModalInfoGeneral show={showInfoGeneral} setShow={setShowInfoGeneral}/>
                    <ModalNumeroPar_Impar show={showNumeroPar} setShow= {setShowNumeroPar}/>
                    <ModalCubica show={showCubica} setShow= {setShowCubica}/>
                    <ModalFibonacci show={showFibonacci} setShow= {setShowFibonacci}/>
                    <ModalStr show={showStr} setShow= {setShowStr}/>
                    <ModalAritmetica show={showAritmetica} setShow= {setShowAritmetica}/>
                    <ModalAritmetica2 show={showAritmetica2} setShow= {setShowAritmetica2}/>
                </Row>
            </Container>
        </>
    );
}

export default Home;
