import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <main className='formMain d-flex'>
      <form className='form mx-auto border border-light rounded'>
        <div className='p-3 d-flex flex-column position-relative'>
          <div className='pb-2'>
            <Link className='navbar-brand mx-auto order-2' to='/'>
              <p className='d-block m-0'>Sandra</p>
              <p className='m-0' id='sub-title'>
                Atelier
              </p>
            </Link>
          </div>
          <div className='form-floating p-1'>
            <input
              type='email'
              className='form-control'
              id='floatingInput'
              placeholder='name@example.com'
            ></input>
            <label for='floatingInput'>Email</label>
          </div>
          <div class='form-floating p-1 pb-3'>
            <input
              type='password'
              className='form-control'
              id='floatingPassword'
              placeholder='Password'
            ></input>
            <label for='floatingPassword'>Senha</label>
            <div className='position-absolute end-50 bottom-0'>
              <button className='btn btn-outline-light btnForm'>Acessar</button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Login;
