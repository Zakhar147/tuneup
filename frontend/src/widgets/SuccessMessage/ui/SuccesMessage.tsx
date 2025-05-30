import { Typography } from "@shared/ui/Typography";
import { FlexBox } from "@shared/ui/FlexBox";
import { Button } from "@shared/ui/Button";

const SuccessMessage = () => {
  return (
    <FlexBox
      direction="col"
      align="center"
      justify="center"
      className="min-h-screen text-center px-4"
    >
      <Typography
        as="h2"
        className="text-[28px] font-bold mb-4 text-green-400 dark:text-green-300"
      >
        Registration Successful!
      </Typography>

      <Typography className="text-[18px] max-w-[400px] mb-6 text-zinc-700 dark:text-zinc-300">
        You have successfully verified your email. Now you can login to your
        account and start using TuneUp.
      </Typography>
      <Button text="Sign in" link="/login" />
    </FlexBox>
  );
};

export default SuccessMessage;