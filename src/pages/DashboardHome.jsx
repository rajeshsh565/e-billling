import { pointers } from "../utils/content";
import payments from "../assets/images/payments.svg";

const DashboardHome = () => {
  return (
    <div className="container" style={{ height: "100%" }}>
      <div className="row m-0 align-items-center py-5">
        <div className="col-lg-6 px-5">
          <img
            src={payments}
            alt="payments"
            className="img-fluid w-75 mb-3 d-none d-lg-block"
          />
          <h1 className="fw-bolder display-4" style={{ letterSpacing: "2px" }}>
            Welcome Back,
            <div className="text-secondary text-decoration-underline text-uppercase">
              Rajesh
            </div>
          </h1>
          <p
            className="text-muted fw-bold fst-italic mt-3"
            style={{ letterSpacing: "2px", wordSpacing: "5px" }}
          >
            We're glad to have you here. Manage your electricity bills
            conveniently online. View or update your meter information, access
            bills, track history, and make secure payments.
          </p>
        </div>
        <div className="col-lg-6 text-center mt-3">
          <h3 className="fw-bolder text-dark-emphasis">Getting Started!</h3>
          <p className="fs-5">
            Simplify your electricity management.
            <div className="text-muted fst-italic">
              Explore these features :
            </div>
          </p>
          <div className="text-start">
            <ul>
              {pointers.map((pointer, index) => {
                return (
                  <li className="fs-5 list-inline fw-semibold">
                    {pointer.icon}
                    {pointer.title} :
                    <ul>
                      <li className="list-inline-item fw-normal">
                        {pointer.text}
                      </li>
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardHome;
