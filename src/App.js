import { useState } from "react";
import { validate } from "./helpers";
import image from "./assest/Frame345.png"
import s from "./components/App.css"
function App() {

  const [profileDatas, setProfileDatas] = useState({
    fullname: '',
    email: '',
    password: '',
    ageRange: '',
    terms: true
  })

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    password: "",
    ageRange: "",
    terms: true,
  });

  const handleChange = (e) => {
    e.preventDefault()
    const { name, type, checked, value } = e.target;

    setProfileDatas({
      ...profileDatas,
      [name]: type === 'checkbox' ? checked : value
    })

    const error = validate(name, value)

    setErrors({
      ...errors,
      [name]: error
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      profileDatas.fullname.length > 0 &&
      profileDatas.email.length > 0 &&
      profileDatas.password.length > 0 &&
      profileDatas.ageRange.length > 0
    ) {
      console.log(profileDatas);
    } else {
      console.log("Form is invalid");
    }

  }

  return (

   <div className="container" >
     <div className="image" >
     <img src={image} />
     </div>
     <div className="form">
       <form onSubmit={handleSubmit}>
         <div className="inp_1" >
           <label htmlFor="fullname">Fullname: </label>
           <input
             name="fullname"
             defaultValue={profileDatas.fullname}
             onChange={handleChange}
           />
           {errors.fullname && <p style={{color: 'red'}} >{errors.fullname}</p>}
         </div>
       
        
       
         <div className="inp_3" >
           <label htmlFor="password">Password</label>
           <input name="password" type="password" onChange={handleChange} />
           {errors.password && <p style={{color: 'red'}} >{errors.password}</p>}
         </div>
       
        
       
         <div className="inp_5" >
           <label htmlFor="terms">Remember me</label>
           <input
             name="terms"
             type="checkbox"
             onChange={handleChange}
             defaultChecked={profileDatas.terms}
           />
           {errors.terms &&   <p style={{color: 'red'}} >{errors.terms}</p>}
         </div>
       
         <button className="btn" type="submit">Submit</button>
       </form>
     </div>
   </div>
  );
}

export default App;
