import React, { useState } from "react";

import { SongListItemWidget } from "@entities/Song";
import { usePaginatedSongs } from "@entities/Song";

import { FlexBox } from "@shared/ui/FlexBox";
import Hr from "@shared/ui/Hr";
import { Typography } from "@shared/ui/Typography";
import noImage from "@shared/assets/icons/no_image_song.png";
import Spinner from "@shared/ui/Spinner";

import clsx from "clsx";
import { GenerateSongsButton } from "@features/generate-songs";

export const SongListWidget: React.FC = () => {
  const [page, setPage] = useState(0);
  const { songs, totalPages, loading } = usePaginatedSongs(page);

  return (
    <>
      <GenerateSongsButton />

      <FlexBox
        direction="col"
        justify="center"
        align="center"
        className="w-full"
      >
        {/* header */}
        <FlexBox
          justify="start"
          align="center"
          className="gap-[35px] py-[10px] px-[25px] w-full"
        >
          <Typography className="text-[#111111] dark:text-[#AAAAAA]">
            #
          </Typography>
          <Typography className="text-[#111111] dark:text-[#AAAAAA]">
            Title
          </Typography>
        </FlexBox>
        <Hr />

        {loading ? (
          <FlexBox
            justify="center"
            align="center"
            className="w-full h-full min-h-[650px]"
          >
            <Spinner className="w-[30px] h-[30px]" />
          </FlexBox>
        ) : (
          <FlexBox
            direction="col"
            justify="start"
            className="w-full h-full  min-h-[650px]"
          >
            {songs?.map((song) => (
              <SongListItemWidget
                key={song.id}
                index={song.id}
                img={noImage}
                title={song.title}
                artist={song.artist}
              />
            ))}
          </FlexBox>
        )}

        {totalPages > 1 && (
          <FlexBox justify="center" className="py-[20px] gap-2 flex-wrap">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={clsx(
                  "px-4 py-1 rounded-lg text-sm transition",
                  i === page
                    ? "bg-accent text-white shadow-md"
                    : "text-black hover:bg-hoverBg dark:text-white dark:hover:bg-hoverBg"
                )}
              >
                {i + 1}
              </button>
            ))}
          </FlexBox>
        )}
      </FlexBox>
    </>
  );
};
