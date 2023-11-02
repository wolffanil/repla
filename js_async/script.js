////////////////////// 8
// const btn = document.querySelector('#btn');

// btn.addEventListener('click', uploadImage);

// function uploadImage() {
//     let imageContainer = document.getElementById("imageContainer");
//     let status = document.getElementById("uploadStatus");

//     let image = document.createElement('img');
//     image.src = 'https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg';

//     image.addEventListener('load', function() {
//         imageContainer.appendChild(image);
//     });

//     image.addEventListener('error', function() {
//         status.innerHTML = 'Ошибка при загрузке картинки';
//     });
// }

//////////////////////////// 9

//////////////1

// function make(callback) {
//     setTimeout(function() {
//     let res = [1, 2, 3, 4, 5];
//     callback(res); 
//     }, 3000);
// }

// make(function(res) {
//     let sum = 0;
//     for (let i = 0; i < res.length; i++) {
//         sum += res[i];
//     }
//     console.log('Сумма элементов массива:', sum);
// });

///////////// 2

// function make(index1, index2, callback) {
//     setTimeout(function() {
//         let res = [1, 2, 3, 4, 5];
//         let sum = res[index1] + res[index2];
//         callback(sum);
//     }, 3000);
// }

// make(1, 3, function(sum) {
//     console.log('Сумма элементов:', sum);
// });

///////////////// 3

function loadImage(img, callback) {
    let image = document.createElement('img');
    image.src = img;
    
    image.addEventListener('load', function() {
    
        
        callback(image, false);
        
    });
    
    image.addEventListener('error', function() {

        callback('', true);
    });
}

function Status(image, err) {
    if (!err) {
    document.body.append(image);
    } else {
    console.log('произошла ошибка: ' + err);
    }
}

// loadImage('https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg', Status);

/////////////////// 4

const images = ['https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg', 'https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg','https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg', 'https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg','https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg','https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg','https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg','https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg','https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg','https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg'];

function loadImages(images) { 
    if (images.length > 0) { 
        let img = images.shift(); 
        loadImage(img, Status); 
        loadImages(images);
    } }

loadImages(images);




