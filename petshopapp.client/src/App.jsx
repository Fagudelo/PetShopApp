import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Button, CardTitle } from 'reactstrap';
import ProductsComponent from './components/ProductsComponent'
import './App.css';

function App() {

    const [productos, setProductos] = useState([])

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
                                <Button size="sm" color="success" >Nuevo Producto</Button>{' '}
                                <hr></hr>
                                <ProductsComponent data={ productos }>
                                </ProductsComponent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;