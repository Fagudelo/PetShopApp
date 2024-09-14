import { Modal, Form, FormGroup, Label, Input, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import propTypes from 'prop-types';
import { useEffect, useState } from 'react';

const modeloProducto = {
    id: 0,
    name: "",
    category: "",
    price: "",
    quantityInStock: ""
}
function ModalComponent({ mostrarModal, setMostrarModal, guardarProducto, editar, setEditar, editarProducto }) {

    const [producto, setProducto] = useState(modeloProducto)

    const actualizarDato = (e) => {
        console.log(e.target.name + ":" + e.target.value);
        setProducto(
            {
                ...producto, [e.target.name]: e.target.value
            }
        )
    }

    const enviarDatos = () => {
        if (producto.id == 0) {
            guardarProducto(producto);
        } else {
            editarProducto(producto)
        }
        setProducto(modeloProducto)
    }

    useEffect(() => {
        if (editar!=null) {
            setProducto(editar)
        } else {
            setProducto(modeloProducto)
        }
    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null);
    }

  return (
      <Modal isOpen={mostrarModal}>
          <ModalHeader>
              {producto.id == 0 ? "Nuevo Producto" : "Editar Producto" }
          </ModalHeader>
          <ModalBody>
              <Form>
                  <FormGroup>
                      <Label>Name</Label>
                      <Input name="name" onChange={(e) => actualizarDato(e)} value={ producto.name }></Input>
                  </FormGroup>
                  <FormGroup>
                      <Label>Category</Label>
                      <Input name="category" onChange={(e) => actualizarDato(e)} value={producto.category}></Input>
                  </FormGroup>
                  <FormGroup>
                      <Label>Price</Label>
                      <Input name="price" onChange={(e) => actualizarDato(e)} value={producto.price}></Input>
                  </FormGroup>
                  <FormGroup>
                      <Label>Quantity In Stoke</Label>
                      <Input name="quantityInStock" onChange={(e) => actualizarDato(e)} value={producto.quantityInStock}></Input>
                  </FormGroup>
              </Form>
          </ModalBody>
          <ModalFooter>
              <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
              <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
          </ModalFooter>
      </Modal>
  );
}

ModalComponent.propTypes = {
    mostrarModal: propTypes.func.isRequired,
    setMostrarModal: propTypes.func.isRequired,
    guardarProducto: propTypes.func.isRequired,
    editar: propTypes.func.isRequired,
    setEditar: propTypes.func.isRequired,
    editarProducto: propTypes.func.isRequired

}

export default ModalComponent;