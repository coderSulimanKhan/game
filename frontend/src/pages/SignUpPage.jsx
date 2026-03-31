import { useState } from "react"
import { Link } from "react-router"
import { useDispatch } from "react-redux"
import { signup } from "../store/user.store.js";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: ""
  });

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (!(formData.password === formData.confirmPassword)) {
      return toast.error("Password not match");
    }

    dispatch(signup(formData));
  };

  return (
    <div className="w-full h-screen gbg p-4 lg:p-10 flex items-center">
      <form onSubmit={handleSubmit} className="w-full md:w-2/3 mx-auto p-3 flex flex-col borderShadow rounded-xl gb justify-center items-center gap-2">
        <h1 className="text-orange-300 ts text-3xl font-bold">Sign Up</h1>
        <div className="w-1/10 flex items-center justify-center">
          <img src="/favicon.svg" className="myShadow" alt="Logo" />
          <p className="text-orange-100 ts text-xl font-bold">Conquer</p>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="name" className="text-orange-300 font-bold ts">Name</label>
          <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" id="name" placeholder="@ myname" className="borderShadow text-2xl gbg text-orange-300 font-bold py-1 px-1 outline-none rounded-sm focus:scale-110 transition-transform duration-400" />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="password" className="text-orange-300 font-bold ts">Password</label>
          <input value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" id="password" placeholder="@ strong_password" className="borderShadow text-2xl gbg text-orange-300 font-bold py-1 px-1 outline-none rounded-sm focus:scale-110 transition-transform duration-400" />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="confirmPassword" className="text-orange-300 font-bold ts">Confirm Password</label>
          <input value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} type="password" id="confirmPassword" placeholder="@ confirm_strong_password" className="borderShadow text-2xl gbg text-orange-300 font-bold py-1 px-1 outline-none rounded-sm focus:scale-110 transition-transform duration-400" />
        </div>
        <button type="submit" className="text-xl font-bold gbg borderShadow ts p-1 text-orange-300 rounded-lg hoverEffect">Signup</button>
        <div className="flex gap-1">
          <p className="text-orange-300 ts font-bold">Already a member?</p>
          <Link to={"/login"} className="text-md text-orange-400 hoverEffect ts font-bold underline">Login</Link>
        </div>
      </form>
    </div>
  )
}

export default SignUpPage