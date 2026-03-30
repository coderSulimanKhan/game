import { Link } from 'react-router'

const LoginPage = () => {
  return (
    <div className="w-full h-screen gbg p-10">
      <form className="w-1/3 mx-auto p-3 flex flex-col borderShadow rounded-xl gb justify-center items-center gap-2">
        <h1 className="text-orange-300 ts text-3xl font-bold">Login</h1>
        <div className="w-1/10 flex items-center justify-center">
          <img src="/favicon.svg" alt="Logo" />
          <p className="text-orange-100 ts text-xl font-bold">Conquer</p>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="name" className="text-orange-300 font-bold ts">Name</label>
          <input type="text" id="name" placeholder="@ myname" className="borderShadow text-xl gbg text-orange-300 font-bold py-1 px-1 outline-none rounded-sm focus:scale-200 transition-transform duration-400" />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="password" className="text-orange-300 font-bold ts">Password</label>
          <input type="password" id="password" placeholder="@ password" className="borderShadow text-xl gbg text-orange-300 font-bold py-1 px-1 outline-none rounded-sm focus:scale-200 transition-transform duration-400" />
        </div>
        <button type="submit" className="text-xl font-bold gbg borderShadow ts p-1 text-orange-300 rounded-lg hoverEffect">Login</button>
        <div className="flex gap-1">
          <p className="text-orange-300 ts font-bold">Not a member?</p>
          <Link to={"/signup"} className="text-md text-orange-400 hoverEffect ts font-bold underline">Signup</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginPage