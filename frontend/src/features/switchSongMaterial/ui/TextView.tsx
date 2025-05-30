import React, { useEffect, useState } from "react";
import ChordSheetJS, { Line, Song } from "chordsheetjs";
import { FlexBox } from "@shared/ui/FlexBox";

//TODO: поменять типы где any

type Section = {
  title: string;
  lines: Line[];
};

const extractTitle = (line: any): string | null => {
  const text = line.items?.[0]?.lyrics;
  const match = text?.match(/\[(.+?)\]/);
  return match ? match[1] : null;
};

interface TextViewProps {
  chordSheet: string
}

export const TextView: React.FC<TextViewProps> = ({
  chordSheet
}) => {
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {

    const textAndChords = chordSheet;

    const parser = new ChordSheetJS.ChordsOverWordsParser();
    const song: Song = parser.parse(textAndChords);

    const grouped: Section[] = [];
    let currentSection: Section | null = null;

    for (const line of song.lines) {
      const title = extractTitle(line);

      if (title) {
        currentSection = { title, lines: [] };
        grouped.push(currentSection);
      } else if (currentSection) {
        currentSection.lines.push(line);
      }
    }

    setSections(grouped);
  }, []);

  const isChordLineItem = (item: any): item is { chords: string; lyrics: string } =>
    typeof item.chords === "string" || typeof item.lyrics === "string";

  return (
    <FlexBox direction="col" justify="center" align="start" className="w-full gap-[40px] pl-[48px] pt-[40px]">
      {sections.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className="relative border border-[#E95420] rounded-[32px] px-4 py-4 max-w-[441px]"
        >
          <div className="absolute -top-3 left-4 bg-[#E95420]  text-[#FFFFFF] dark:text-[#E95420] dark:bg-black px-[30px] py-1 rounded-full text-[20px] font-semibold">
            {section.title}
          </div>

          {section.lines.map((line, lineIndex) => (
            <div key={lineIndex} className="flex flex-col mt-4">
              <div className="flex flex-wrap gap-2 text-[17px] text-[#E95420] font-medium mb-1">
                {line.items
                  .filter(isChordLineItem)
                  .map((item: any, j) =>
                    item.chords ? (
                      <span
                        key={j}
                        className=" text-[17px] text-[#E95420]  font-medium px-2 py-1 rounded-md "
                      >
                        {item.chords}
                      </span>
                    ) : null
                  )}
              </div>
              <div className="text-light-textSecond dark:text-dark-textSecond text-[17px]">
                {line.items
                  .filter(isChordLineItem)
                  .map((item: any, j) =>
                    item.lyrics ? (
                      <span key={j} className="inline-block">
                         {item.lyrics.replace(/ /g, '\u00A0')}
                      </span>
                    ) : null
                  )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </FlexBox>
  );
};
