import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Button, CardTitle } from 'reactstrap';
import ProductsComponent from './components/ProductsComponent';
import ModalComponent from './components/ModalComponent';
import './App.css';

function App() {

    const [productos, setProductos] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false)
    const [editar, setEditar] = useState(null)

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

    const editarProducto = async (product) => {
        const response = await fetch("api/product/Update", {
            method: 'PUT',
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

    const eliminarProducto = async (id) => {

        var respuesta = window.confirm("Esta seguro que desea eliminar el contacto?");

        if (!respuesta) {
            return;
        }

        const response = await fetch("api/product/Delete/" + id, {
            method: 'DELETE'
        });

        if (response.ok) {
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
                                    setMostrarModal={setMostrarModal}
                                    setEditar={setEditar}
                                    eliminarProducto={eliminarProducto}>
                                </ProductsComponent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <ModalComponent
                    mostrarModal={mostrarModal}
                    setMostrarModal={setMostrarModal}
                    guardarProducto={guardarProducto}
                    editar={editar}
                    setEditar={setEditar}
                    editarProducto={editarProducto}>
                </ModalComponent>
            </Container>
        </>
    );
}

export default App;