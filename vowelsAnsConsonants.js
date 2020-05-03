function vowelsAndConsonants(s){
    let consoantes = [];
    for(i in s){
        if("aeiou".includes(s[i])){
            console.log(s[i]);
        } else {
            consoantes.push(s[i]);
        }
    }

    for( c in consoantes){
        console.log(consoantes[c]);
    }
}

vowelsAndConsonants('javascriptloops');