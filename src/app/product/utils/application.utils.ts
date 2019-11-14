export interface dropwdownData {
    label:string;
    value: any;
}
export  function prepareDropdownData(data = [], label: string ) {
    let dropDownList: dropwdownData[] = []
    data.forEach(element => {
        dropDownList.push({label: element[label], value: element})
    });
    return dropDownList;
}