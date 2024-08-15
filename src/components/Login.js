function List() {
    return (
      <>

        <form className="max-w-md mx-auto p-4">
          <div className="mb-2 flex flex-col">
            <label className="font-semibold text-shadow">Username</label>
            <input className="border-2 p-1 my-1" placeholder="Enter your username"></input>
          </div>
          <div className="mb-2 flex flex-col">
            <label className="font-semibold text-shadow">Password</label>
            <input type="password" className="border-2 p-1 my-1" placeholder="**********"></input>
            <p className="text-red-500 italic my-0">Please choose a password.</p>
          </div>
          <div className="flex justify-between items-center my-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
            <p className="font-semibold text-blue-500">Forgot Password</p>
          </div>
        </form>

      </>
    );
  }
  
  export default List;




