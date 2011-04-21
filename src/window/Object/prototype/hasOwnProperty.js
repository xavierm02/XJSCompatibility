function ( property ) {//console.log(window.hasOwnProperty("toString"));//FAIL
    
    var constructor,
    hasOwnProperty,
    prototype,
    prototypeHasOwnProperty,
    value;
    
    if ( property in this ) {
        constructor = this.constructor;
        if ( this === constructor ) {
            return true;
        } else {
            prototype = constructor.prototype;
            if ( prototype === this ) {
                return true;
            } else {
                if ( property in prototype ) {
                    if ( prototype[ property ] === this[ property ] ) {
                        value = prototype[ property ];
                        prototypeHasOwnProperty = prototype.hasOwnProperty( property );
                        prototype[ property ] = value + 1;
                        if ( prototype[ property ] === value + 1 ) {
                            if ( this[ property ] === value ) {
                                hasOwnProperty = true;
                            } else {
                                hasOwnProperty = false;
                            }
                            if ( prototypeHasOwnProperty ) {
                                prototype[ property ] = value;
                            } else {
                                delete prototype[ property ];
                            }
                            return hasOwnProperty;
                        } else {
                            this[ property ] = value + 1;
                            if ( this[ property ] === value + 1 ) {
                                hasOwnProperty = "FAIL";// FFFFFFFFFFFFFFFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIIIIIIIIIIIIIIIIILLLLLLLLLLLLLLLLLLLLLLLLL
                                if ( hasOwnProperty ) {
                                    this[ property ] = value;
                                } else {
                                    delete this[ property ];
                                }
                                return hasOwnProperty;
                            } else {
                                return true;
                            }
                        }
                    } else {
                        return true;
                    }
                } else {
                    return true;
                }
            }
        }
    } else {
        return false;
    }
}
