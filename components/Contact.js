import React, { useState } from "react";

export const createUrl = process.env.NEXT_PUBLIC_API_CREATE;
export const csrfUrl = process.env.NEXT_PUBLIC_API_CSRFTOKEN


const Contact = ({ toggleContact }) => {
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

function getCookie(name) {
    let cookieValue = null;

    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();

            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));

                break;
            }
        }
    }

    return cookieValue;
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));

    try {
      // let csrf = await fetch(csrfUrl)
      // console.log(csrf);
      // let data = await csrf.json();
      // console.log(data);
      // let token = data.csrfToken;
      // console.log(token);
      const options = {};
      options.method = "POST";
      options.body = formData;
      options.credentials = 'include';
      options.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': getCookie('csrftoken')
      };
      console.log(createUrl);
      console.log(options);
      const response = await fetch(createUrl, options);
      console.log(response);
      console.log(await response.text());
    } catch (err) {
      console.log("error", err);
    }

    toggleContact();
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
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
