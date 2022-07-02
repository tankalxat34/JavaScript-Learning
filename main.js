const getData = url => 
    new Promise((resolve, reject) => 
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

function resolved(data) {
    console.log(data.id)
    console.log('  Total downloads', data.total_downloads)
}

const url = 'https://api.pepy.tech/api/v2/projects/UploadgramPyAPI'
getData(url)
    .then(data => resolved(data))
    .catch(error => console.log(error.message))

