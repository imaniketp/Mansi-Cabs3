import React, { useState } from "react";
import "./MyProfile.css";
import profileimg from "../Assets/profileimg.jpg";
import { MdOutlineModeEdit } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyProfile() {
  const [editProfile, setEditProfile] = useState(false);
  const [name, setName] = useState("Aniket Pawar");
  const [bdate, setbdate] = useState("dd-mm-yyyy");
  const [gender, setgender] = useState("Male");
  const [marital, setmarital] = useState("Single");

  let editprofname;
  let editprofbdate;
  let editgender;
  let editmarry;
  const handelName = (e) => {
    editprofname = e.target.value;
  };
  const handelbdate = (e) => {
    editprofbdate = e.target.value;
  };
  const handelGender = (e) => {
    editgender = e.target.value;
  };
  const handelmarry = (e) => {
    editmarry = e.target.value;
  };

  const handelprofedit = () => {
    setName(editprofname);
    setbdate(editprofbdate);
    setgender(editgender);
    setmarital(editmarry);
    setEditProfile(false);
  };
  return (
    <div className="myprofileContainer">
      <div className="myprofleft">
        <img src={profileimg} alt="" />
        <h5>{name}</h5>
      </div>

      <div className="myprofright">
        <div className="mainProfile">
          <div className="mainprofiletop">
            <h2>Profile</h2>
            <div onClick={() => setEditProfile(true)}>
              <MdOutlineModeEdit />
              <p>Edit</p>
            </div>
          </div>

          <div className="mainprofilebottom">
            <div>
              <label htmlFor="">Name</label>
              <input type="text" placeholder={name} readOnly />
            </div>
            <div>
              <label htmlFor="">Birthday</label>
              <input type="text" placeholder={bdate} readOnly />
            </div>
            <div>
              <label htmlFor="">Gender</label>
              <input type="text" placeholder={gender} readOnly />
            </div>
            <div>
              <label htmlFor="">Marital Status</label>
              <input type="text" placeholder={marital} readOnly />
            </div>
          </div>
        </div>
        <Modal
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={editProfile}
          onHide={() => setEditProfile(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Profile Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="editprofile">
              <div>
                <label htmlFor="">Name</label>
                <input type="text" onChange={handelName} />
              </div>
              <div>
                <label htmlFor="">Birthday</label>
                <input
                  type="date"
                  data-date-format="DD MMMM YYYY"
                  onChange={handelbdate}
                />
              </div>
              <div>
                <label htmlFor="">Gender</label>
                <select onClick={handelGender}>
                  <option></option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Marital Status</label>
                <select onClick={handelmarry}>
                  <option></option>
                  <option>Single</option>
                  <option>Married</option>
                </select>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handelprofedit}>Submit</Button>
          </Modal.Footer>
        </Modal>

        <div className="loginDetails">
          <div className="mainprofiletop">
            <h2>Login Details</h2>
            <div>
              <MdOutlineModeEdit />
              <p>Edit</p>
            </div>
          </div>

          <div className="mainprofilebottom">
            <div>
              <label htmlFor="">Mobile</label>
              <input type="number" placeholder="9130439630" readOnly />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" placeholder="aniket@gmail.com" readOnly />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input type="password" placeholder="123456789" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
