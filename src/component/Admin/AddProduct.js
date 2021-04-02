import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Admin.css';

const UploadProduct = () => {
    const { register, handleSubmit, watch, errors} = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        
        const productData = {
            name: data.name,
            price: data.price,
            wight: data.wight,
            imageURL: imageURL
        }
        console.log(productData)
        const url = `murmuring-fjord-44706.herokuapp.com/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(productData)
        })
    };

    const handleUploadImage = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'c873b72a22208e4899e73d2bfe08f63f')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="col-8">
            <form className="addForm" onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="product name" ref={register} />
                <input name="wight" defaultValue="wight" ref={register}/>
                <br/>
                <input name="price" defaultValue="price" ref={register}/>
                <input name="image" type="file" onChange={handleUploadImage}/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default UploadProduct;