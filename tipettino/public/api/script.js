const btnDog = document.getElementById("btnDog");
const resultDiv = document.getElementById("result");
const errHandler = err => {
    console.error(`error: ${err}`)
    resultDiv.innerHTML = "<p>An error occurred, try again.</p>";
};

function useResult(data) {
    let image = document.createElement('img');
    image.setAttribute('src', data.message);
    image.setAttribute('class', 'resImage');
    resultDiv.innerHTML = "";
    resultDiv.appendChild(image);
}

function callFetch() {
    let data = fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => {
            if (res.ok) {
                res.json()
                    .then(useResult)
                    .catch(errHandler)
            } else {
                resultDiv.innerHTML = "<p>An error occured, try again.</p>";
            }
        })
        .catch(errHandler)
}

btnDog.addEventListener('click', callFetch)
