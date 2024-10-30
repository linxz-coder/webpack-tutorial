export default function sum(...args){
    return args.reduce((a,b) => a+b, 0); //累加，初始值为0
}