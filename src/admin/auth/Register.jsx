import React from "react";
import Input from "../../component/input/Input";
import Button from "../../component/buttons/Button";
import arun_sing from "../../assets/image/arun_singh2.jpeg";
import MainHeading from "../../component/typography/MainHeading";
import { useFormik } from "formik";
import { postAPI } from "../../api/fetchAPI";
import { errorAlert, successAlert } from "../../services/dialogBox";
export default function Register({ setLogin }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async(values) => {
      const payload = {
         name: values.name,
      email: values.email,
      password: values.password,
      }
      let resp = await postAPI('user/register',payload);
      resp?.status ? successAlert(resp?.message) : errorAlert(resp?.message);
     },
  });
  return (
    <div className="auth-wrapper">
      <div class="card border-0 imgCard flex-row">
        <div className="p-3 ">
          <div className="w-100 h-100 image-wrapper">
            <img src={arun_sing} className="" alt="..." />
          </div>
        </div>
        <div class="card-body ">
          <div className="">
            <MainHeading text={"Registration form"} />
            <p onClick={() => setLogin(true)}>Login ?</p>
          </div>
          <div className="align-items-center justify-content-center d-flex">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <Input type="text" placeholder="arun" name="name" values={formik.values.name} onChange = {formik.handleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <Input type="email" placeholder="arun@mail.com" name="email" values={formik.values.email} onChange = {formik.handleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <Input type="password" placeholder="*******" name="password" values={formik.values.password} onChange = {formik.handleChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Confirm Password
                </label>
                <Input type="password" placeholder="*******" name="confirmPassword" values={formik.values.confirmPassword} onChange = {formik.handleChange}/>
              </div>

              <Button type="submit" text={"Register"}>Register</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
