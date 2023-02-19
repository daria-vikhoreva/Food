const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
    });

    // функция postData возвращает промис
    return await res.json();
}


export {postData};