import { useState } from "react";

const FormAuthentification = () => {
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
            <button type="submit"> ok  </button>
        </form>
    )
}

export default FormAuthentification;