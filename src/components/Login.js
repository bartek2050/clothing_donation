import React from "react";
import Navigation from "./Navigation";
import Decoration from "./elements/Decoration";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

function Login() {
    const {register, handleSubmit, errors, formState} = useForm();

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <>
            <Navigation/>
            <section className={"loginSection"}>
                <Decoration header={`Zaloguj się`}/>
                <div className={"loginBox"}>
                    <form className={"login__formSection"} onSubmit={handleSubmit(onSubmit)} >
                        <div className={"login__formSection-credentials"}>
                            <label>
                                Email
                                <input
                                    name="email"
                                    type="email"
                                    ref={register({
                                        required: {value: true, message: "Email jest wymagany"},
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "Podany email jest nieprawidłowy!",
                                        },
                                    })}/>
                                {errors.email &&
                                <span className={"errorMessage"}>{errors.email.message}</span>}
                            </label>
                            <label>
                                Hasło
                                <input
                                    name="password"
                                    type="password"
                                    ref={register({
                                        required: {value: true, message: "Hasło jest wymagane"},
                                        minLength: {value: 6, message: "Podane hasło jest za krótkie"}
                                    })}
                                    />
                                {errors.password &&
                                <span className={"errorMessage"}>{errors.password.message}</span>}
                            </label>
                        </div>
                        <div className={"login__formSection-buttons"}>
                            <Link to={"/rejestracja"} className={"login__formSection-button"}>Załóż konto</Link>
                            <button className={"login__formSection-buttonLogin"}
                                type="submit">
                                {formState.isSubmitting ? "" : "Zaloguj"}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login;