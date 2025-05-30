import { useParams } from "react-router-dom";

import { SongInfo } from "@widgets/SongInfo";
import YouTubePlayer from "@widgets/YouTubePlayer";

import { SongSwitcher } from "@features/switchSongMaterial";

import { useSong } from "@entities/Song";

import { FlexBox } from "@shared/ui/FlexBox";
import noImage from "@shared/assets/icons/no_image_song.png";
import Spinner from "@shared/ui/Spinner";

const Song = () => {
  const { id } = useParams();
  const { song, loading, error } = useSong(id || "");


  console.log(song?.tabFilePath);
  return (
    <FlexBox
      direction="col"
      align="center"
      justify="start"
      className="gap-[65px] w-full min-h-screen py-[42px]"
    >
      {loading || !song ? (
        <FlexBox justify="center" className="w-full h-full ">
          <Spinner className="w-[30px] h-[30px]" />
        </FlexBox>
      ) : (
        <>
          <SongInfo
            img={noImage}
            title={song.title}
            artist={song.artist}
            bpm={song.bpm}
            songKey={song.key}
          />
          <YouTubePlayer url={song.videoLessonUrl} />
          <SongSwitcher
            tabUrl={`${import.meta.env.VITE_BASE_URL}/songs/${song.id}/tab`}
            chords={song.textAndChords}
          />
        </>
      )}
    </FlexBox>
  );
};

export default Song;