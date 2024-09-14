import { Table, Button } from 'reactstrap';
import PropTypes from 'prop-types';
function ProductsComponent({ data }) {

    

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
                                  <Button color="primary" size="sm" className="me-2" >Edit</Button>
                                  <Button color="danger" size="sm" >Delete</Button>
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
    data: PropTypes.func.isRequired,
    mostrarModal: PropTypes.func.isRequired,
    setMostrarModal: PropTypes.func.isRequired
};

export default ProductsComponent;