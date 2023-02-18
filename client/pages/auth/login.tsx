import type { NextPage } from "next";
import LoginForm from "../../components/forms/login";
import H2 from "../../components/H2";
import AuthLayout from "../../layouts/AuthLayout";

const Login: NextPage = () => {
  return (
    <AuthLayout>
      <H2>تسجيل الدخول</H2>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
