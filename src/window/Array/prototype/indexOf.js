function ( object ) {
    var index,
    length;
    for ( index = 0, length = this.length; index < length ; ++index ) {
        if ( this[ index ] === object ) {
            return index;
        }
    }
    return -1;
}
