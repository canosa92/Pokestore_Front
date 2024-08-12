import { createContext, useContext, useEffect, useState } from 'react';
const apiUrl = "https://pokestore-back-5oqh.onrender.com";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${apiUrl}/productos`);
      if (!response.ok) {
        throw new Error('Failed to fetch products', error);
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Error fetching products');
      setLoading(false);
    }
  };

  const addCommentToProduct = (productId, newComment) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product._id === productId ? { ...product, reviews: [...product.reviews, newComment] } : product
      )
    );
  };
  const fetchProductByName = async (nombre) => {
    try {
      const response = await fetch(`${apiUrl}/productos/nombre/${nombre}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  };
// Función para crear un nuevo producto
const createProduct = async (product) => {
  try {
    const response = await fetch(`${apiUrl}/productos/crear`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error('Failed to create product');
    }
    const newProduct = await response.json();
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    return newProduct;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

const updateProduct = async (id, product) => {
  try {
    console.log('Sending update request for id:', id);
    console.log('Update data:', product);

    const response = await fetch(`${apiUrl}/productos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to update product');
    }

    setProducts((prevProducts) =>
      prevProducts.map((p) => (p._id === id ? data : p))
    );
    return data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};
const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/productos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete product');
    }
    setSuccess('Producto eliminado correctamente.');
    // Espera 2 segundos antes de actualizar la lista
    setTimeout(() => {
      setProducts((prevProducts) =>
        prevProducts.filter((p) => p._id !== id)
      );
    }, 2000); // 2000 milisegundos = 2 segundos
  } catch (error) {
    console.error('Error deleting product:', error);
    setError('Error eliminando el producto.');
  }
};
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error, addCommentToProduct,  createProduct,
      updateProduct,
      deleteProduct,fetchProductByName,success }}>
      {children}
      {console.log(apiUrl)}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
