import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://whispering-brushlands-37507.herokuapp.com/service`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }
    return (
        <div className='w-50 mt-5 mx-auto'>
            <h5>Please add a service</h5>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 rounded' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2 rounded' placeholder='Description' {...register("description")} />
                <input className='mb-2 rounded' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2 rounded' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddService;