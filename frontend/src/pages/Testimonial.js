import React from 'react';

const Testimonial = () => {
    return (
        <div>
            {/* <!-- Navbar Start --> */}
            <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
                    <div className="col-lg-6 px-5 text-start">
                        <small><i className="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</small>
                        <small className="ms-4"><i className="fa fa-envelope me-2"></i>info@example.com</small>
                    </div>
                    <div className="col-lg-6 px-5 text-end">
                        <small>Follow us:</small>
                        <a className="text-body ms-3" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="text-body ms-3" href=""><i className="fab fa-twitter"></i></a>
                        <a className="text-body ms-3" href=""><i className="fab fa-linkedin-in"></i></a>
                        <a className="text-body ms-3" href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <a href="" className="navbar-brand ms-4 ms-lg-0">
                        <h1 className="fw-bold text-primary m-0">F<span className="text-secondary">oo</span>dy</h1>
                    </a>
                    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto p-4 p-lg-0">
                            <a href="" className="nav-item nav-link">Home</a>
                            <a href="about" className="nav-item nav-link">About Us</a>
                            <a href="product" className="nav-item nav-link">Products</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <a href="blog" className="dropdown-item">Blog Grid</a>
                                    <a href="feature" className="dropdown-item">Our Features</a>
                                    <a href="testimonial" className="dropdown-item active">Testimonial</a>
                                    <a href="404" className="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="contact" className="nav-item nav-link">Contact Us</a>
                        </div>
                        <div className="d-none d-lg-flex ms-2">
                            <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                                <small className="fa fa-search text-body"></small>
                            </a>
                            <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                                <small className="fa fa-user text-body"></small>
                            </a>
                            <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                                <small className="fa fa-shopping-bag text-body"></small>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <!-- Navbar End --> */}


            {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-3 animated slideInDown">Testimonial</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a className="text-body" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-body" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-dark active" aria-current="page">Testimonial</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}


            {/* <!-- Testimonial Start --> */}
            <div className="container-fluid bg-light bg-icon py-6">
                <div className="container">
                    <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                        <h1 className="display-5 mb-3">Customer Review</h1>
                        <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <div className="testimonial-item position-relative bg-white p-5 mt-4">
                            <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" alt="" />
                                <div className="ms-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item position-relative bg-white p-5 mt-4">
                            <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" alt="" />
                                <div className="ms-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item position-relative bg-white p-5 mt-4">
                            <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" alt="" />
                                <div className="ms-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item position-relative bg-white p-5 mt-4">
                            <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg" alt="" />
                                <div className="ms-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --> */}


            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-dark footer pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h1 className="fw-bold text-primary mb-4">F<span className="text-secondary">oo</span>dy</h1>
                            <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Address</h4>
                            <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Quick Links</h4>
                            <a className="btn btn-link" href="">About Us</a>
                            <a className="btn btn-link" href="">Contact Us</a>
                            <a className="btn btn-link" href="">Our Services</a>
                            <a className="btn btn-link" href="">Terms & Condition</a>
                            <a className="btn btn-link" href="">Support</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative mx-auto" style={{maxWidth: '400px'}}>
                                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a href="#">Your Site Name</a>, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                                <br/>Distributed By: <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}


            {/* <!-- Back to Top --> */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    );
};

export default Testimonial;