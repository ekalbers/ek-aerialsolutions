import React from 'react';



const CSRFToken = () => {

  function getCookie(name) {
    // let cookieValue = null;
    // if (document.cookie && document.cookie !== '') {
    //   const cookies = document.cookie.split(';');
    //   for (let i = 0; i < cookies.length; i++) {
    //     const cookie = cookies[i].trim();
    //     // Check if the cookie name matches the CSRF cookie name (usually 'csrftoken')
    //     if (cookie.substring(0, name.length + 1) === name + '=') {
    //       cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    //       break;
    //     }
    //   }
    // }

    // return cookieValue;

    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

    const csrftoken = getCookie('csrftoken');

    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
    );
};
export default CSRFToken;