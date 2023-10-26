//Задание 1
// let str = 'aba aca aea abba adca abea';
// console.log(str.replace(/a..a/g,''));
//Задание 2
// let str = 'aa aba abba abbba abca abea';
// let res = str.replace(/ab*a/g, '!');
// console.log(res);
//Задание 3
// let str = 'ab abab abab abababab abea';
// let res = str.replace(/(ab)/g, '!');
// console.log(res);
//Задание 4
// let str = 'a.a aba aea';
// let res = str.replace(/a\.a/g, '!');
// console.log(res);
//Задание 5
// let str = 'aa aba abba abbba abbbba abbbbba';
// let res = str.replace(/ab{1,3}a/g, '!');
// console.log(res);
//Задание 6
// let str = 'aba accca azzza wwwwa';
// let res = str.replace(/a.+?a/g, '!');
// console.log(res);
//Задание 7
// let str = 'a1a a22a a333a a4444a a55555a aba aca';
// let res = str.replace(/a\d+?a/g, '!');
// console.log(res);
//Задание 8
// let str = 'a1a az3a a7a a9a aba';
// let res = str.replace(/a[3-6]*a/g, '!');
// console.log(res);
//Задание 9
// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// let res = str.replace(/a[a-z0-9]+a/g, '!');
// console.log(res)
//Задание 10
// let str = 'x2z x9z';
// let res = str.replace(/x[^2-7]z/g, '!');
// console.log(res)

//Задание 11
// let str = 'xz xaZ4z';
// let res = str.replace(/x[^a-zA-Z1-5]*z/g, '!')
// console.log(res)

//Задание 12
// let str = 'wйw wяw wёw wqw';
// let res = str.replace(/w[а-яё]*w/g, '!');
// console.log(res);

//Задание 13

// let str = 'xaz x.z x3z x@z x$z xrz';
// let res = str.replace(/x[^.@$]z/g, '!');
// console.log(res);

//Задание 14
// let str = '1.23 4 56.7 8.9.0 ac';
// let res = str.replace(/[\d.]+/g, "!");
// console.log(res);

//Задание 15
// let str = 'x[]z x[[]]z x()z';
// let res = str.replace(/x\[[^\]]*\]z/g, '!');
// console.log(res);

//Задание 16
// let str = '^xx axx ^zz bkk @ss';
// let res = str.replace(/[\^@][a-zA-Z]{2}/g, '!');
// console.log(res);

//Задание 17
// let str = 'xaz xBz xcz x-z x@z';
// let res = str.replace(/x[a-zA-Z-]z/g, "!");
// console.log(res);

//Задание 18
// let str = 'abc def xyz';
// let res =str.replace(/[a-zA-Z]+/, "!");
// console.log(res)

//Задание 19
// let str = `abc
// def
// ghi
// jkl`;

// let res = str.replace(/^(.*)$/gm, "!$1");

// console.log(res);

//Задание 20
// let str = `
// abc
// def
// ghi
// jkl`;

// let res = str.replace(/$/gm, "!");

// console.log(res);

//Задание 21
// let str = "aeeea aeea aea axa axxa axxxa";
// let res = str.replace(/a(e+|x+)a/g, "!");

// console.log(res);

//Задание 22
// let str = "a aa aaa aaaa aaaa";
// let res = str.replace(/a+/, "!");

// console.log(res);

//Задание 23
// let str = "https://www.youtube.com/";
// let res = /^(http:\/\/|https:\/\/)/.test(str);
// console.log(res);

//Задание 24
// let str = "1";
// let str2 = "1234567890123";
// let res = /^\d{1,12}$/.test(str);
// let res2 = /^\d{1,12}$/.test(str2);
// console.log(res);
// console.log(res2);

//Задание 25
// let str = "12:59:59";
// let str2 = "24:00:00";

// let res = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(str);
// let res2 = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(str2);
// console.log(res);
// console.log(res2);

//Задание 26
// let str = "112.youtube.com";
// let str2 = "youtube";

// let res = /^([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,}$/.test(str);
// let res2 = /^([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,}$/.test(str2);
// console.log(res);
// console.log(res2);

//Задание 27
// let str = "aaa 123 bbb";
// let res = str.search(/\d+/);
// console.log(res);

//Задание 28
// const str = "31.12.2025";
// const regex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
// const match = str.match(regex);
// const day = match[1];
// const month = match[2];
// const year = match[3];
// console.log("Day:", day);
// console.log("Month:", month);
// console.log("Year:", year);

//Задание 29
// let str = "a1b c34d x567z";
// const regex = /\d+/g;
// const matches = str.match(regex);
// let sum = 0;

// sum = matches.reduce((arr, cor) => arr + Number(cor), 0);
// console.log(sum);

//Задание 30
// const str = "12:37 15:48 17:59";
// const regex = /(\d{2}):(\d{2})/g;

// const matches = [...str.matchAll(regex)];

// matches.forEach((match) => {
//   const hours = match[1];
//   const minutes = match[2];

//   console.log(`Часы: ${hours}, Минуты: ${minutes}`);
// });

//Задание 31
// const str = "12:37 15:48 17:59";
// const regex = /(\d{2}):(\d{2})/g;

// regex.lastIndex = 4;
// let match;

// while ((match = regex.exec(str))) {
//   const hours = match[1];
//   const minutes = match[2];

//   console.log(`Часы: ${hours}, Минуты: ${minutes}`);
// }

//Задание 32
// const str = "12 34 56 78";
// const res = str.replace(/\b(\d)(\d)\b/g, "$2$1");

// console.log(res);

//Задание 33
// const str = "123 456 789";

// const res = str.replace(/\d+/g, function (match) {
//   return match.split("").reverse().join("");
// });

// console.log(res);

//Задание 34
// let str = "sss site.ru zzz site.com kkk";
// const regex = /(\S+\.\S+)/g;

// const res = str.replace(regex, '<a href="http://$1">$1</a>');

// console.log(res);

//Задание 35
// const str = "a aa aaa aaaa aaaaa";
// const regex = /(\w)\1+/g;

// const matches = str.match(regex);

// console.log(matches);

//Задание 36
// const str = "12:59:59";
// const regex = /(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})/;

// const match = str.match(regex);

// const hours = match.groups.hours;
// const minutes = match.groups.minutes;
// const seconds = match.groups.seconds;

// console.log(`часы: ${hours}, минуты: ${minutes}, секунды: ${seconds}`);
//Задание 37
// const str = '<a href="" class="eee" id="zzz">';
// const regex = /(?<=\s)(\w+)(?==)/g;

// const matches = str.match(regex);

// console.log(matches);

//Задание 38

// let str = "sss site.ru zzz site.com kkk";
// let arr = ["ru", "by", "ua"];

// const reversedDomains = str.replace(/(\w+)\.(\w+)/g, (match, domain, zone) => {
//   if (arr.includes(zone)) {
//     return domain.split("").reverse().join("") + "." + zone;
//   }
//   return match;
// });

// console.log(reversedDomains);

//Задание 39
// let str = "x.y xay xby";
// let reg = new RegExp("x\\.y", "g");
// let res = str.match(reg);

// console.log(res);
