import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import Button from "../../Button";
import Email from "../Email";
import Link from "../Link";
import Password from "../Password";
import AuthForm from "../ِAuthForm";
import Age from "./Age";

type Props = {};

const RegisterForm: NextComponentType<AppContext, AppProps, Props> = () => {
  return (
    <AuthForm>
      <Email />
      <Password />
      <Age />
      <Link href="login">تسجيل الدخول</Link>
      <Button>تسجيل</Button>
    </AuthForm>
  );
};

export default RegisterForm;
