//Jaden Casing Strings


String.prototype.toJadenCase = function () {
    return this.split(' ').map(e=>e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
};

