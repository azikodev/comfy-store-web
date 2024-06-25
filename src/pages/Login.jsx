import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="car w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3x1 font-bold">Login</h4>
        <FormInput
          label="email:"
          type="email"
          name="email"
          defaultValue="email@example.com"
        />
        <FormInput
          label="password:"
          type="password"
          name="password"
          defaultValue="type here"
        />
        <div className="mt-10">
          <SubmitBtn text="login" />
        </div>
        <button className="btn btn-secondary btn-block capitalize">
          guest user
        </button>
        <p className="text-center">
          Not a memeber yet:
          <Link to="/register" className="text-primary">
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
