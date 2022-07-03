function genArray() {
    let arr = [];
    let el1 = document.getElementById('ns_arr');
    array = "";
    for (i = 0; i < 25; i++) {
        tmp = Math.round(Math.random() * 100);
        arr.push(tmp);
        array = array + tmp + " ";
    }
    el1.innerHTML = array;
    return arr;
}

function buble(arr) {
    let i = 0;
    let flag = true;
    while (flag) {
        flag = false;
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                flag = true;
            }
        }
        i++;
    }

    return arr;
};


let array = [];
let el2 = document.getElementById('s_arr');

let gen = document.getElementById('gen_arr');
gen.onclick = function() {
    array = genArray();
    el2.innerHTML = "А вот тут будет сортировочка пузырьком";
}

let sort = document.getElementById('sort_arr');
sort.onclick = function() {
    array = buble(array);
    array_str = "";
    for (let index = 0; index < array.length; index++) {
        array_str += array[index] + " ";
    }
    el2.innerHTML = array_str;
}