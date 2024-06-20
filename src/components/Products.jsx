import "../css/Products.css"

const Products = () => {
    const Array = [0, 1, 2, 3, 4, 5]
    return (
        <div className="products-container">
            <h1 className="products-title">Nuestros Productos</h1>
            <p className="products-description">
                Descubre nuestra amplia gama de agroinsumos de alta calidad para el sector agrícola.
            </p>
            <div class="grid-container">
                {Array.map((n) => {
                    return (
                        <div class="image">
                            Imagen
                        </div>)
                })}</div>
        </div>
    );
};

export default Products;