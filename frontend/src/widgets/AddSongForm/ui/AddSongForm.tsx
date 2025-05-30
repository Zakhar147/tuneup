import { useState } from "react";
import { useForm } from "react-hook-form";

import { KEY_OPTIONS } from "../model/KeyOptions";

import { Inputs, useAddSongSubmit } from "@features/addSongSubmit";

import { Typography } from "@shared/ui/Typography";
import { SubmitButton } from "@shared/ui/Button";
import FormWrapper from "@shared/ui/FormWrapper";
import { BasicInput, FileInput, SelectInput } from "@shared/ui/Inputs";
import { MultilineInput } from "@shared/ui/Inputs/ui/MultiLineInput";
import { FlexBox } from "@shared/ui/FlexBox";
import Spinner from "@shared/ui/Spinner";

export const AddSongForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<Inputs>();

  const [selectedKey, setSelectedKey] = useState("");

  const { onAddSongSubmit, loading } = useAddSongSubmit(setError, clearErrors);

  if (loading)
    return (
      <FlexBox justify="center" align="center">
        <Spinner className="w-full" />
      </FlexBox>
    );

  return (
    <FormWrapper title="Add Song" onSubmit={handleSubmit(onAddSongSubmit)}>
      <div className="w-full">
        <BasicInput
          placeholder="Title"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <Typography colorClassName="text-red-500">
            {errors.title.message}
          </Typography>
        )}
      </div>

      <div className="w-full">
        <BasicInput
          placeholder="Artist"
          {...register("artist", { required: "Artist is required" })}
        />
        {errors.artist && (
          <Typography colorClassName="text-red-500">
            {errors.artist.message}
          </Typography>
        )}
      </div>

      <div className="w-full">
        <SelectInput
          value={selectedKey}
          onChange={(val) => {
            setValue("key", val);
            setSelectedKey(val);
            clearErrors("key");
          }}
          options={KEY_OPTIONS}
          placeholder="Select Key"
        />
        {errors.key && (
          <Typography colorClassName="text-red-500">
            {errors.key.message}
          </Typography>
        )}
      </div>
      <input
        type="hidden"
        {...register("key", { required: "Key is required" })}
      />

      <div className="w-full">
        <BasicInput
          placeholder="BPM"
          type="number"
          maxLen={3}
          {...register("bpm", {
            required: "BPM is required",
            min: { value: 30, message: "Too slow" },
            max: { value: 300, message: "Too fast" },
          })}
        />
        {errors.bpm && (
          <Typography colorClassName="text-red-500">
            {errors.bpm.message}
          </Typography>
        )}
      </div>

      <div className="w-full">
        <MultilineInput
          placeholder={`
  [Intro]
  C     G       Am      F
  Починається шалений біт

  [Verse]
  Am     G          F          C
  Я прийшов на репетицію з лопато́й
  F       G           C
  А тепер я в шоубізнесі

  [Chorus]
  Am     C/G        F          C
  Просто бий в бочку — і все буде добре!
            `}
          {...register("text", { required: "Song text is required" })}
        />
        {errors.text && (
          <Typography colorClassName="text-red-500">
            {errors.text.message}
          </Typography>
        )}
      </div>

      <div className="w-full">
        <FileInput
          onChange={(file) => {
            setValue("tabsFile", file!);
            clearErrors("tabsFile");
          }}
        />
        {errors.tabsFile && (
          <Typography colorClassName="text-red-500">
            {errors.tabsFile.message}
          </Typography>
        )}
      </div>
      <input
        type="hidden"
        {...register("tabsFile", { required: "Tab file is required" })}
      />

      <div className="w-full">
        <BasicInput
          placeholder="YouTube tutorial link"
          {...register("videoLink", {
            required: "Video link is required",
            pattern: {
              value: /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/,
              message: "Invalid YouTube link",
            },
          })}
        />
        {errors.videoLink && (
          <Typography colorClassName="text-red-500">
            {errors.videoLink.message}
          </Typography>
        )}
      </div>

      <SubmitButton disabled={false} text="Add Song" />
    </FormWrapper>
  );
};