import type { NextPage } from "next";
import CustomBG from "../../components/forms/auth/CustomBG";
import RegisterForm from "../../components/forms/auth/register";
import H2 from "../../components/H2";
import AuthLayout from "../../layouts/AuthLayout";

const Register: NextPage = () => {
  return (
    <AuthLayout>
      <CustomBG>
        <H2 className="text-[#BE6E36]">تسجيل حساب</H2>
      </CustomBG>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
