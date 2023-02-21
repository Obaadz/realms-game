import axios from "axios";
import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ERROR_MESSAGES } from "../../../../types/enums";
import { User } from "../../../../types/user";
import Button from "../../../Button";
import ErrorSpan from "../../../ErrorSpan";
import Email from "../Email";
import Link from "../Link";
import Password from "../Password";
import AuthForm from "../AuthForm";

const BACKEND_URL = process.env.BACKEND_URL as string;

type Props = {};

const LoginForm: NextComponentType<AppContext, AppProps, Props> = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm<Partial<User>>();

  return (
    <AuthForm
      handleSubmit={handleSubmit(async (userForm) => {
        try {
          console.info("BEFORE RESPONSE");
          const response = await axios.post(
            `${BACKEND_URL}/v1/users/login`,
            {
              user: userForm,
            },
            {
              withCredentials: true,
            }
          );
          console.info("AFTER RESPONSE");

          await router.replace("/game");
        } catch (err: any) {
          if (err?.response?.data === ERROR_MESSAGES.INCORRECT_EMAIL_OR_PASSWORD)
            setError("serverError" as any, {
              message: "الايميل الالكتروني او كلمة المرور غير صحيحه",
            });
          else setError("serverError" as any, { message: "حدث خطأ غير معروف" });
        }
      })}
    >
      <Email register={register} emailError={errors.email} clearErrors={clearErrors} />
      <Password
        register={register}
        passwordError={errors.password}
        clearErrors={clearErrors}
        autoComplete="current-password"
      />
      {(errors as any)?.serverError && <ErrorSpan error={(errors as any).serverError} />}
      <Link href="register">حساب جديد</Link>
      <Button isDisabled={isSubmitting}>دخول</Button>
    </AuthForm>
  );
};

export default LoginForm;
