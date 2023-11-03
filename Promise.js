////////////////////////// 1
const delayPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Привет, мир!");
    }, 5000);
  });
  
  delayPromise.then((result) => {
    console.log(result);
  });

/////////////////////// 2

const Promise2 = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 6);

    if (randomNumber === 0) {
      reject("Ошибка: деление на ноль невозможно!");
    } else {
      resolve(1 / randomNumber);
    }
});

Promise2.then(
	function(result) {
		console.log(result); 
	},
	function(error) {
		console.log(error); 
	}
);

///////////////////// 3

const Promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Промис выполнен успешно!");
    }, 3000);
  });
  
  console.log("Начальное состояние промиса:", Promise3);
  
  Promise3.then((result) => {
    console.log("Завершенное состояние промиса:", result);
  });

////////////////////// 4

const Promise4 = new Promise((res, rej) => {
    setTimeout(() => {
        rej('Error');
    }, 2000);

});

console.log("Начальное состояние промиса:", Promise4);

Promise4.then(
	function(result) {
		console.log(result); 
	},
	function(error) {
		console.log(error); 
	}
);

//////////////////// 5

function getRandomDelay() {
    const delay = Math.floor(Math.random() * 10) + 1;
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(delay); 
      }, delay * 1000); 
    });
  }
  
  const promises = [];
  
  for (let i = 0; i < 10; i++) {
    const promise = getRandomDelay();
    promises.push(promise);
  }

  console.log(promises);

///////////////////////// 6
  
Promise.race(promises)
  .then((result) => {
    console.log("Результат первого выполненного промиса:", result);
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });