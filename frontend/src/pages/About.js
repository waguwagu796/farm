import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            {/* <!-- Spinner Start --> */}
            <div id="spinner" claaName="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div claaName="spinner-border text-primary" role="status"></div>
            </div>
            {/* <!-- Spinner End --> */}

            <Navbar/>
            {/* <!-- Navbar Start --> */}
            {/* <div claaName="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
                <div claaName="top-bar row gx-0 align-items-center d-none d-lg-flex">
                    <div claaName="col-lg-6 px-5 text-start">
                        <small><i claaName="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</small>
                        <small claaName="ms-4"><i claaName="fa fa-envelope me-2"></i>info@example.com</small>
                    </div>
                    <div claaName="col-lg-6 px-5 text-end">
                        <small>Follow us:</small>
                        <a claaName="text-body ms-3" href=""><i claaName="fab fa-facebook-f"></i></a>
                        <a claaName="text-body ms-3" href=""><i claaName="fab fa-twitter"></i></a>
                        <a claaName="text-body ms-3" href=""><i claaName="fab fa-linkedin-in"></i></a>
                        <a claaName="text-body ms-3" href=""><i claaName="fab fa-instagram"></i></a>
                    </div>
                </div>

                <nav claaName="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <a href="/" claaName="navbar-brand ms-4 ms-lg-0">
                        <h1 claaName="fw-bold text-primary m-0">F<span claaName="text-secondary">oo</span>dy</h1>
                    </a>
                    <button type="button" claaName="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span claaName="navbar-toggler-icon"></span>
                    </button>
                    <div claaName="collapse navbar-collapse" id="navbarCollapse">
                        <div claaName="navbar-nav ms-auto p-4 p-lg-0">
                            <a href="/" claaName="nav-item nav-link">Home</a>
                            <a href="about" claaName="nav-item nav-link active">About Us</a>
                            <a href="product" claaName="nav-item nav-link">Products</a>
                            <div claaName="nav-item dropdown">
                                <a href="#" claaName="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div claaName="dropdown-menu m-0">
                                    <a href="blog" claaName="dropdown-item">Blog Grid</a>
                                    <a href="feature" claaName="dropdown-item">Our Features</a>
                                    <a href="testimonial" claaName="dropdown-item">Testimonial</a>
                                    <a href="404" claaName="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="contact" claaName="nav-item nav-link">Contact Us</a>
                        </div>
                        <div claaName="d-none d-lg-flex ms-2">
                            <a claaName="btn-sm-square bg-white rounded-circle ms-3" href="">
                                <small claaName="fa fa-search text-body"></small>
                            </a>
                            <a claaName="btn-sm-square bg-white rounded-circle ms-3" href="">
                                <small claaName="fa fa-user text-body"></small>
                            </a>
                            <a claaName="btn-sm-square bg-white rounded-circle ms-3" href="">
                                <small claaName="fa fa-shopping-bag text-body"></small>
                            </a>
                        </div>
                    </div>
                </nav>
            </div> */}
            {/* <!-- Navbar End --> */}


            {/* <!-- Page Header Start --> */}
            <div claaName="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div claaName="container">
                    <h1 claaName="display-3 mb-3 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol claaName="breadcrumb mb-0">
                            <li claaName="breadcrumb-item"><a claaName="text-body" href="#">Home</a></li>
                            <li claaName="breadcrumb-item"><a claaName="text-body" href="#">Pages</a></li>
                            <li claaName="breadcrumb-item text-dark active" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}


            {/* <!-- About Start --> */}
            <div claaName="container-xxl py-5">
                <div claaName="container">
                    <div claaName="row g-5 align-items-center">
                        <div claaName="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div claaName="about-img position-relative overflow-hidden p-5 pe-0">
                                <img claaName="img-fluid w-100" src="img/about.jpg" />
                            </div>
                        </div>
                        <div claaName="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 claaName="display-5 mb-4">Best Organic Fruits And Vegetables</h1>
                            <p claaName="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <p><i claaName="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
                            <p><i claaName="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                            <p><i claaName="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>
                            <a claaName="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}


            {/* <!-- Firm Visit Start --> */}
            <div claaName="container-fluid bg-primary bg-icon mt-5 py-6">
                <div claaName="container">
                    <div claaName="row g-5 align-items-center">
                        <div claaName="col-md-7 wow fadeIn" data-wow-delay="0.1s">
                            <h1 claaName="display-5 text-white mb-3">Visit Our Firm</h1>
                            <p claaName="text-white mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                        </div>
                        <div claaName="col-md-5 text-md-end wow fadeIn" data-wow-delay="0.5s">
                            <a claaName="btn btn-lg btn-secondary rounded-pill py-3 px-5" href="">Visit Now</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Firm Visit End --> */}


            {/* <!-- Feature Start --> */}
            <div claaName="container-fluid bg-light bg-icon py-6">
                <div claaName="container">
                    <div claaName="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                        <h1 claaName="display-5 mb-3">Our Features</h1>
                        <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div claaName="row g-4">
                        <div claaName="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div claaName="bg-white text-center h-100 p-4 p-xl-5">
                                <img claaName="img-fluid mb-4" src="img/icon-1.png" alt="" />
                                <h4 claaName="mb-3">Natural Process</h4>
                                <p claaName="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                                <a claaName="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                            </div>
                        </div>
                        <div claaName="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div claaName="bg-white text-center h-100 p-4 p-xl-5">
                                <img claaName="img-fluid mb-4" src="img/icon-2.png" alt="" />
                                <h4 claaName="mb-3">Organic Products</h4>
                                <p claaName="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                                <a claaName="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                            </div>
                        </div>
                        <div claaName="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div claaName="bg-white text-center h-100 p-4 p-xl-5">
                                <img claaName="img-fluid mb-4" src="img/icon-3.png" alt="" />
                                <h4 claaName="mb-3">Biologically Safe</h4>
                                <p claaName="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                                <a claaName="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Feature End --> */}


            {/* <!-- Footer Start --> */}
            {/* <div claaName="container-fluid bg-dark footer pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div claaName="container py-5">
                    <div claaName="row g-5">
                        <div claaName="col-lg-3 col-md-6">
                            <h1 claaName="fw-bold text-primary mb-4">F<span claaName="text-secondary">oo</span>dy</h1>
                            <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita</p>
                            <div claaName="d-flex pt-2">
                                <a claaName="btn btn-square btn-outline-light rounded-circle me-1" href=""><i claaName="fab fa-twitter"></i></a>
                                <a claaName="btn btn-square btn-outline-light rounded-circle me-1" href=""><i claaName="fab fa-facebook-f"></i></a>
                                <a claaName="btn btn-square btn-outline-light rounded-circle me-1" href=""><i claaName="fab fa-youtube"></i></a>
                                <a claaName="btn btn-square btn-outline-light rounded-circle me-0" href=""><i claaName="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div claaName="col-lg-3 col-md-6">
                            <h4 claaName="text-light mb-4">Address</h4>
                            <p><i claaName="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p><i claaName="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p><i claaName="fa fa-envelope me-3"></i>info@example.com</p>
                        </div>
                        <div claaName="col-lg-3 col-md-6">
                            <h4 claaName="text-light mb-4">Quick Links</h4>
                            <a claaName="btn btn-link" href="">About Us</a>
                            <a claaName="btn btn-link" href="">Contact Us</a>
                            <a claaName="btn btn-link" href="">Our Services</a>
                            <a claaName="btn btn-link" href="">Terms & Condition</a>
                            <a claaName="btn btn-link" href="">Support</a>
                        </div>
                        <div claaName="col-lg-3 col-md-6">
                            <h4 claaName="text-light mb-4">Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div claaName="position-relative mx-auto" style={{maxWidth: '400px'}}>
                                <input claaName="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" claaName="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div claaName="container-fluid copyright">
                    <div claaName="container">
                        <div claaName="row">
                            <div claaName="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a href="#">Your Site Name</a>, All Right Reserved.
                            </div>
                            <div claaName="col-md-6 text-center text-md-end">
                                Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                                <br/>Distributed By: <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- Footer End --> */}
            <Footer/>


            {/* <!-- Back to Top --> */}
            <a href="#" claaName="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i claaName="bi bi-arrow-up"></i></a>
        </div>
    );
};

export default About;