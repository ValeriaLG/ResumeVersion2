export const sorter = (arrayLabel, arrayOfData) => {
    const arrayOfObj = arrayLabel.map(function(d, i){
      return {
        label: d,
        data: arrayOfData[i] || 0
      }
    });
    const sortedArrayObj = arrayOfObj.sort(function(a, b){
      return b.data > a.data;
    });
    const newArrayLabel = [];
    const newArrayData = [];
    sortedArrayObj.forEach(function(d){
      newArrayLabel.push(d.label);
      newArrayData.push(d.data);
    });
    return [newArrayLabel, newArrayData];
  }
  