import axios from "axios";
import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ERROR_MESSAGES } from "../../../../types/enums";
import { User } from "../../../../types/user";
import ErrorSpan from "../../../ErrorSpan";
import Email from "../Email";
import Link from "../Link";
import Password from "../Password";
import CustomForm from "../../CustomForm";
import CustomButton from "../CustomButton";

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
    <CustomForm
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
          console.log(response);
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
      <CustomButton
        isDisabled={isSubmitting}
        className="text-[#BE6E36] hover:text-[#aa5f29]"
      >
        دخول
      </CustomButton>
    </CustomForm>
  );
};

export default LoginForm;
