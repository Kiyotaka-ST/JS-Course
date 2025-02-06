let inputs = document.querySelectorAll('input');
let errors = {
    "ime_prezime": [],
    "korisnicko_ime": [],
    "email": [],
    "lozinka": [],
    "ponovi_lozinku": []

};

inputs.forEach(element => {
    element.addEventListener('change', e => {
        let currentInput = e.target;
        let inputValue = currentInput.value;
        let inputName = currentInput.getAttribute('name');

        if(inputValue.length > 4){
            errors[inputName] = [];

            switch(inputName){
                case 'ime_prezime':
                    let validation = inputValue();
                    validation = validation.split(" ");
                    if(validation.length < 2){
                        errors[inputName].push('Moras napisati ime i prezime');
                    }
                    break;
                    case 'email':
                        if(!validateEmail(inputValue)){
                            errors[inputName].push('Nije ispravna email adresa');
                        }
                        break;

                        case 'ponovi_lozinku':
                            let lozinka = document.querySelector('input[name="lozinka"]').value;
                            if(inputValue !== lozinka){
                                errors[inputName].push('Lozinka se ne poklapa.');
                            }
                            break;

            }
        } else {
            errors[inputName] = ['Polje ne moze bit manje od 5'];
        }

        populateErrors();
        // document.querySelector('div').innerHTML = `<ul<li>${errors[inputName][0]}</li></ul>`;
    });
});

const populateErrors = () => {
    for(let elem of document.querySelectorAll('ul')) {
        elem.remove();
    }

    for(let key of Object.keys(errors)) {
        let input = document.querySelector(`input[name="${key}"]`);
        let parentelement = input.parentElement;
        let errorsElement = document.createElement('ul');
        parentelement.appendChild(errorsElement);
        errors[key].forEach(error => {
            let li = document.createElement('li');
            li.innerText = error;

            errorsElement.appendChild(li);
        });
    }

}

const validateEmail = email => {
     if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
     }

     return false;
    }