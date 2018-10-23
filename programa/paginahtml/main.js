const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', () => {
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const idade = document.getElementById('idade').value;
    const sexo = document.getElementById('sexo').value;
    const estadoCivil = document.getElementById('estadoCivil').value;
    const dataDeNascimento = document.getElementById('dataDeNascimento').value;
    const nacionalidade = document.getElementById('nacionalidade').value;
    const endereco = document.getElementById('endereco').value;
    const emailText = document.getElementById('emailText').value;
    const contato = document.getElementById('contato').value;
    const objetivo = document.getElementById('objetivo').value;
    const formacaoAcademica = document.getElementById('formacaoAcademica').value;
    const idiomas = document.getElementById('idiomas').value;

    const doc = new jsPDF();
    
    let verticalY = 20;

    doc.text('Nome Completo: ' + nomeCompleto, 20, verticalY);
    verticalY += 20;

    doc.text('Idade: ' + idade, 20, verticalY);
    verticalY += 20;

    doc.text('Sexo: ' + sexo, 20, verticalY);
    verticalY += 20;

    doc.text('Estado Civil: ' + estadoCivil, 20, verticalY);
    verticalY += 20;

    doc.text('Data de Nascimento: ' + dataDeNascimento, 20, verticalY);
    verticalY += 20;

    doc.text('Nacionalidade: ' + nacionalidade, 20, verticalY);
    verticalY += 20;

    doc.text('Endereço: ' + endereco, 20, verticalY);
    verticalY += 20;

    doc.text('E-mail: ' + emailText, 20, verticalY);
    verticalY += 20;
    
    doc.text('Contato: ' + contato, 20, verticalY);
    verticalY += 20;

    doc.text('Objetivo: ' + objetivo, 20, verticalY);
    verticalY += 20;

    doc.text('Formação Acadêmica: ' + formacaoAcademica, 20, verticalY);
    verticalY += 20;

    doc.text('Idiomas: ' + idiomas, 20, verticalY);
    verticalY += 20;

    doc.save('test.pdf');
});