'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";




export default function FormSuccess() {

  const router = useRouter();
  const searchParams  = useSearchParams();
  const [formSubmit, setFormSubmit] = useState(false);

  useEffect(() => {
    if (searchParams.get('formsubmit')) {
      setFormSubmit(true);
      router.push("/contact");
    }
  }, []);

  return (
    formSubmit && <div className="">
      <div className="h-full flex text-accentcol items-center text-xl">
        <p className="">Success!</p>
        <BsCheck size={25} />
      </div>
      <p className="">I will be in contact shortly.</p>
    </div>
  )
}