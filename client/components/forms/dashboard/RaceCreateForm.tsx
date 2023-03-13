import axios from "axios";
import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
import { useForm } from "react-hook-form";
import { BACKEND_URL } from "../../../pages/_app";
import { createRace } from "../../../services/race";
import { ERROR_MESSAGES } from "../../../types/enums";
import { Race } from "../../../types/race";
import Button from "../../Button";
import ErrorSpan from "../../ErrorSpan";
import CustomForm from "../CustomForm";
import BaseState from "./BaseState";
import Description from "./Description";
import Name from "./Name";

type Props = {};

const RaceCreateForm: NextComponentType<AppContext, AppProps, Props> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm<Omit<Race, "_id">>();

  return (
    <CustomForm
      handleSubmit={handleSubmit(async (raceForm) => {
        try {
          const data = await createRace(raceForm);
        } catch (err: any) {
          if (err?.response?.data === ERROR_MESSAGES.DUPLICATE)
            setError("serverError" as any, {
              message: "اسم العرق موجود بالفعل",
            });
          else setError("serverError" as any, { message: "حدث خطأ غير معروف" });
        }
      })}
    >
      <Name register={register} nameError={errors.name} clearErrors={clearErrors} />
      <Description
        register={register}
        descriptionError={errors.description}
        clearErrors={clearErrors}
      />
      <div className="relative grid translate-x-[-.75%] items-center justify-center gap-3">
        <div className="flex gap-3">
          <BaseState
            register={register}
            baseStateError={(errors.base_state as any)?.health}
            clearErrors={clearErrors}
            baseState="health"
            placeholder="صحه"
          />
          <BaseState
            register={register}
            baseStateError={(errors.base_state as any)?.magic}
            clearErrors={clearErrors}
            baseState="ride_speed"
            placeholder="سرعة الركوب"
          />
        </div>
        <div className="flex gap-3">
          <BaseState
            register={register}
            baseStateError={(errors.base_state as any)?.defense}
            clearErrors={clearErrors}
            baseState="physical_defense"
            placeholder="دفاع بدني"
          />
          <BaseState
            register={register}
            baseStateError={(errors.base_state as any)?.magic}
            clearErrors={clearErrors}
            baseState="magic_attack"
            placeholder="هجوم سحري"
          />
        </div>
        <div className="flex gap-3">
          <BaseState
            register={register}
            baseStateError={(errors.base_state as any)?.defense}
            clearErrors={clearErrors}
            baseState="magic_defense"
            placeholder="دفاع سحري"
          />
          <BaseState
            register={register}
            baseStateError={(errors.base_state as any)?.attack}
            clearErrors={clearErrors}
            baseState="physical_attack"
            placeholder="هجوم بدني"
          />
        </div>
      </div>
      {(errors as any)?.serverError && <ErrorSpan error={(errors as any).serverError} />}
      <Button isDisabled={isSubmitting}>انشاء</Button>
    </CustomForm>
  );
};

export default RaceCreateForm;
