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
    <FlexBox justify="between" align="center" className="w-full px-[20px]">
      <FlexBox justify="start" align="center" className="w-full">
        <div className="w-[215px] h-[215px] rounded-[7px] overflow-hidden flex-shrink-">
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
          className="w-[50%] pl-[30px]"
        >
          <Typography className="text-[30px]" title>
            {title}
          </Typography>
          <Typography className="text-[20px]">{artist}</Typography>
        </FlexBox>
      </FlexBox>

      <FlexBox
        className="min-w-[130px] gap-[10px]"
        direction="col"
        justify="center"
        align="start"
      >
        <Typography className="text-[17px]">
          Original key: <span className="text-accent "> {songKey}</span>
        </Typography>
        <Typography className="text-[17px]">
          BPM:<span className="text-accent "> {bpm}</span>
        </Typography>
      </FlexBox>
    </FlexBox>
  );
};