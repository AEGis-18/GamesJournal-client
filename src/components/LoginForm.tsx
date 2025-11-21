import { login } from "@/api/token.api";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useAuth } from "./AuthProviders";

type FormFields = {
  username: string;
  password: string;
};

interface LoginFormProps {
  onSuccess: () => void;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const { setAuth } = useAuth();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const response = await login(data.username, data.password);
      if (response) {
        console.log(response);
        setAuth(response);
        onSuccess();
      }
    } catch {
      setError("root", { message: "Username or password do not match" });
      console.log("login failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmmit)}
      className="grid grid-cols-1 gap-1 p-4 w-[200px] rounded-md border-none shadow-md bg-neutral-900 shadow-blue-800"
    >
      <label>Username:</label>
      <input
        {...register("username", { required: true })}
        type="text"
        className="rounded-md border shadow-md bg-neutral-900 "
      />
      {errors.username && (
        <p className="text-red-500 text-sm">{errors.username.message}</p>
      )}
      <label>Password:</label>
      <input
        {...register("password", { required: true })}
        type="password"
        className="rounded-md border shadow-md bg-neutral-900 "
      />

      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password.message} </p>
      )}
      <button disabled={isSubmitting} className="bg-green-500">
        {isSubmitting ? "Loading..." : "Log in"}
      </button>
      {errors.root && (
        <p className="text-red-500 text-sm">{errors.root.message} </p>
      )}
    </form>
  );
}
