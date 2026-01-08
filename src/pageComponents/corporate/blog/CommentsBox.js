"use client";

import { useForm } from "react-hook-form";
import Input from "@/components/Form/FormComponents/Input";

export default function CommentsBox({title = "Comentários", placeholder = "Escreva um comentário", onSubmitComment, minLength = 3,}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        onSubmitComment?.(data.comment);
        reset();
    };

    return (
        <section className="bg-white pb-12">
            <div className="container px-6">
                <div className="border border-graylighter bg-white p-10">
                    <h3 className="text-dark font-semibold text-xl">{title}</h3>
                    <div className="mt-4 h-px bg-graylighter" />
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                        <Input
                            label=""
                            name="comment"
                            placeholder={placeholder}
                            register={register}
                            error={errors.comment?.message}
                            rules={{
                                required: "O comentário é obrigatório",
                                minLength: {value: minLength,
                                    message: `O comentário deve ter no mínimo ${minLength} caracteres`,
                                },
                            }}
                        />
                    </form>
                </div>
            </div>
        </section>
    );
}
