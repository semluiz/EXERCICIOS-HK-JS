function getTheLetter(s){
    let letter;
    switch(true){
        case 'aeiou'.includes([s]): return letter = 'A';
        break;
        case 'bcdfg'.includes([s]): return letter = 'B';
        break;
        case 'hjklm'.includes([s]): return  letter = 'C';
        break;
        case 'npqrstvwxyz'.includes([s]): return letter = 'D';
        break;
    }

    return letter; 
}

getTheLetter('t');