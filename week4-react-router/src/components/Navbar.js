import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <section style={{ height: '100%', width: '100%', boxSizing: 'border-box', backgroundColor: '#FFFFFF' }}>
      <nav
        className="navbar navbar-expand-lg navbar-light p-4 px-md-4 mb-3 bg-body border-bottom"
        style={{ fontFamily: 'Poppins' }}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.5 15.75C3.5 8.98451 8.98451 3.5 15.75 3.5H29.75C30.7165 3.5 31.5 4.2835 31.5 5.25C31.5 6.2165 30.7165 7 29.75 7H15.75C10.9175 7 7 10.9175 7 15.75V29.75C7 30.7165 6.2165 31.5 5.25 31.5C4.2835 31.5 3.5 30.7165 3.5 29.75V15.75Z"
                fill="#391484"
              />
              <path
                d="M10.5 17.5C10.5 13.634 13.634 10.5 17.5 10.5H31.5C35.366 10.5 38.5 13.634 38.5 17.5V31.5C38.5 35.366 35.366 38.5 31.5 38.5H17.5C13.634 38.5 10.5 35.366 10.5 31.5V17.5Z"
                fill="#391484"
              />
            </svg>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link px-md-4 active" aria-current="page" href="#"
                >Features</a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link px-md-4" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-md-4" href="#">Contacts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-md-4" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-md-4" href="#">Review</a>
              </li>
            </ul>
            <div className="d-flex">
              <Link to="/login">
                <Button>
                  Login
                </Button>
              </Link>

            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;