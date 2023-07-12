"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const useWatchForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const passwordConfirm = watch("confirm_password");
  const id = watch("id");
  useEffect(() => {
    trigger("id");
    trigger("password");
    trigger("confirm_password");
  }, [password, trigger, id, passwordConfirm]);
  return { errors, password, id, passwordConfirm, register, handleSubmit };
};
