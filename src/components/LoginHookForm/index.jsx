import { useForm } from "react-hook-form";

const LoginHookForm = () => {
    const { handleSubmit, register, formState: { errors } } = useForm({
        defaultValues: {
            login: "dcsdcsdcsdcsd",
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    console.log(errors);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <span>login</span>
                <input type="text" {...register("login")}/>
            </label>

            <label>
                <span>password</span>
                <input type="password" {...register("password", { required: true })} />
            </label>

            <input type="checkbox" {...register("guarantee")}/>

            <button type="submit">login</button>
        </form>
        </>
    )
};

export default LoginHookForm;