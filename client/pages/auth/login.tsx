import type { NextPage } from "next";
import CustomBG from "../../components/forms/auth/CustomBG";
import LoginForm from "../../components/forms/auth/login";
import H2 from "../../components/H2";
import AuthLayout from "../../layouts/AuthLayout";

const Login: NextPage = () => {
  return (
    <AuthLayout>
      <CustomBG>
        <H2 className="text-[#BE6E36]">تسجيل الدخول</H2>
      </CustomBG>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
