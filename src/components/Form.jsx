import React,{useState} from 'react';
import { useFormik } from 'formik';
import { ContactSchema } from '../Schema/Contact';
// import "../plugin/css/Portofolio.css";


const SignupForm = ({darkMode,contactLinkRef}) => {
  const [isAccepted, setIsAccepted] = useState(false);

  const onSubmit = async (values, actions) =>{
    if (!isAccepted) {
      // Tampilkan pesan kesalahan atau lakukan tindakan yang sesuai
      alert("Please accept the terms and conditions before sending the message.");
      return;
    }
    // console.log(values);
    // console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
    setIsAccepted(false)
  }

  const { values, errors, touched, isSubmitting, handleBluer, handleChange, handleSubmit } = useFormik({
      initialValues: {
          Nama:"",
          Email:"",
          Subject:"",
          Massage:"",
          Accept:"",
      },
      validationSchema: ContactSchema,
      onSubmit
  })

  console.log(errors)

  return(
    <div className='mt-24 px-10 lg:px-20 py-10' ref={contactLinkRef}>
      <h1 className={`uppercase text-center text-3xl lg:text-6xl md:text-5xl font-bold ${darkMode ? "text-white" : "text-black"}`}>contact me </h1>
      <p className=" text-hijau font-bold text-center mt-7 mb-10">
        LET'S
        <span className={`text-black decor lg:text-3xl text-2xl tracking-widest ms-2 ${darkMode ? "text-white" : "text-black"}`}>Talk About Ideas</span>
      </p>
      <div className='lg:flex items-start justify-between mt-10'>
        <div className='w-[30%] lg:block hidden'>
          <div className='flex items-center mt-4'>
            <i className="fa-regular fa-map px-4 py-6 fa-lg bg-white rounded-full border-black border-2 rounded-shadow"></i>
            <div className={`w-[20%] h-[2px] bg-black ${darkMode ? "bg-white" : "bg-black"}`}></div>
            <div  className={` ${darkMode ? "text-white" : "text-black"}`}>
              <h1 className={`ms-10 decor text-3xl tracking-widest mb-2`}>Address</h1>
              <p className='ms-10'>Bali, Indonesia</p>
            </div>
          </div>
          <div className='flex items-center mt-10'>
            <i className="fa-regular fa-user px-4 py-6 fa-lg bg-white rounded-full border-black border-2 rounded-shadow"></i>
            <div className={`w-[21%] h-[2px] ${darkMode ? "bg-white" : "bg-black"}`}></div>
            <div className={` ${darkMode ? "text-white" : "text-black"}`}>
              <h1 className={`ms-10 decor text-3xl tracking-widest mb-2`}>Pekerjaan</h1>
              <p className='ms-10'>Mahasiswa</p>
            </div>
          </div>
          <div className='flex items-center mt-10'>
            <i className="fa-regular fa-envelope px-4 py-6 fa-lg bg-white rounded-full border-black border-2 rounded-shadow"></i>
            <div className={`w-[21%] h-[2px] ${darkMode ? "bg-white" : "bg-black"}`}></div>
            <div className={` ${darkMode ? "text-white" : "text-black"}`}>
              <h1 className={`ms-10 decor text-3xl tracking-widest mb-2`}>Email</h1>
              <p className='ms-10'>Trajust19@gmail.com</p>
            </div>
          </div>
          <div className='flex items-center mt-10'>
            <i className="fa-regular fa-address-book px-4 py-6 fa-lg bg-white rounded-full border-black border-2 rounded-shadow"></i>
            <div className={`w-[21%] h-[2px] ${darkMode ? "bg-white" : "bg-black"}`}></div>
            <div className={` ${darkMode ? "text-white" : "text-black"}`}>
              <h1 className={`ms-10 decor text-3xl tracking-widest mb-2`}>Phone</h1>
              <p className='ms-10'>+1 900 - 900 - 9000</p>
            </div>
          </div>
        </div>
        <div className='lg:w-[60%]'>
          <form action="" onSubmit={handleSubmit} autoComplete="off">
            <div className='lg:flex md:flex items-center justify-between gap-5'>
              <div className="py-1 lg:w-[50%] md:w-[50%]">
                <label htmlFor="Nama" className={`text-sm label block py-1 uppercase lg:text-base tracking-wider font-bold ms-5 ${darkMode ? "text-white" : "text-black"}`}>your full name</label>
                <input 
                  value={values.Nama}
                  onChange={handleChange}
                  type="text"
                  name='Nama'
                  id='Nama'
                  autoComplete='off'
                  placeholder=''
                  onBlur={handleBluer}
                  className={`mt-2 border-2 border-black  px-6 py-4 rounded-3xl ${errors.Nama && touched.Nama ? "input-error w-full":"block mx-auto text-black  w-full "}`} 
                />
                {errors.Nama && touched.Nama && (<p className="error  ms-5 text-red-500">{errors.Nama}</p>)}
              </div>
              <div className="py-1 lg:w-[50%] md:w-[50%] md:mt-0 mt-5 lg:mt-0">
                <label htmlFor="Email" className={`text-sm label block py-1 uppercase lg:text-base tracking-wider font-bold ms-5 ${darkMode ? "text-white" : "text-black"}`}>your email address</label>
                <input 
                  value={values.Email}
                  onChange={handleChange}
                  type="email"
                  name='Email'
                  id='Email'
                  autoComplete="on"
                  placeholder=''
                  onBlur={handleBluer}
                  className={`mt-2 border-2 border-black  px-6 py-4 rounded-3xl ${errors.Email && touched.Email ? "input-error w-full":"block mx-auto text-black  w-full "}`}
                />
                {errors.Email && touched.Email && (<p className="error ms-5 text-red-500">{errors.Email}</p>)}
              </div>
            </div>
            <div className="py-1 mt-5">
                <label htmlFor="Subject" className={`text-sm label block py-1 uppercase lg:text-base tracking-wider font-bold ms-5 ${darkMode ? "text-white" : "text-black"}`}>your subject</label>
                <input 
                  value={values.Subject}
                  onChange={handleChange}
                  type="text"
                  name='Subject'
                  id='Subject'
                  placeholder=''
                  onBlur={handleBluer}
                  className={`mt-2 border-2 border-black  px-6 py-4 rounded-3xl ${errors.Subject && touched.Subject ? "input-error w-full":"block mx-auto text-black  w-full "}`} 
                />
                {errors.Subject && touched.Subject && (<p className="error ms-5 text-red-500">{errors.Subject}</p>)}
              </div>
            <div className="py-1 mt-5">
                <label htmlFor="Massage" className={`text-sm label block py-1 uppercase lg:text-base tracking-wider font-bold ms-5 ${darkMode ? "text-white" : "text-black"}`}>your massage</label>
                <textarea 
                  value={values.Massage}
                  onChange={handleChange}
                  type="text"
                  name='Massage'
                  id='Massage'
                  cols="78"
                  rows="4"
                  placeholder=''
                  onBlur={handleBluer}
                  className={`mt-2 border-2 border-black  px-6 py-4 rounded-3xl ${errors.Massage && touched.Massage ? "input-error w-full":"block mx-auto text-black  w-full "}`}  
                />
                {errors.Massage && touched.Massage && (<p className="error ms-5 text-red-500">{errors.Massage}</p>)}
              </div>
              <div className='mt-3 lg:flex items-center justify-end gap-7'>
                <div>
                  <label htmlFor="Accept" className={`text-sm md:text-base lg:text-base ms-5 ${darkMode ? "text-white" : "text-black"}`}> I accepttext-sm  the terms and conditions</label>
                  <input
                    type="checkbox"
                    name="Accept"
                    id='Accept'
                    value={values.Accept}
                    checked={isAccepted}
                    onChange={() => setIsAccepted(!isAccepted)}
                    className={`ms-3 ${errors.Accept && touched.Accept ? "input-error":""}`}
                    />
                </div>
                <div>
                  <button disabled={isSubmitting} type="submit" className={`block mx-auto py-2 px-6 mt-7 lg:mt-4 focus:ring-4 focus:ring-blue-400  bg-hijau rounded-3xl uppercase  ${darkMode ? "bg-white text-black" : "bg-black  text-white"}`}>
                    send massege
                  </button>
                </div>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
};
export default SignupForm