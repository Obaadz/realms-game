import type { NextPage } from "next";
import RegisterForm from "../../components/forms/auth/register";
import H2 from "../../components/H2";
import AuthLayout from "../../layouts/AuthLayout";

const Register: NextPage = () => {
  return (
    <AuthLayout>
      <H2>تسجيل حساب</H2>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
