import { useState } from "react";
import { useNavigate } from "react-router-dom";
const MailboxForm = (props) => {

    const navigate = useNavigate();

    const initialState = {
        boxholder: '',
        size: 'Small',

    }


    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {

        e.preventDefault()
        props.addBox(formData)

        setFormData(initialState)

        navigate('/mailboxes')
    }

    return (

        <>

            <form onSubmit={handleSubmit}>
                <label htmlFor="">Boxholder</label>
                <input type="text" onChange={handleChange} value={formData.boxholder} name="boxholder" />
                <label htmlFor=""></label>
                <select onChange={handleChange} name="size" value={formData.size}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>

                <button type="submit"> submit </button>
            </form>
        </>
    )


}

export default MailboxForm