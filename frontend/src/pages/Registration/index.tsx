import { useRegistrationStore } from "@features/registrationSubmit/model/store";
import { FlexBox } from "@shared/ui/FlexBox";

import Spinner from "@shared/ui/Spinner";
import { lazy } from "react";

const RegistrationForm = lazy(() =>
  import("@widgets/RegistrationForm").then((mod) => ({
    default: mod.RagistrationForm,
  }))
);

const VerifyForm = lazy(() =>
  import("@widgets/Verify").then((mod) => ({
    default: mod.VerifyForm,
  }))
);

const SuccesMessage = lazy(() =>
  import("@widgets/SuccessMessage").then((mod) => ({
    default: mod.SuccesMessage,
  }))
);

const RegistrationPage = () => {
  const { step, loading, verifyEmail } = useRegistrationStore();

  if (loading)
    return (
      <FlexBox justify="center" align="center">
        <Spinner className="w-full" />
      </FlexBox>
    );

  switch (step) {
    case "register":
      return <RegistrationForm />;
    case "verify":
      return <VerifyForm verifyEmail={verifyEmail} />;
    case "success":
      return <SuccesMessage />;
    default:
      return null;
  }
};

export default RegistrationPage;