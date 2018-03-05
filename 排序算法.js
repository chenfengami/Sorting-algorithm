var arr = [1, 2, 9, 8, 7, 6, 5, 10, 4, 3, 15, 17, 20, 18, 21, 25, 11, 13, 12, 14, 16, 19];
//冒泡
function bubbleSort(arr) {
    for (var i = 0, len = arr.length; i < len - 1; i++) {
        for (var j = i + 1; j <= len - 1; j++) {
            if (arr[i] > arr[j]) {
                var temp;
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }

        }
    }
    return arr;
};

bubbleSort(arr);

//快速排序
function quickSort(arr) {
    if (arr.length < 3) {
        if (arr[0] > arr[1]) {
            var temp;
            arr[1] = arr[0];
            temp = arr[1];
            arr[0] = temp;
        }
        return arr;
    }
    var smallArr = [],
        largeArr = [];
    var middleNum = Math.floor(arr.length / 2);
    for (var i = 0, len = arr.length; i < len; i++) {
        if (i === middleNum) {
            continue;
        }
        arr[i] < arr[middleNum] ? smallArr.push(arr[i]) : largeArr.push(arr[i]);
    }
    smallArr.push(arr[middleNum]);
    return quickSort.call(null, smallArr).concat(quickSort.call(null, largeArr));
};

quickSort(arr);

//选择排序
function chooseSort(arr) {
    var minIndex, temp;
    for (var i = 0, len = arr.length; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
};

chooseSort(arr);