import React, { useState } from "react";
import {useUpdateStateContext} from "@/hooks/StateContext";

export const createUrl = process.env.NEXT_PUBLIC_API_CREATE;

const Contact = () => {
  const updateState = useUpdateStateContext()

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const options = {};
      options.method = "POST";
      options.body = JSON.stringify(formData);
      options.headers = {
        'Content-Type': 'application/json',
      };
      const response = await fetch(createUrl, options);
      console.log(await response.text());
    } catch (err) {
      console.error(err);
    }

    updateState({
      contactButton: true,
      Contact: false,
      Thanks: true
    });
  }

  return (
    <>
      <div className='flex items-center justify-center'>
        <form className='w-2/6' onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" id='name' name='name' value={formData.name} onChange={handleChange}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                   required/>
          </div>
          <div className="mb-4">
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
            <input type="text" id='company' name='company' value={formData.company} onChange={handleChange}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                   required/>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" id='email' name='email' value={formData.email} onChange={handleChange}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                   placeholder="email@email.com" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone (Optional)</label>
            <input type='tel' id='phone' name='phone' value={formData.phone} onChange={handleChange}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                   placeholder="XXX-XXX-XXXX"/>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Services Requested
              </label>
            <textarea id='message' name='message' rows="4" value={formData.message} onChange={handleChange}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Describe the project..."/>
          </div>
          <div className='flex items-center justify-center'>
            <button type='submit'
                    className="py-2.5 px-5 mr-2 mb-2 text-md font-medium text-gray-500 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 border-gray-600 hover:bg-gray-100">Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
