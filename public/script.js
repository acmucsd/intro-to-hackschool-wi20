fetch("http://localhost:3001/recommendation?", {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
})
.then((response) => response.json())
.then(data => {
        console.log(data);
        const headingEl = document.querySelector("#flavor");
        headingEl.innerHTML = data["favorite"];
    }
);