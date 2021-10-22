


export const Item = ({producto}) => {
    return(
        <>
        <div className="parr 1 titulos">
           <h1 className="parr1 titulos">Productos</h1>
          <h4> {producto.id}
           {producto.name}
           {producto.category}
           {producto.price}
           {producto.stock}
           {producto.img}
           </h4>
           </div>
           <div>
           <img src="../img/lycra1.jpg" width="200 px" height="150 px" alt=""></img>
           
           </div>
        </>
    )
} 