import { ResendCode } from "@features/resentVerificationCode";
import { useValidateVerificationCode } from "@features/validateVerificationCode";
import { Inputs } from "@features/validateVerificationCode";

import { useForm } from "react-hook-form";

import { FlexBox } from "@shared/ui/FlexBox";
import FormWrapper from "@shared/ui/FormWrapper";
import { BasicInput } from "@shared/ui/Inputs";
import { Typography } from "@shared/ui/Typography";
import Spinner from "@shared/ui/Spinner";

const VerifyForm: React.FC<{
  verifyEmail: string;
}> = ({ verifyEmail }) => {

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<Inputs>();
  
  const { validateCode, loading } = useValidateVerificationCode(
    setError,
    clearErrors
  );

  return (
    <FormWrapper
      onSubmit={handleSubmit((e) => console.log(e.verifyCode))}
      title="Verification"
      className="gap-[15px]"
    >
      <Typography
        className="
          p-[15px] text-[19px] rounded-[10px] text-center
          bg-emerald-100 text-emerald-900
          dark:bg-emerald-900 dark:text-emerald-200
        "
      >
        We've sent a verification code to your email - {verifyEmail}
      </Typography>
      <div className="w-full">
        {loading ? (
          <FlexBox justify="center" className="w-full h-full ">
            <Spinner className="w-[30px] h-[30px]" />
          </FlexBox>
        ) : (
          <BasicInput
            type="number"
            maxLen={8}
            placeholder="Enter verification code"
            {...register("verifyCode", {
              required: "Please enter the code!",
              onChange: (e) => {
                const value = e.target.value;
                if (value.length === 8) {
                  clearErrors("verifyCode");
                  console.log("value BASICINPUT", value);
                  validateCode(value, verifyEmail);
                } else {
                  setError("verifyCode", {
                    type: "manual",
                    message: "Code must be 8 digits long!",
                  });
                }
              },
            })}
          />
        )}
        <Typography
          className="text-[16px] w-full pl-[2px] pt-[5px]"
          colorClassName="text-red-500 "
        >
          {errors.verifyCode?.message || ""}
        </Typography>
      </div>
      <FlexBox
        direction="col"
        justify="center"
        align="center"
        className="gap-[5px] w-full"
      >
        <ResendCode email={verifyEmail} />
      </FlexBox>
    </FormWrapper>
  );
};

export default VerifyForm;
