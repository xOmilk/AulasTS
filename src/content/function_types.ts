type MapStringCallBack = (item: string) => string;


function mapStrings(array: string[], callbackfn: MapStringCallBack): string[] {

    const newArray: string[] = [];

    for (let index = 0; index < array.length; index++) {
        newArray.push(callbackfn(array[index]));

    }
    return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMaped = mapStrings(abc, (item) => item.toUpperCase());
console.log(abc);
console.log(abcMaped);
