import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editUser } from "./userSlice"

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter(user => user.id === params.id);
  const { name, area, cate } = existingUser[0];
  const [values, setValues] = useState({
    name,
    area,
    cate
  });

  const handleEditUser = () => {
    setValues({ name: '', email: '' });
    dispatch(editUser({
      id: params.id,
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
          <option value="Chandrapur">Chandrapur</option>
          <option value="Nagpur">Nagpur</option>
          <option selected value="Thane">Thane</option>
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
        <Button onClick={handleEditUser}>Submit</Button>
      </div>
    </div>
  )
}

export default EditUser