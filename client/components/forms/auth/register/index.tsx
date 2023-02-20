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
import Age from "./Age";

const BACKEND_URL = process.env.BACKEND_URL as string;

type Props = {};

const RegisterForm: NextComponentType<AppContext, AppProps, Props> = () => {
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
          const response = await axios.post(
            `${BACKEND_URL}/v1/users/register`,
            {
              user: userForm,
            },
            {
              withCredentials: true,
            }
          );
        } catch (err: any) {
          if (err?.response?.data === ERROR_MESSAGES.DUPLICATE)
            setError("email", { message: "هذا الايميل مستخدم بالفعل" });
          else setError("serverError" as any, { message: "حدث خطأ غير معروف" });
        }
      })}
    >
      <Email register={register} emailError={errors.email} clearErrors={clearErrors} />
      <Password
        register={register}
        passwordError={errors.password}
        clearErrors={clearErrors}
        autoComplete="new-password"
      />
      <Age register={register} ageError={errors.age} clearErrors={clearErrors} />
      {(errors as any)?.serverError && <ErrorSpan error={(errors as any).serverError} />}
      <Link href="login">تسجيل الدخول</Link>
      <Button>تسجيل</Button>
    </AuthForm>
  );
};

export default RegisterForm;
