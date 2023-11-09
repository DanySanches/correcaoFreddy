function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    // Ready
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-DuxCYDX9/model.json', modelReady);
}

// Ready
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.error("gotResults")
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'I can hear you, I can see you...' + results[0].label;
        // confidence
        document.getElementById("result_confidence").innerHTML = "It's me" + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        
        img = document.getElementById('Freddy');
        img1 = document.getElementById('Bonnie');
        img2 = document.getElementById('Chica');
        img3 = document.getElementById('Foxy');
        
        if (results[0].label == "music box") {
            img.src = 'freddy.gif';
            img1.src = 'Bonnie_Rabbit.webp';
            img2.src = 'Chica.png';
            img3.src = 'Withered_Foxy.webp';
        }
        // Bonnie com  b maiusculo
        else if (results[0].label == "Bonnie breath") {
            img.src = 'Withered_freddyvr.webp'
            img1.src = 'b.gif'
            img2.src = 'Chica.png'
            img3.src = 'Withered_Foxy.webp'
        }
        else if (results[0].label == "pots and pans") {
            img.src = 'Withered_freddyvr.webp'
            img1.src = 'Bonnie_Rabbit.webp'
            img2.src = 'chica.gif'
            img3.src = 'Withered_Foxy.webp'
        }
        else   {
            img.src = 'Withered_freddyvr.webp'
            img1.src = 'Bonnie_Rabbit.webp'
            img2.src = 'Chica.png'
            img3.src = 'foxy.gif'
        }
    }

}
