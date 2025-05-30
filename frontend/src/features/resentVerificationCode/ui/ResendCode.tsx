import { Typography } from "@shared/ui/Typography";

import { useResendCode } from "../model/useResendCode";
import Spinner from "@shared/ui/Spinner";

export const ResendCode: React.FC<{ email: string }> = ({ email }) => {
  console.log(email)
  const { resendCode, cooldown, loading, canResend } = useResendCode(email);

  return (
    <div className="flex flex-col items-center gap-[8px] w-full pl-[2px]">
      {!canResend ? (
        loading ? (
          <div className="w-full h-full pl-[16px]">
            <Spinner className="w-[30px] h-[30px]" />
          </div>
        ) : (
          <Typography className="text-[18px] text-light-textSecond dark:text-dark-textSecond w-full text-left">
            You can resend verification code in {cooldown}s
          </Typography>
        )

      ) : (
        <button
          onClick={resendCode}
          className="text-[18px] text-accent underline bg-transparent hover:opacity-80 w-full text-left pl-[2px]"
        >
          Send verification code email again
        </button>
      )}
    </div>
  );
};
