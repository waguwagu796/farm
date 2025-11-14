// src/components/Products.jsx
import React from 'react';

const ProductItem = ({ image, name, price, oldPrice }) => (
    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="product-item">
        <div className="position-relative bg-light overflow-hidden">
            <img className="img-fluid w-100" src={image} alt="" />
            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
        </div>
        <div className="text-center p-4">
            <a className="d-block h5 mb-2" href="#">{name}</a>
            <span className="text-primary me-1">${price}</span>
            <span className="text-body text-decoration-line-through">${oldPrice}</span>
        </div>
        <div className="d-flex border-top">
            <small className="w-50 text-center border-end py-2">
            <a className="text-body" href="#"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
            </small>
            <small className="w-50 text-center py-2">
            <a className="text-body" href="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
            </small>
        </div>
        </div>
    </div>
    );

    const Products = () => {
    const products = [
        { image: '/img/product-1.jpg', name: 'Fresh Tomato', price: '19.00', oldPrice: '29.00' },
        { image: '/img/product-2.jpg', name: 'Fresh Tomato', price: '19.00', oldPrice: '29.00' },
        { image: '/img/product-3.jpg', name: 'Fresh Tomato', price: '19.00', oldPrice: '29.00' },
        { image: '/img/product-4.jpg', name: 'Fresh Tomato', price: '19.00', oldPrice: '29.00' },
        { image: '/img/product-5.jpg', name: 'Fresh Tomato', price: '19.00', oldPrice: '29.00' },
        { image: '/img/product-6.jpg', name: 'Fresh Tomato', price: '19.00', oldPrice: '29.00' },
        { image: '/img/product-7.jpg', name: 'Fresh Tomato', price: '19.00', oldPrice: '29.00' },
        { image: '/img/product-8.jpg', name: 'Fresh Tomato', price: '19.00', oldPrice: '29.00' },
    ];

    return (
        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
                <div className="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                <h1 className="display-5 mb-3">Our Products</h1>
                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
            </div>
            <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                <li className="nav-item me-2">
                    <a className="btn btn-outline-primary border-2 active" data-bs-toggle="pill" href="#tab-1">Vegetable</a>
                </li>
                <li className="nav-item me-2">
                    <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-2">Fruits</a>
                </li>
                <li className="nav-item me-0">
                    <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-3">Fresh</a>
                </li>
                </ul>
            </div>
            </div>
            <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                {products.map((product, index) => (
                    <ProductItem key={index} {...product} />
                ))}
                <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                    <a className="btn btn-primary rounded-pill py-3 px-5" href="#">Browse More Products</a>
                </div>
                </div>
            </div>
            <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row g-4">
                {products.map((product, index) => (
                    <ProductItem key={index} {...product} />
                ))}
                <div className="col-12 text-center">
                    <a className="btn btn-primary rounded-pill py-3 px-5" href="#">Browse More Products</a>
                </div>
                </div>
            </div>
            <div id="tab-3" className="tab-pane fade show p-0">
                <div className="row g-4">
                {products.map((product, index) => (
                    <ProductItem key={index} {...product} />
                ))}
                <div className="col-12 text-center">
                    <a className="btn btn-primary rounded-pill py-3 px-5" href="#">Browse More Products</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Products;