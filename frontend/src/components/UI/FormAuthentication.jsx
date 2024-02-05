import { useState } from "react";

const FormAuthentication = () => {
    const [input, setInput] = useState("");

    const onChangeInput = (e) => {
        const value = e.target.value
        setInput(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <label>
                <input type="tel" value={input} onChange={onChangeInput}/>
            </label>
            <label>
                <input type="password"/>
            </label>
            <button type="submit"> ok  </button>
        </form>
    )
}

export default FormAuthentication;