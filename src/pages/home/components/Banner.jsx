import about2 from "../../../assets/image/arunnew.png";
import FaIcon from "../../../component/FaIcon";
import SubHeading from "../../../component/typography/SubHeading";
export default function Banner() {
  
  const social_information = [
    {
      icon: "FaFacebookF",
      path: "",
    },
    {
      icon: "FaWhatsapp",
      path: "",
    },
    {
      icon: "FaLinkedinIn",
      path: "",
    },
    {
      icon: "FaGithub",
      path: "",
    }
  ];
  return (
    <div className="banner">
      <div className="my-container pt-md-5">
        <div className="row w-100 g-0 pb-4">
          <div className="col-sm-6 order-2 order-sm-1">
            <div className="banner-header">
              <SubHeading text={"WELCOME TO ARUNWEB"}/>
              <h1 className="name-heading">
                Hi, I'm <span className="text-danger">ARUN SINGH</span> a
                Developer
              </h1>
              <p>
                Passionate and ambitious WEB developer,
always ready to learn new things.
              </p>
               <p>
                I have worked on the multiple project as a react developer.
              </p>
            </div>
            <div className="banner-social py-3">
              <div className="d-flex justify-content-between flex-wrap gap-3">
                <div className="">
                  <small>FIND WITH ME</small>
                  <div className="d-flex gap-2 align-items-center mt-2">
                    {
                      social_information?.map((social)=>{
                        return  <FaIcon
                        name={social?.icon}
                        size={16}
                        // color={color}
                      ></FaIcon>
                      })
                    }
                   
                  </div>
                </div>
                <div className="">
                  <small>RESUME & CONTACT US</small>
                  <div className="d-flex gap-2 align-items-center mt-2">
                    <span className="social pointer">
                      <FaIcon name="FaFileDownload" size={16}></FaIcon>
                    </span>
                    <span className="social pointer">
                      <FaIcon name="FaRegMessage" size={16}></FaIcon>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 order-1 order-sm-2">
            <div className="h-100 d-flex justify-content-md-end baner-image">
              <div className="banner_wrapper ">
                <div className="banner_bg">
                  <img src={about2} alt="" className="banner_image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
