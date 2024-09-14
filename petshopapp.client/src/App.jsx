import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Button, CardTitle } from 'reactstrap';
import ProductsComponent from './components/ProductsComponent'
import './App.css';
import ModalComponent from './components/ModalComponent';

function App() {

    const [productos, setProductos] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false)

    const mostrarProductos = async () => {
        const response = await fetch("api/product/List");

        if (response.ok) {
            const data = await response.json();
            setProductos(data);
        } else {
            console.log("List error");
        }
    }

    useEffect(() => {
        mostrarProductos();
    }, [])

    const guardarProducto = async (product) => {
        const response = await fetch("api/product/Add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(product)
        });

        if (response.ok) {
            setMostrarModal(!mostrarModal)
            mostrarProductos();
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h5">
                                    Lista de productos
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Button size="sm" color="success" onClick={(() => setMostrarModal(!mostrarModal))}>Nuevo Producto</Button>{' '}
                                <hr></hr>
                                <ProductsComponent
                                    data={productos}
                                    mostrarModal={mostrarModal}
                                    setMostrarModal={setMostrarModal}                               >
                                </ProductsComponent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <ModalComponent
                    mostrarModal={mostrarModal}
                    setMostrarModal={setMostrarModal}
                    guardarProducto={guardarProducto}>
                </ModalComponent>
            </Container>
        </>
    );
}

export default App;