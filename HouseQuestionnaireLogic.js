const selectIds = [
    "swimming-pool",
    "fireplace",
    "enclosed", 
    "office",
    "garage",
    "windows",
    "bathOrShower",
    "en-suit",
    "bathroom",
    "wc",
    "bedroom",
    "kitchen"
];

const submitData = () => {
    selectIds.forEach((name, index) => {
        localStorage.setItem(name, document.getElementsByTagName("select")[index].value);
    })
}

const getData = () => {
    selectIds.forEach(name => {
        document.getElementById(name).innerHTML = localStorage.getItem(name);
    })
}