export default function phoneTransform(value: string) {
    let format = "xxx (xxx) xxx xx xx";
  
    for(let i = 0; i < value.length; i++) {
      format = format.replace('x', value[i]);
    }
    return format;
} 