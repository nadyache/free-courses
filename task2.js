input_string = process.argv[2];
function RepeatStr(input) {
    var reg = /(?=((.+)(?:.*?\2)+))/g;
    var sub = "";
    var maxstr = "";
    reg.lastIndex = 0;
    sub = reg.exec(input);
    while (!(sub == null)){
        if ((!(sub == null)) && (sub[2].length > maxstr.length)){
            maxstr = sub[2];
        }
        sub = reg.exec(input);
        reg.lastIndex++; // start searching from the next position
    }
    return maxstr;
}
process.stdout.write(RepeatStr(input_string));