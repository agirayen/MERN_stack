import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast} from 'react-toastify';
import { FaUser } from "react-icons/fa";
import { reset, register } from '../features/auth/authSlice'

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isLoading, isSuccess, message } = useSelector((state) => state.auth);


  const onChange =(e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,

    }))
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
        toast.error('password is not matching');
      } else {
        const userData = {
          name,
          email,
          password,
        };
        dispatch(register(userData));
      }
    };
  

  
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Create an account</p>
      </section>
      <section className="form">
        <form onSubmit = {onSubmit}>
            <div className='form-group'>
          <input
            type="text"
            name="name"
            value={name}
            placeholder=" enter name"
            id="name"
            className="form-control"
            onChange={onChange}
          />
          </div>

          <div className='form-group'>
          <input
            type="email"
            name="email"
            value={email}
            placeholder=" enter email"
            id="email"
            className="form-control"
            onChange={onChange}
          />
          </div>

          <div className='form-group'>
          <input
            type="password"
            name="password"
            value={password}
            placeholder=" enter password"
            id="password"
            className="form-control"
            onChange={onChange}
          />
          </div>

          <div className='form-group'>
          <input
            type="password"
            name="password2"
            value={password2}
            placeholder=" reenter password"
            id="password2"
            className="form-control"
            onChange={onChange}
          />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>Submit</button>

          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
