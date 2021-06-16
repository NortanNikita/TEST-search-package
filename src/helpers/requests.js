const apiUrl = 'https://registry.npmjs.org/-/v1/search?'

async function getData(data = {}) {
    const response = await fetch(apiUrl + new URLSearchParams({...data}));
    if(response.status == 404 || response.status == 400) {
         return response.json().then(json => {
             throw new Error(json.message)
         });
    }
    return response.json();
}

export const FETCH_PACKAGES = (data) => getData({...data})