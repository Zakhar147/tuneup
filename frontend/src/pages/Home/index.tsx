import React from "react";

import { ActionCard } from "@widgets/ActionCard/ui/ActionCard";

import { useAuthStore } from "@entities/User";

import { BassGuitarIcon } from "@shared/assets/Components/BassGuitarIcon";
import { NoteIcon } from "@shared/assets/Components/NoteIcon";
import { Button } from "@shared/ui/Button";
import { FlexBox } from "@shared/ui/FlexBox";
import { Typography } from "@shared/ui/Typography";
import { BenefitList } from "@shared/ui/Benefits";

const Home: React.FC = () => {
  const auth = useAuthStore((state) => state.auth);

  return (
    <FlexBox
      direction="col"
      justify="center"
      align="center"
      className="w-full h-full gap-[115px] py-[141px] "
    >
      <FlexBox
        direction="col"
        justify="center"
        align="center"
        className="gap-[15px]"
      >
        <Typography
          title
          className="text-[48px]/[53px] text-center  font-bold  max-md:max-w-[520px] max-md:text-[40px]"
        >
          Play and Grow up with TuneUp!
        </Typography>
        <Typography className="w-full text-center max-w-[500px] mx-auto break-words text-[20px] font-medium max-md:text-[18px] max-md:max-w-[400px]">
          TuneUp helps you learn to play bass with tabs and chords for all your
          favorite songs.
        </Typography>
        {auth ? null : <Button text="Create Account" link="/registration" />}
      </FlexBox>

      <FlexBox direction="col" className="max-w-[600px] mx-auto gap-[70px]">
        <ActionCard
          Icon={BassGuitarIcon}
          title="Start Playing"
          href="/songs"
          hrefText="Get started"
        />
        <ActionCard
          Icon={NoteIcon}
          title="Explore Songs"
          href="/songs"
          hrefText="View songs"
        />
      </FlexBox>

      <FlexBox direction="col" justify="between" align="center">
        <BenefitList />
      </FlexBox>
    </FlexBox>
  );
};

export default Home;