import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Game from '../components/Game';
import Loader from '../components/Loader';
import Message from '../components/Message';

function HomeScreen() {
  const dispatch = useDispatch();

  // Getting product list state from Redux
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts()); // Dispatch action to fetch products
  }, [dispatch]);

  return (
    <div
      style={{
        background: 'linear-gradient(45deg, rgba(255, 0, 255, 0.6), rgba(0, 0, 255, 0.6))',
        padding: '20px 0',
        backgroundSize: '300% 300%',
        animation: 'bgAnimation 5s ease infinite',
        minHeight: '100vh',
        backgroundPosition: 'center',
        boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Container>
        {/* Popular Games Header Container */}
        <div
          style={{
            textAlign: 'center',
            background: 'rgba(0, 0, 0, 0.6)',
            padding: '20px 0',
            borderRadius: '15px',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
            marginBottom: '40px',
          }}
        >
          <h1
            style={{
              color: '#FFFFFF',
              fontSize: '4rem',
              textShadow: '0 0 10px rgba(255, 0, 255, 0.9), 0 0 20px rgba(0, 0, 255, 0.9)',
              fontFamily: 'Orbitron, sans-serif',
            }}
          >
            Popular Games
          </h1>
        </div>

        {/* Loading and Error Handling */}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : products && products.length > 0 ? (
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3} style={{ paddingBottom: '20px' }}>
                <Game product={product} />
              </Col>
            ))}
          </Row>
        ) : (
          <Message variant="info">No products found</Message>
        )}
      </Container>
    </div>
  );
}

export default HomeScreen;
