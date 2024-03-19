import { Form, Link, useNavigation } from "react-router-dom";
import { FormRow, FormTextArea } from "../components";

const Register = () => {
  const isSubmitting = useNavigation().state === "submitting";
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div
          className="row shadow rounded-3 text-center py-5 mx-0"
          style={{
            maxWidth: "25rem",
            minHeight: "35rem",
            background: "#cccccc",
          }}
        >
          <div>
            <h2 className="mb-5 text-decoration-underline">Register</h2>
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
              />
              <FormRow type="email" name="email" />
              <FormRow type="password" name="password" />
              <button className="btn btn-secondary btn-outline-dark mt-3 mb-3">
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              <p className="lead mt-3">
                Already Registered?{" "}
                <span>
                  <Link
                    to="/login"
                    className="btn btn-secondary btn-outline-dark"
                  >
                    Login Here
                  </Link>
                </span>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
