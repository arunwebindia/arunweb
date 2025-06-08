import React from "react";
import Input from "../../component/input/Input";
import Button from "../../component/buttons/Button";
import arun_sing from '../../assets/image/arun_singh2.jpeg'
import MainHeading from "../../component/typography/MainHeading";
export default function Login({setLogin}) {
  return (
    <div className="auth-wrapper">
      <div class="card border-0 imgCard flex-row">
        <div className="p-3 ">
          <div className="w-100 h-100 image-wrapper">
            <img src={arun_sing} className="" alt="..." />
          </div>
        </div>
        <div class="card-body d-flex align-items-center justify-content-center">

          <div className="">
        <div className="">
            <MainHeading text={"Login form"}/>
            <p onClick={()=>setLogin(false)}>New User ?</p>
        </div>
            <form>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <Input type="email" placeholder="arun@mail.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  password
                </label>
                <Input type="password" placeholder="*******" />
                <small className="text-danger text-end mt-2 d-block pointer">
                  Forgot Password ?
                </small>
              </div>

              <Button>Login</Button>
               
            </form>
            
          </div>
        </div>
      </div>
         
    </div>
  );
}
