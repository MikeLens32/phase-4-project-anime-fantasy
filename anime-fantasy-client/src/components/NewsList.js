import React from 'react'

const NewsList = () => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'animi.p.rapidapi.com',
            'X-RapidAPI-Key': '143759488dmshbaba0d74386851ap1e5e19jsnd6341f86709b'
        }
    };
    
    fetch('https://animi.p.rapidapi.com/name?name=Levi', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return (
        <div>
            
        </div>
    )
}

export default NewsList
