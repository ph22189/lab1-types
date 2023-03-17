//Array
var arr = [1, 2, 3];
var arr2 = [[1, 2, 3], [4, 5, 6]];
//Any
var str3 = 10;
str3 = "hello";
str3 = [1, 2, 3];
//Tuples
var tuples = ["vo", "hd", 20];
//enum
var STATUS;
(function (STATUS) {
    STATUS[STATUS["PENDING"] = 0] = "PENDING";
    STATUS[STATUS["REJECTED"] = 1] = "REJECTED";
    STATUS[STATUS["FULFIL"] = 2] = "FULFIL";
})(STATUS || (STATUS = {}));
var trangThai1 = STATUS.PENDING;
console.log(trangThai);
var CODE;
(function (CODE) {
    CODE[CODE["SUCCESS"] = 200] = "SUCCESS";
    CODE[CODE["CLIENT_ERROR"] = 400] = "CLIENT_ERROR";
    CODE[CODE["SERVER_ERROR"] = 401] = "SERVER_ERROR";
})(CODE || (CODE = {}));
var sinhvieN = {
    name: "Nam cuong",
    age: 20
};
var sinhvien2 = {
    name: "Nam ",
    age: 20
};
var ROLE;
(function (ROLE) {
    ROLE[ROLE["STAFF"] = 0] = "STAFF";
    ROLE[ROLE["MANAGER"] = 1] = "MANAGER";
    ROLE[ROLE["USER"] = 2] = "USER";
})(ROLE || (ROLE = {}));
