'use client'

import { useState } from "react";
import Input from "@/components/common/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "@/components/common/button";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  
  const [ isLoading, setIsLoading ] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    defaultValues: { name: '', email: '', password: '' }
  });
  const router = useRouter();

  const handleFormSubmit: SubmitHandler<FieldValues> = async (body) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post('/api/register', body);
      console.log('data: ', data);
      router.push('/auth/login');
    } 
    catch(err) { console.warn(err); } 
    finally { setIsLoading(false); }
  }

  return (
    <form 
      onSubmit={handleSubmit(handleFormSubmit)} 
      className="flex flex-col justify-center items-start w-full gap-4"
    >
      <h1 className="text-2xl text-gray-800 font-bold">Register</h1>
      <Input 
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input 
        id="name"
        label="Name"
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
      <Button label="Register" />
      <p className="block w-full text-gray-400 text-center">
        Already a member? 
        <Link href='/auth/login' className="text-blue-500 hover:underline"> Login</Link>
      </p>
    </form>
  )
}
