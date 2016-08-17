String.prototype.toFullWidth = function() {
    var r = '',c;
    for (var i = 0; i < this.length; i++) {
        c = this.charCodeAt(i);

        if (c > 0x00 && c <= 0xEF ) {
            r += String.fromCharCode(0xFF00 ^ (c - 0x20))
        } else {
            r += this[i];
        }

    }

    return r;
};

String.prototype.toHaftWidth = function() {
    var r = '',c;
    for (var i = 0; i < this.length; i++) {
        c = this.charCodeAt(i);

        if (c > 0xFF00 && c <= 0xFFEF ) {
            r += String.fromCharCode(0xFF & (c + 0x20))
        } else {
            r += this[i];
        }

    }

    return r;
};
