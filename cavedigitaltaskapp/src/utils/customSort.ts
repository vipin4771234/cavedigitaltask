const referenceArray = [
  '22',
  '24',
  '26',
  '28',
  '30',
  '32',
  '34',
  '36',
  '38',
  '40',
  '42',
  '44',
  'XS',
  'S',
  'M',
  'L',
  'XL',
  '2XL',
  'XXL',
  '3XL',
  'XXXL',
];

const getIndex = (item: any) => {
     return referenceArray.findIndex(function(el) {
        let size = item.ITEM_SIZE;
        if(typeof item.ITEM_SIZE !== 'string') {
            item = item.toString();
        }
        return el === size;
    });
}

export const customSort = (arr: Array<any>) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(getIndex(arr[j])  > getIndex(arr[j+1])) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
