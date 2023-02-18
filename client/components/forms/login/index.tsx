import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import Button from "../../Button";
import Email from "../Email";
import Link from "../Link";
import Password from "../Password";
import AuthForm from "../ِAuthForm";

type Props = {};

const LoginForm: NextComponentType<AppContext, AppProps, Props> = () => {
  return (
    <AuthForm>
      <Email />
      <Password />
      <Link href="register">حساب جديد</Link>
      <Button>دخول</Button>
    </AuthForm>
  );
};

export default LoginForm;
