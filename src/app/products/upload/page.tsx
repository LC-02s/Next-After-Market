'use client'
import Button from "@components/common/button";
import Input from "@components/common/input";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function ProductUploadPage() {

  const [ isLoading, setIsLoading ] = useState(false);
  const { 
    handleSubmit, register, setValue, watch, formState: { errors }, reset 
  } = useForm<FieldValues>({ 
    defaultValues: { 
      title: '', description: '', category: '', 
      latitude: 33.5563, longitude: 126.79581, imgSrc: '', price: ''
    } 
  });

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {

  }

  return (
    <form 
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col justify-start items-center gap-4"
    >
      <Input 
        id="title" 
        label="Title" 
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input 
        id="description" 
        label="Description" 
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input 
        id="price" 
        label="Price" 
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        formatPrice
      />

      <Button label="상품 등록하기" />
    </form>
  )
}
