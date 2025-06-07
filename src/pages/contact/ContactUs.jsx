import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";
import FaIcon from "../../component/FaIcon";
import arun_singh2 from "../../assets/image/arun_singh2.jpeg";
import Input from "../../component/input/Input";
import TextArea from "../../component/input/TextArea";
import PrimaryBTN from "../../component/buttons/PrimaryBTN";
import Button from "../../component/buttons/Button";
export default function ContactUs() {
  return (
    <div>
      <div className="my-container py-5">
        <div className="row gy-3">
          <div className="col-md-4">
            <div class="card contact-card w-100 h-100">
              <div className="p-3 ">
                <div className="w-100 contact-image-wrapper">
                  <img src={arun_singh2} class="card-img-top" alt="..." />
                </div>
              </div>

              <div class="card-body">
                <h4 className="mb-0">Arun Singh</h4>
                <small>Full Stack developer</small>
                <p class="card-text">
                  I am available for freelance work. Connect with me via and
                  call in to my account.
                </p>
                <p className="card-text">
                  Phone: +01234567890 Email: admin@example.com
                </p>
                <div>
                  <div className="mb-3">contact via </div>
                  <div className="d-flex gap-2 align-items-center">
                    <span className="social">
                      <FaIcon name="FaFacebookF" size={16}></FaIcon>
                    </span>
                    <span className="social">
                      <FaIcon name="FaWhatsapp" size={16}></FaIcon>
                    </span>
                    <span className="social">
                      <FaIcon name="FaLinkedinIn" size={16}></FaIcon>
                    </span>
                    <span className="social">
                      <FaIcon name="FaGithub" size={16}></FaIcon>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div class="card w-100 h-100 contact-card">
              <div class="card-body w-100">
                <form>
                  <div className="row">
                    <div className="col-6">
                      <div class="mb-3">
                        <label for="name" class="form-label">
                          Full Name
                        </label>
                        <Input
                          type="text"
                          id="name"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div class="mb-3">
                        <label for="phone" class="form-label">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          id="phone"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="email" class="form-label">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="subject" class="form-label">
                      Subject
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      placeholder="Enter subject"
                      required
                    />
                    
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label">
                      Message
                    </label>
                    <TextArea
                    
                      rows="7"
                      placeholder="Type your message here..."
                      required
                    />
                   
                  </div>
                  <Button
                  type="submit" text={"Send Message"}
                  >Send Message</Button>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
