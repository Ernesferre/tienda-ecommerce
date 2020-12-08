import './ListContainer.css'

function ListContainer (props) {
    return (
      <div className="contenedor1">
          <h2>
              <p> 
                  Categoria {props.name}
              </p>
          </h2> 
      </div>
    )
  }

  export default ListContainer;
