import { FaUser } from "react-icons/fa";
import { FormRow, FormTextArea } from "../components";
import { Form, Link, useNavigation } from "react-router-dom";

const Profile = () => {
  const isSubmitting = useNavigation().state === "submitting";
  return (
    <div className="container">
      <div className="row my-lg-5 justify-content-evenly">
        <div className="col-lg-4 mt-lg-5 pt-lg-5 py-3 d-flex">
          <div
            className="rounded-circle bg-secondary overflow-hidden text-center mx-auto mt-lg-5"
            style={{ width: "15rem", height: "15rem", lineHeight: "15rem", zIndex:"999" }}
          >
            <FaUser style={{ fontSize: "12rem", marginBottom: "2rem" }} />
          </div>
        </div>
        <div
          className="col-lg-8 text-center bg-dark-subtle text-black  shadow ms-lg-5"
          style={{ maxWidth: "25rem", marginTop:"-7.5rem", paddingTop:"7.5rem"}}
        >
          <div className="px-5 py-3">
            <h2 className="mb-5 text-decoration-underline">Update User Info</h2>
            <Form>
              <FormRow type="text" name="name" />
              <FormRow type="tel" name="phone" />
              <div className="row">
                <div className="col-6">
                  <FormTextArea rows="6" cols="30" name="address" />
                </div>
                <div className="col-6">
                  <div className="row m-0">
                    <FormRow type="text" name="city" />
                    <FormRow type="text" name="state" />
                  </div>
                </div>
              </div>
              <FormRow
                type="text"
                name="meterNumber"
                labelName="Meter Number"
                disable="true"
              />
              <button className="btn btn-secondary btn-outline-dark mt-3 mb-3">
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
