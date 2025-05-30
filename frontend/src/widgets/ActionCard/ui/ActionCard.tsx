import { IconProps } from "@shared/assets/Components/type";
import { FlexBox } from "@shared/ui/FlexBox";
import { Link } from "@shared/ui/Link";
import { Typography } from "@shared/ui/Typography";
import React, { ComponentType } from "react";

interface ActionCardProps {
  Icon: ComponentType<IconProps>;
  title: string;
  href: string;
  hrefText: string;
}

export const ActionCard: React.FC<ActionCardProps> = ({
  Icon,
  title,
  href,
  hrefText,
}) => {
  return (
    <FlexBox justify="between" align="center" className="w-full gap-x-[30px]" >
      <FlexBox justify="center" align="center" className="max-w-[130px] max-md:max-w-[115px] bg-accent rounded-[10px] px-[15px] h-[100%]">
        <Icon />
      </FlexBox>
      <FlexBox direction="col" justify="between" align="start" className="flex-1 min-w-0 self-stretch">
        <Typography title className="text-[40px] font-bold max-md:text-[35px]">
          {title}
        </Typography>
        <Link href={href} hrefText={hrefText + " ->"} className="text-[20px] max-md:text-[18px]" />
      </FlexBox>
    </FlexBox>
  );
};