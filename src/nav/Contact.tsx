import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


const Contact = () => {
  return (
    <>
      <div className="contact_wrapper">
        <div className="container mx-auto">
          <div className="flex justify-between   items-center">
            <div className="left-contactPage-wrapper animate-slide-in-left mt-[100px]">
              <p className="font-lobster text-[40px]">
                FEEL FREE TO <br />{" "}
                <span className="font-lobster text-[100px]"> CONTACT ME </span>
              </p>
            </div>
            <div className="right-contactPage-wrapper mr-[20px] mt-[100px]">
              <p className="mb-[40px]">
                <a href="" className="flex justify-center items-center">
                  <FaPhoneAlt
                    style={{ fontSize: "30px" }}
                    className="mr-[20px]"
                  />
                  <p>
                    <span>+977 - </span>9824096555
                  </p>
                </a>
              </p>
              <div className="grid  grid-cols-2 gap-4">
                <p>
                  <a
                    href="https://www.facebook.com/profile.php?id=100008581084266"
                    className="flex justify-evenly items-center"
                  >
                    <FaFacebook style={{ fontSize: "30px" }} />
                    <p className="ml-[10px]">Facebook</p>
                  </a>
                </p>
                <p>
                  <a
                    href="https://x.com/Hangthim13"
                    className="flex justify-evenly items-center"
                  >
                    <FaXTwitter style={{ fontSize: "30px" }} />
                    <p className="ml-[10px]">Twitter</p>
                  </a>
                </p>
                <p className="flex justify-evenly items-center">
                  <SiGmail style={{ fontSize: "30px" }} />
                  <p className="ml-[10px]">Gmail</p>
                </p>
                <p>
                  <a
                    href="https://www.instagram.com/ha.ha.hangl/"
                    className="flex justify-evenly items-center"
                  >
                    <FaInstagram style={{ fontSize: "30px" }} />
                    <p className="ml-[10px]">Instagram</p>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
