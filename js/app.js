// class

// listeners
listeners();
function listeners() {
     document.querySelector("#submitBtn").addEventListener("click", search);
}

// functions
function search(e) {
    e.preventDefault()
    const newsName = document.querySelector('#news-name').value
    const country = document.querySelector('#country').value
    const category = document.querySelector('#category').value

    if (newsName !== '' || country !== '' || category !=='' ) {
        console.log('true');
    } else {
        console.log('false');
    }
}
