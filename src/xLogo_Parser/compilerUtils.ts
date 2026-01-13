// Source - https://stackoverflow.com/a/31055217
// Posted by Muhammad Umer, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-12, License - CC BY-SA 4.0

export function getAllFuncs(toCheck: any) {
    const props = [];
    let obj = toCheck;
    do {
        props.push(...Object.getOwnPropertyNames(obj));
    } while (obj = Object.getPrototypeOf(obj));
    
    return props.sort().filter((e, i, arr) => { 
       if (e!=arr[i+1] && typeof toCheck[e] == 'function') return true;
    });
}
