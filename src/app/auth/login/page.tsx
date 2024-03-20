'use client'

import { useState } from "react";
import Input from "@components/common/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "@components/common/button";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  
  const [ isLoading, setIsLoading ] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    defaultValues: { email: '', password: '' }
  });

  const handleFormSubmit: SubmitHandler<FieldValues> = async (body) => {
    setIsLoading(true);
    try {
      const response = await signIn('credentials', body);
      console.log('res: ', response);
    } 
    catch(err) { console.warn(err); } 
    finally { setIsLoading(false); }
  }

  return (
    <section className="block w-full max-w-3xl h-auto m-auto px-4 py-12">
      <form 
        onSubmit={handleSubmit(handleFormSubmit)} 
        className="flex flex-col justify-center items-start w-full gap-4"
      >
        <h1 className="text-2xl text-gray-800 font-bold">Login</h1>
        <Input 
          id="email"
          label="Email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input 
          id="password"
          label="Password"
          type="password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Button label="Login" />
        <p className="block w-full text-gray-400 text-center">
          Not a member? 
          <Link href='/auth/register' className="text-blue-500 hover:underline"> Register</Link>
        </p>
      </form>
    </section>
  )
}
