function calculateNumbers(var1, var2)   {
    let sum = var1 + var2;
    let difference = var1 - var2;
    let product = var1 * var2;
    let quotient = var2 !== 0 ? var1 / var2 : 'undefined';

    return {
        sum: sum,
        difference: difference,
        product: product,
        quotient: quotient
    };
}