let line = 10;

function largeLine() {
    document.writeln("<hr align='center' width="+line,">");
    line += 20;
}

for (let i = 1; i < 20; i++) {
    largeLine();
}