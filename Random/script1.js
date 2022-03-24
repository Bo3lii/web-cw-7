// project أنشئ كائن

const project = {
    type: "tech",
    users: 1000,
    biography () {
        return "this is my project";
    },
};

// randomProperty أنشئ دالة

function randomProperty(x) {
    const keysObject = Object.keys(x);
    const randomNumber = Math.floor(Math.random() * keysObject.length);
    console.log(keysObject['${randomNumber}']);
    console.log(x[`${keysObject[`${randomNumber}`]}`]);
}

randomProperty(project)