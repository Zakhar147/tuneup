import React, { useEffect, useRef, useState } from "react";
import { AlphaTabApi, Settings } from "@coderline/alphatab";
import Spinner from "@shared/ui/Spinner";
import "../styles/tabCss.css";

interface TabsViewProps {
  tabUrl: string;
}

export const TabsView: React.FC<TabsViewProps> = ({ tabUrl }) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasTimeout, setHasTimeout] = useState(false);
  const [api, setApi] = useState<AlphaTabApi | null>(null);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const initAlphaTab = async () => {
      try {
        setHasTimeout(false);
        setIsLoading(true);

        timeoutId = setTimeout(() => {
          setHasTimeout(true);
          setIsLoading(false); // скрываем спиннер при таймауте
        }, 5000);

        const settings = {
          core: {
            file: tabUrl,
            fontDirectory: "/font/",
          },
          player: {
            enablePlayer: false,
            enableCursor: true,
            enableUserInteraction: true,
            soundFont: "/soundfont/sonivox.sf2",
          },
          display: {
            staveProfile: "Tab",
          },
          notation: {
            elements: {
              scoreTitle: false,
              scoreSubTitle: false,
              scoreArtist: false,
              chordDiagrams: false,
            },
          },
        };

        const alphaTab = new AlphaTabApi(
          mainRef.current!,
          settings as unknown as Settings
        );

        alphaTab.renderStarted.on(() => {
          setIsLoading(true);
        });

        alphaTab.renderFinished.on(() => {
          setIsLoading(false);
          clearTimeout(timeoutId);
        });

        setApi(alphaTab);

        return () => {
          alphaTab.destroy();
          clearTimeout(timeoutId);
        };
      } catch (error) {
        console.error("Ошибка при инициализации AlphaTab:", error);
        setIsLoading(false);
        setHasTimeout(true);
        clearTimeout(timeoutId);
      }
    };

    initAlphaTab();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [tabUrl]);

  return (
    <div className="relative w-full h-[600px]">
      <div
        ref={mainRef}
        className="alphaTab w-full h-full bg-transparent overflow-auto"
      />

      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm">
          <Spinner colorClass="bg-transparent" />
        </div>
      )}

      {hasTimeout && (
        <div className="absolute inset-0 z-20 flex items-center justify-center text-white text-center p-4">
          <p className="text-lg text-light-textSecond dark:text-dark-textSecond">
            Unable to load the tab file. It might be corrupted or unsupported.
          </p>
        </div>
      )}
    </div>
  );
};
