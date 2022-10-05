import Modal from 'react-bootstrap/Modal'

const PopupConfirmSubmit = (props) => {
  return (
    <Modal
      show={props.modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Confirm?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>You can't edit your info after confirmation</p>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-primary first-button"
          onClick={() => {
            props.submitHandler()
            props.setModalShow(false)
          }}
        >
          Confirm
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            props.setModalShow(false)
          }}
        >
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default PopupConfirmSubmit
