var
    a = Number(process.argv[2]);
    b = Number(process.argv[3]);
    c = 0;
    result = 0;
function nod(a, b) {
    if(b > 0) {
        var c = a%b;
        return nod(b, c);
    }
    else {
        return Math.abs(a);
    }
}
result = nod(a, b);
process.stdout.write(result)
