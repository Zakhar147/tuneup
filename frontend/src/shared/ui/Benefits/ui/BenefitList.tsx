import React from "react";

import { BenefitItem } from "./BenefitItem";

import { Typography } from "@shared/ui/Typography";

import { benefits } from "../model/benefits";

export const BenefitList: React.FC = () => (
  <section
    aria-labelledby="benefits-heading"
    className="flex flex-col gap-8 max-w-prose mx-auto py-8"
  >
    <Typography title  id="benefits-heading" className="font-bold text-[40px] max-md:text-[35px]">
      Why TuneUp ?
    </Typography>

    <ul className="flex flex-col gap-4 list-none p-0 m-0">
      {benefits.map((text) => (
        <BenefitItem key={text} text={text} />
      ))}
    </ul>
  </section>
);
