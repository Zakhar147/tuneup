import React from "react";

import { FlexBox } from "@shared/ui/FlexBox";
import { Typography } from "@shared/ui/Typography";

interface SongInfoProps {
  img: string;
  title: string;
  artist: string;
  bpm: number;
  songKey: string;
}

export const SongInfo: React.FC<SongInfoProps> = ({
  img,
  title,
  artist,
  bpm,
  songKey,
}) => {
  return (
    <FlexBox
      justify="between"
      align="center"
      direction="col md:row"
      className="w-full px-4 md:px-[20px] gap-6 md:gap-0"
    >
      {/* Image + Title + Artist */}
      <FlexBox
        justify="start"
        align="center"
        direction="col sm:row"
        className="w-full gap-4 sm:gap-6"
      >
        <div className="w-[180px] h-[180px] sm:w-[215px] sm:h-[215px] rounded-[7px] overflow-hidden">
          <img
            src={img}
            alt="song icon"
            className="w-full h-full object-cover rounded-[7px]"
          />
        </div>
        <FlexBox
          direction="col"
          align="start"
          justify="center"
          className="text-center sm:text-left"
        >
          <Typography className="text-[24px] sm:text-[30px]" title>
            {title}
          </Typography>
          <Typography className="text-[18px] sm:text-[20px]">{artist}</Typography>
        </FlexBox>
      </FlexBox>

      {/* BPM + Key */}
      <FlexBox
        className="gap-2 sm:gap-[10px] mt-4 md:mt-0"
        direction="col"
        justify="center"
        align="start"
      >
        <Typography className="text-[16px] sm:text-[17px]">
          Original key: <span className="text-accent"> {songKey}</span>
        </Typography>
        <Typography className="text-[16px] sm:text-[17px]">
          BPM: <span className="text-accent"> {bpm}</span>
        </Typography>
      </FlexBox>
    </FlexBox>
  );
};
