import React from 'react'

import { FlexBox } from '@shared/ui/FlexBox'
import Hr from '@shared/ui/Hr'
import { Typography } from '@shared/ui/Typography'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full">
       <Hr/>
        <FlexBox className='max-md:flex-col p-[20px]' justify='between' align='center' >
            <Typography className='text-[14px]' >Copyright © 2025 TuneUp</Typography>
            <FlexBox justify='between' align='center' className='gap-[34px]'>
                <Typography className='text-[13px]' pointer  >About</Typography>
                <Typography className='text-[13px]' pointer  >Contact</Typography>
                <Typography className='text-[13px]' pointer>Privacy Policy</Typography>
            </FlexBox>
        </FlexBox>
    </footer>
  )
}