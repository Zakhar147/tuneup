import { useForm } from "react-hook-form";

import { Inputs, useLoginSubmit } from "@features/loginSubmit";
import { useLoginExistenceValidation } from "@features/validateLogin";

import { SubmitButton } from "@shared/ui/Button";
import { FlexBox } from "@shared/ui/FlexBox";
import FormWrapper from "@shared/ui/FormWrapper";
import { BasicInput } from "@shared/ui/Inputs";
import { Link } from "@shared/ui/Link";
import { Typography } from "@shared/ui/Typography";
import Spinner from "@shared/ui/Spinner";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<Inputs>();

  const { onLoginSubmit, loading } = useLoginSubmit(setError, clearErrors);

  const { validateLogin, isValidating } = useLoginExistenceValidation(
    setError,
    clearErrors
  );

  const isSubmitDisabled = Object.keys(errors).length > 0 || isValidating;

  if (loading)
    return (
      <FlexBox justify="center" align="center">
        <Spinner className="w-full" />
      </FlexBox>
    );

  return (
    <FormWrapper
      onSubmit={handleSubmit(onLoginSubmit)}
      titleSizeClass="text-[36px]"
      title="Login to your Account"
    >
      <FlexBox
        direction="col"
        justify="center"
        align="center"
        className="gap-[15px] w-[100%]"
      >
        <div className="w-full">
          <BasicInput
            placeholder="Username or Email"
            {...register("login", {
              required: "Login is required",
              onChange: (e) => {
                clearErrors("root");
                validateLogin(e.target.value);
              },
            })}
          />
          <Typography
            className="text-[16px] w-full pl-[2px] pt-[5px]"
            colorClassName="text-red-500 "
          >
            {errors.login?.message || ""}
          </Typography>
        </div>

        <div className="w-full">
          <BasicInput
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              onChange: () => clearErrors("root"),
            })}
          />
          <Typography
            className="text-[16px] w-full pl-[2px] pt-[5px]"
            colorClassName="text-red-500"
          >
            {errors.password?.message || ""}
          </Typography>
        </div>
      </FlexBox>
      <FlexBox
        direction="col"
        justify="center"
        align="center"
        className="w-[100%]  gap-[10px]"
      >
        <Typography
          className="text-[16px] w-full pl-[2px] pt-[5px]"
          colorClassName="text-red-500"
        >
          {errors.root?.message || ""}
        </Typography>
        <SubmitButton disabled={isSubmitDisabled} text="Sign in" />
        <FlexBox justify="center" align="center" className="gap-[10px]">
          <Typography colorClassName="text-[#555555]" className="text-[20px]">
            Don't have an account?
          </Typography>
          <Link
            href="/registration"
            hrefText="Sign up"
            colorClassName="text-accent"
            className="font-medium"
          />
        </FlexBox>
      </FlexBox>
    </FormWrapper>
  );
};