let config = {
    'ime_prezime':{
        required: true,
        minlength: 3,
        maxlength: 69
    },
    'korisnicko_ime':{
        required: true,
        minlength: 7,
        maxlength: 20
    },
    'email':{
        required: true,
        email: true,
        minlength: 6,
        maxlength: 30
    },
    'broj_telefona': {
        minlength: 9,
        maxlength: 15
    },
    'lozinka':{
        required: true,
        minlength: 7,
        maxlength: 69,
        matching: 'ponovi_lozinku'
    },
    'ponovi_lozinku':{
        required: true,
        minlength: 7,
        maxlength: 69,
        matching: 'lozinka'
    }
};

let validator = new Validator(config);
