import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
  const [show, setshow] = useState(false)
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])

  useEffect(() => {
    // Retrieve passwords from localStorage and ensure it's a valid array
    const passwords = localStorage.getItem('passwords');
    try {
      const parsedPasswords = passwords ? JSON.parse(passwords) : [];
      if (Array.isArray(parsedPasswords)) {
        setpasswordArray(parsedPasswords);
      } else {
        setpasswordArray([]); // Reset to empty array if the data is not a valid array
      }
    } catch (error) {
      console.error('Error parsing passwords from localStorage', error);
      setpasswordArray([]); // Set to empty array if JSON parsing fails
    }
  }, []);

  const copyText = (e) => {
    navigator.clipboard.writeText(e)
    toast.success('Copied to clipboard!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
  
    });
  }

  const editItem = (e) => {
    setform(passwordArray.filter((i)=>i.id===e)[0])
    setpasswordArray((prevPasswords) => {
      const updatedPasswords = prevPasswords.filter((i)=>i.id!==e)
      localStorage.setItem('passwords', JSON.stringify(updatedPasswords)); // Store the updated passwords in localStorage
      console.log(updatedPasswords); // Log the updated passwords array for debugging
      return updatedPasswords; // Update the state with the new array
    });
  }
  
  const deleteItem=(e)=>{
    setpasswordArray((prevPasswords) => {
      const updatedPasswords = prevPasswords.filter((i)=>i.id!==e)
      localStorage.setItem('passwords', JSON.stringify(updatedPasswords)); // Store the updated passwords in localStorage
      console.log(updatedPasswords); // Log the updated passwords array for debugging
      return updatedPasswords; // Update the state with the new array
      
    });
    toast.success('Deleted Successfully!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
  
    });
  }

  const showPassword = () => {
    // alert("show password")
    setshow(prevShow => (!prevShow))
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const savePass = () => {
    setpasswordArray((prevPasswords) => {
      const updatedPasswords = [...(prevPasswords || []), { ...form, id: uuidv4() }]; // If prevPasswords is null, use an empty array.
      localStorage.setItem('passwords', JSON.stringify(updatedPasswords)); // Store the updated passwords in localStorage
      console.log(updatedPasswords); // Log the updated passwords array for debugging
      return updatedPasswords; // Update the state with the new array
    });
    toast.success('Password Saved!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
  
    });
  };



  return (

    <div className='min-h-[90vh]'>

    <div className="fixed inset-0 -z-10 min-h-screen w-full  [background:radial-gradient(125%_125%_at_50%_10%,#000000_40%,#63e_100%)]"></div>
    <div className='w-full p-2 md:p-0 md:w-3/4 flex flex-col mx-auto py-10'>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        
      />


      
      <div className={'md:mycontainer min-h-[calc(100%-44.5px)]'}>
        <h1 className='text-center font-bold text-3xl text-white'>
          <span className='text-green-600'>&lt;</span>Pass<span className='text-green-600'>OP/&gt;</span>
        </h1>
        <p className='text-green-300 text-center text-md'>Your own Password Manager</p>
      </div>
      <div className='flex flex-col p-4 text-black gap-3 items-center text-sm'>
        <input placeholder='Enter site' value={form.site} onChange={handleChange} className="rounded-full border border-green-400 w-3/4 px-4 font-semibold text-purple-800 py-1 focus:border-transparent" type="text" name='site' id="site" />
        <div className='flex flex-col md:flex-row gap-4 md:gap-6 w-3/4'>
          <input placeholder='Enter username' value={form.username} onChange={handleChange} className="rounded-full border border-green-400 w-full px-4 font-semibold text-purple-800 py-1 hover:border-none" type="text" name='username' id='username'/>
          <div className="relative w-full md:w-1/2 flex">
            <input placeholder='Enter website password' value={form.password} onChange={handleChange} className="rounded-full border border-green-400 w-full px-4 font-semibold text-purple-800 py-1 hover:border-none" type={show ? 'text' : 'password'} name='password' id='password'/>
            <div onClick={showPassword} className='absolute right-1 cursor-pointer '>{show ? (<span className="material-symbols-outlined ">visibility_off</span>) : (<span className="material-symbols-outlined">visibility</span>)}</div>

          </div>
        </div>
        <button onClick={savePass} className='text-white font-bold  rounded-full w-fit bg-green-600 px-4 py-1 flex justify-center items-center'>

          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
            stroke="bold"
            colors="primary:#ffffff,secondary:#000000"
            style={{ height: '25px' }}>
          </lord-icon>
          Save</button>
      </div>
      <div className="passwords">
        <h2 className='font-bold text-2xl p-2 text-white'>YOUR PASSWORDS</h2>
        {/* <div className='bg-gray-600 w-[66%] h-[0.1px]'></div> */}
        {
          passwordArray.length === 0 ? <div className='text-white font-semibold text-xl text-center'>NOTHING TO DISPLAY HERE</div> : (<table className="table-auto text-white w-full border border-gray-600 text-center rounded-t-lg overflow-hidden mt-5 mb-[20px]">
            <thead className='border-gray-600 border bg-gray-950'>
              <tr>
                <th className='w-1/3 border-gray-600 border p-1'>Website URL</th>
                <th className='w-1/4 border-gray-600 border p-1'>Username</th>
                <th className='w-1/4 border-gray-600 border p-1'>Password</th>
                <th className='w-1/4 border-gray-600 border p-1'>Actions</th>
              </tr>
            </thead>
            <tbody className='w-1/3 '>
              {passwordArray.map((item, index) => {
                return (<tr key={index}>
                  <td className='w-1/3 text-center border-gray-600 border-x px-3 text-wrap break-all'><div className='flex justify-between items-center'><a href={item.site} target='_blank'>{item.site}</a> <div className='cursor-pointer pt-2' onClick={() => copyText(item.site)}><lord-icon src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" stroke="bold" colors="primary:#ffffff,secondary:#000000" style={{ height: '20px' }}></lord-icon></div></div>
                  </td>
                  <td className='w-1/3 text-center border-gray-600 border-x px-2 text-wrap break-all'><div className='flex justify-between items-center'><div>{item.username}</div><div className='cursor-pointer pt-2' onClick={() => copyText(item.username)}><lord-icon src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" stroke="bold" colors="primary:#ffffff,secondary:#000000" style={{ height: '20px' }}></lord-icon></div></div>
                  </td>
                  <td className='w-1/3 text-center border-gray-600 border-x px-2 text-wrap break-all'><div className='flex justify-between items-center'><div>{item.password}</div><div className='cursor-pointer pt-2' onClick={() => copyText(item.password)}><lord-icon src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" stroke="bold" colors="primary:#ffffff,secondary:#000000" style={{ height: '20px' }}></lord-icon></div></div>
                  </td>
                  <td className='w-1/3 text-center border-gray-600 border-x px-2'><div className='flex justify-between items-center'><div className='cursor-pointer pt-2' onClick={() => editItem(item.id)}><lord-icon src="https://cdn.lordicon.com/gwlusjdu.json" trigger="hover" stroke="bold" colors="primary:#ffffff,secondary:#000000" style={{ height: '20px' }}></lord-icon></div><div className='cursor-pointer pt-2' onClick={() => deleteItem(item.id)}><lord-icon src="https://cdn.lordicon.com/skkahier.json" trigger="hover" stroke="bold" colors="primary:#ffffff,secondary:#000000" style={{ height: '20px' }}></lord-icon></div></div>
                  </td>
                </tr>)
              })}


            </tbody>
          </table>)
        }


      </div>



    </div>
</div>
  )
}

export default Manager
