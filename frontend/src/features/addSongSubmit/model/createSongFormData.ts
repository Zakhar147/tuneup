import { Inputs } from "../types/Inputs";

export const createSongFormData = (data: Inputs): FormData => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("artist", data.artist);
    formData.append("key", data.key);
    formData.append("bpm", data.bpm.toString());
    formData.append("textAndChords", data.text);
    formData.append("videoLessonUrl", data.videoLink);

    formData.append("file", data.tabsFile);

    return formData;
};
