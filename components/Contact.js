import React from "react";

const Contact = ({ toggleContact }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    toggleContact();
  }

  return (
    <>
      <div className='flex items-center justify-center'>
        <form className='w-2/6' onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input type="text" id='name' name='name'
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                     required/>
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
              <input type="text" id='company' name='company'
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                     required/>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="email" id='email' name='email'
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                     placeholder="email@email.com" required/>
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone (Optional)</label>
              <input type='tel' id='phone' name='phone'
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                     placeholder="XXX-XXX-XXXX"/>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Services Requested
                </label>
              <textarea id='message' name='message' rows="4"
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
