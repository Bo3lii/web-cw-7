// Database قاعدة البيانات

const chars = [{1:"0123456789"},
{2:"QWERTYUIOPLKJHGFDSAZXCVBNM"},
{3:"qwertyuioplkjhgfdsazxcvbnm"},
{4:" #@$%^&:>.<" }]



// دالة generate

function generate(){

    let randomPassword = ""
    let collection_one = [0]["1"];
    let collection_two = [1]["2"];
    let collection_three =[2]["3"];
    let collection_four =[3]["4"];

randomPassword = randomPassword + collection_one.charsAt(Math.floor(Math.random() * collection_one.length));
randomPassword = randomPassword + collection_two.charsAt(Math.floor(Math.random() * collection_two.length));
randomPassword = randomPassword + collection_three.charsAt(Math.floor(Math.random() * collection_three.length));
randomPassword = randomPassword + collection_four.charsAt(Math.floor(Math.random() * collection_four.length));

display.value = randomPassword  
}