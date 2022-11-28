import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { addUser } from "./userSlice"
import './style.css';


const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '', cate: '', area:'',
  });

  const handleAddUser = () => {
    setValues({ name: '', cate: '', area:''});
    dispatch(addUser({
      id: uuidv4(),
      name: values.name,
      cate: values.cate,
      area: values.area,
    }));
    navigate('/');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Shop Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'KMC Store' }}
      />
      <div className="dd flex flex-col">
        <h3 className="mb-2 text-base text-gray-800">
        Shop Area
        </h3>
        <select className='bg-gray-200 py-2 px-3 border-2 outline-none' value={values.area} onChange={(e) => setValues({ ...values, area: e.target.value })}>
          <option selected value="">Select</option>
          <option value="Chandrapur">Chandrapur</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Thane">Thane</option>
          <option value="Suburban">Mumbai Suburban</option>
          <option value="Pune">Pune</option>
          <option value="Nashik">Nashik</option>
          <option value="Solapur">Solapur</option>
          <option value='Solapur'>Solapur</option>
        </select>
      </div>
      <div className="dd flex flex-col">
        <h3 className="mb-2 text-base text-gray-800">
        Category
        </h3>
        <select className='bg-gray-200 py-2 px-3 border-2 outline-none' value={values.cate} onChange={(e) => setValues({ ...values, cate: e.target.value})}>
          <option value="Grocery">Grocery</option>
          <option value='Butcher'>Butcher</option>
          <option value="Baker">Baker</option>
          <option selected value="">Select</option>
          <option value="Chemist">Chemist</option>
          <option value="Stationery shop">Stationery shop</option>
        </select>
      </div>
      <div className="flex flex-col">
        <Button onClick={handleAddUser}>Submit</Button>
      </div>
    </div>
  )
}

export default AddUser