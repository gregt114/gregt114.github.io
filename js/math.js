
// f(g(x:number)=>number, start: number, end: number, n: number): number
function riemann_midpoint(func, start, end, n){
    let width = (end - start) / n;
    let curSum = 0;
    for(let i = start; i < end; i+=width){
        curSum += func(i + width/2)*width;
    }
    return curSum;
}

// f(g(x:number)=>number, start: number, end: number, n: number): number
function riemann_trapezoid(func, start, end, n){
    let width = (end - start) / n;
    let curSum = 0;
    for(let i = start; i < end; i+=width){
        curSum += 0.5 * width * (func(i) + func(i + width));
    }
    return curSum;
}

// f(g(x:number)=>number, start: number, end: number, n: number): number
function simpson13(func, start, end, n){
    n += n % 2; // Make n even
    let h = (end - start) / n;
    let curSum = func(start) - func(end);

    for(let i=1; i <= n/2; i++){
        curSum += 2*func(start + 2*i*h) + 4*func(start + (2*i-1)*h);
    }

    return h/3 * curSum;    
}

// f(g(x:number)=>number, start: number, end: number, n: number): number
function simpson38(func, start, end, n){
    n += 3-(n % 3); // Make n a multiple of 3
    let h = (end - start) / n;
    let curSum = func(start) + func(end);

    for(let i=1; i < n; i++){
        if(i % 3 === 0){
            curSum += 2*func(start + i*h);
        }
        else{
            curSum += 3*func(start + i*h);
        }
    }
    return (3*h/8) * curSum;    
}


// f(g(x:number)=>number, start:number, end:number, n: number, method: string): number
function integrate(func, start, end, n, method){
    switch(method){
        case 'midpoint':
            return riemann_midpoint(func, start, end, n);
            break;
        case 'trapezoid':
            return riemann_trapezoid(func, start, end, n);
            break;
        case 'simpson13':
            return simpson13(func, start, end, n);
            break;
        case 'simpson38':
            return simpson38(func, start, end, n);
            break;
        default:
            alert('ERROR: unrecognized method');
    }
}


export { integrate };