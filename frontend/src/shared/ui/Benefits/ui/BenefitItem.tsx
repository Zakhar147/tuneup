import React from 'react';

import { CheckMark } from '@shared/assets/Components/CheckMark';
import { Typography } from '@shared/ui/Typography';

interface BenefitItemProps {
  text: string;
}

export const BenefitItem: React.FC<BenefitItemProps> = ({ text }) => (
  <li className="flex items-center gap-[20px]">
    <CheckMark className="w-[40px] max-md:w-[30px] flex-shrink-0" />
    <Typography as="span" className="text-[20px] max-md:text-[18px]">
      {text}
    </Typography>
  </li>
);