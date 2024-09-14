import { Table, Button } from 'reactstrap';
import propTypes from 'prop-types';
function ProductsComponent({ data, mostrarModal, setMostrarModal, setEditar, eliminarProducto }) {

    const enviarDatos = (producto) => {
        setEditar(producto)
        setMostrarModal(!mostrarModal)
    }

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Quantity in Stock</th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="4">Sin registros</td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>{item.quantityInStock}</td>
                                <td>
                                    <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(item)}>Edit</Button>
                                    <Button color="danger" size="sm" onClick={() => eliminarProducto(item.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </Table>
    );
}

ProductsComponent.propTypes = {
    data: propTypes.func.isRequired,
    mostrarModal: propTypes.func.isRequired,
    setMostrarModal: propTypes.func.isRequired,
    setEditar: propTypes.func.isRequired,
    eliminarProducto: propTypes.func.isRequired
};

export default ProductsComponent;