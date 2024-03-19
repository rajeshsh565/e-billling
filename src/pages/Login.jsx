import { Form, Link, useNavigation } from "react-router-dom";
import FormRow from "../components/FormRow";

const Login = () => {
  const isSubmitting = useNavigation().state === "submitting";
  return (
    <div
      className="container px-0 py-5 overflow-hidden"
      style={{ height:"100vh" }}
    >
      <div
        className="row justify-content-center h-100"
        style={{ marginLeft:"0px" }}
      >
        <div
          className="row shadow rounded-3 align-items-center text-center"
          style={{
            maxWidth: "25rem",
            minHeight: "35rem",
            backgroundColor: "#cccccc",
          }}
        >
          <div>
            <h1 className="mb-5 text-decoration-underline display-4">Login</h1>
            <Form>
              <FormRow type="email" name="email" />
              <FormRow type="password" name="password" />
              <button
                type="submit"
                className="btn btn-secondary btn-outline-dark mt-3 mb-3"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              <p className="lead mt-3">
                Not a user yet?{" "}
                <span>
                  <Link
                    to="/register"
                    className="btn btn-secondary btn-outline-dark"
                  >
                    Register Here
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
export default Login;
