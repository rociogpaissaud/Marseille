import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = (props) => {
    return (
      <>
        <section className="img-fluid justify-content-center max-width: 100% height: auto ">
            <img src={props.imagen}  alt="Decoración"></img>
        </section>
      </>
    )
}

export default ItemListContainer;