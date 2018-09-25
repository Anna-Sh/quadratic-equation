module.exports = function solveEquation(equation) {
    //парсим входящее уравнение
    const equationRegex = /^(-?\d+)\s\*\sx\^2\s([+-]\s\d+)\s\*\sx\s([+-]\s\d+)$/i;

    let groups = equationRegex.exec(equation);

    //D=B^2-4*A*C
    let a = groups[1],
        b = groups[2],
        c = groups[3];

    b =  b.replace(" ", "");
    c =  c.replace(" ", "");

    a = parseInt(a, 10);
    b = parseInt(b, 10);
    c = parseInt(c, 10);

    const d = Math.pow(b, 2)-4*a*c,
        x1 = Math.round((-b + Math.sqrt(d)) / (2*a)),
        x2 = Math.round((-b - Math.sqrt(d)) / (2*a));

    const result = [x1, x2];

    result.sort( (a, b) => a - b );

    return result;
};