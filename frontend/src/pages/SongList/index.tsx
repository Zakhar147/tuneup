import { FlexBox } from '@shared/ui/FlexBox'
import {SongListWidget} from '@widgets/SongList/ui/SongListWidget'
import React from 'react'

const SongList:React.FC = () => {
  return (
    <FlexBox direction='col' justify='start' align='center' className='w-full min-h-screen'>
        <SongListWidget />
    </FlexBox>
  )
}

export default SongList;