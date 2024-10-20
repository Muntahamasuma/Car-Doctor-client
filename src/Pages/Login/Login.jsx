import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

    const {signIn}= useContext(AuthContext); 
    const navigate = useNavigate();
    
    const handleLogin = e =>{
      e.preventDefault()
      const from = e.target;
      const email = from.email.value;
        const password = from.password.value;
        console.log( email, password)

        signIn(email,password)
        .then(result =>{
            console.log(result)
            navigate('/');
          })
          .catch((error) => {
            console.error("Login failed", error);
          });
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className='text-center text-4xl font-bold'>Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit' className="btn bg-[#FF3811] text-white" value='Login'></input>
        </div>
        <p className='text-lg my-2 text-center'>New to car doctor&apos;s? <Link to='/signUp' className='text-[#FF3811] font-bold'>Sign up</Link></p>
      </form>
    </div>

    <div className="">
      <img src={loginImg} alt="" />
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Login;