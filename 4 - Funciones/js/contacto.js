console.log(`Bienvenido a Contactos`);

const btn_enviar = document.getElementById(`registrar`);

btn_enviar.addEventListener('click', () => {
    registrar();
})


function registrar() {

    let data = {
                'name' : $(`#nombre`).val(), 
                'last_name': $(`#apellido`).val(),
                'phone': $(`#telefono`).val()
                };


    if (!checkValidity(data)) return;

    let row = 0;
    $(`#table-contactos tbody tr`).each(function() {
        row++;
    })
    row ++;

    let registro = `<tr> <th scope="row">${row}</th> <td>${data.name}</td> <td>${data.last_name}</td> <td>${data.phone}</td> </tr>`;
    $(`#table-contactos`).append(registro);

    $(`#nombre`).val('');
    $(`#apellido`).val('');
    $(`#telefono`).val('');
}


function checkValidity(registro){
    let valid = true;

    $(`#invalid-nombre`).hide();
    $(`#invalid-apellido`).hide();
    $(`#invalid-telefono`).hide();

    
    if(registro.name == '') {
        $(`#invalid-nombre`).show();
        valid = false;
    }

    if(registro.last_name == ''){
        $(`#invalid-apellido`).show();
        valid = false;
    }
    
    let expre = /^[0-9]{10}$/;
    if(!expre.test(registro.phone)){
        $(`#invalid-telefono`).show();
        valid = false;
    }

    return valid;
}