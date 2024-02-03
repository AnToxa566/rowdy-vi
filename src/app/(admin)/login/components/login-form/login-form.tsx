"use client";

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { Button, Input } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";

import { AppPath, CookieKey } from "@/common/enums";

export interface Inputs {
  login: string;
  password: string;
}

export const LoginForm = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (
      data.login === process.env.ADMIN_LOGIN &&
      data.password === process.env.ADMIN_PASSWORD
    ) {
      setCookie(CookieKey.ACCESS_TOKEN, "future_jwt_token");
      router.push(AppPath.ADMIN);
    } else {
      alert("Ты кто, брат?");
    }
  };

  return (
    <form
      className="w-full max-w-[400px] flex flex-col items-center gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl font-bold">Login</h1>

      <Input
        type="text"
        label="Login"
        {...register("login", { required: true })}
      />

      <Input
        type="password"
        label="Password"
        {...register("password", { required: true })}
      />

      <Button type="submit" color="danger" className="w-full">
        Login
      </Button>
    </form>
  );
};
