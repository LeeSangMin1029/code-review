"use client";
import Dropdown from "@/components/Dropdown";
import { passwordRegex, idRegex } from "@/utils";
import { languageList } from "../data";
import Input from "./Input";
import { useWatchForm } from "@/hooks";

const Form = () => {
  const { errors, handleSubmit, register, password } = useWatchForm();
  const onSubmit = () => {};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col m-6  select-none"
    >
      <Input
        id="id"
        placeholder="아이디"
        title="ID"
        maxLength={10}
        register={register}
        options={{
          required: "아이디를 입력해주세요.",
          pattern: {
            value: idRegex,
            message: "특수문자를 제외한 문자를 입력해주세요.",
          },
        }}
        errors={errors}
      >
        {/* 자동으로 확인하도록 기능 업데이트 예정 */}
        <input
          {...register("duplicated-check", { required: true })}
          id="duplicated-check"
          className="inline-block mx-2"
          type="checkbox"
        />
        <label htmlFor="duplicated-check">중복 확인</label>
      </Input>
      <Input
        register={register}
        id="password"
        placeholder="비밀번호"
        title="Password"
        type="password"
        maxLength={15}
        options={{
          required: "비밀번호를 입력해주세요.",
          pattern: {
            value: passwordRegex,
            message: "비밀번호 규칙을 지켜주세요.",
          },
        }}
        errors={errors}
      />
      <Input
        register={register}
        id="confirm_password"
        placeholder="비밀번호"
        title="Password Check"
        type="password"
        maxLength={15}
        options={{
          required: "비밀번호를 입력해주세요.",
          validate: (val: string) => {
            if (password !== val) {
              return "비밀번호가 일치하지 않습니다.";
            }
          },
        }}
        errors={errors}
      />
      <div className="flex flex-row mb-3 items-center">
        <label htmlFor="mento" className="text-sm">
          Mento
        </label>
        <input
          {...register("mento", { required: "멘토 여부를 확인해주세요." })}
          id="mento"
          type="checkbox"
          className="mx-2 mr-10"
        />
        <Dropdown data={languageList} />
      </div>
      <Input
        register={register}
        id="about"
        placeholder="자기소개"
        title="About"
      />
      <input
        type="submit"
        value="회원가입"
        className="rounded-lg text-white text-xl bg-blue h-14 font-semibold w-full"
      />
    </form>
  );
};

export default Form;
