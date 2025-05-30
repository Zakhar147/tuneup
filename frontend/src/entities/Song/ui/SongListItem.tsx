import { FlexBox } from "@shared/ui/FlexBox";
import { Typography } from "@shared/ui/Typography";
import React from "react";
import { Link } from "react-router-dom";

interface SongListItemWidgetProps {
  index: string;
  img: string;
  title: string;
  artist: string;
}

export const SongListItemWidget: React.FC<SongListItemWidgetProps> = ({
  index,
  img,
  title,
  artist,
}) => {
  return (
    <Link to={`/songs/${index}`} className="w-full">
      <FlexBox className="w-full max-h-[74px] py-[9px] cursor-pointer transition-colors duration-200 hover:bg-hoverBg rounded-[10px]">
        <div className="h-full p-[25px] text-[#111111] dark:text-[#AAAAAA]">
          {index}
        </div>

        <FlexBox justify="start" className="gap-[30px] w-full">
          <div className="max-w-[55px] max-h-[56px] h-[56px] w-[56px]">
            <img
              src={img}
              className="w-full h-full object-cover rounded-[7px]"
              alt="song image"
            />
          </div>
          <FlexBox
            justify="center"
            align="start"
            direction="col"
            className="gap-[5px]"
          >
            <Typography title className="text-[16px] font-medium">
              {title}
            </Typography>
            <Typography className="text-[14px] font-medium">
              {artist}
            </Typography>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Link>
  );
};