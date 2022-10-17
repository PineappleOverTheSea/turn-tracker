export const generateRandomId = () : number => {
    let id = Date.now().toString().slice(6) + Math.random().toPrecision(8).slice(2)
    return Number(id)
}
export const inputCleaner = (input: string) =>{
    // switch(input){
    //     case "-":{
    //         return ""
    //     }
    //     case
    // }
    console.log("test3")
}