document.addEventListener('DOMContentLoaded', function() {
    var subscribeButton = document.getElementById('subscribe-button');
    var emailInput = document.getElementById('email');
    var messageDiv = document.getElementById('message') || document.createElement('div');

    if (subscribeButton && emailInput) {
        subscribeButton.addEventListener('click', function() {
            var email = emailInput.value;
            if (email) {
                fetch('https://script.google.com/macros/s/AKfycbwYa9j4E-mIHZlwcyjYFJeTOoOESErC1xd1B7QUUXqGrkvynAC339wFvw8ylayWibZo3Q/exec', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        'email': email
                    })
                })
                .then(response => response.text())
                .then(result => {
                    messageDiv.textContent = 'Obrigado por se inscrever!';
                    messageDiv.style.color = 'green';
                    emailInput.value = ''; // Limpa o campo após o envio
                })
                .catch(error => {
                    messageDiv.textContent = 'Ocorreu um erro ao enviar sua inscrição.';
                    messageDiv.style.color = 'red';
                });

                // Adiciona a mensagem ao DOM se ela não estiver lá
                if (!document.getElementById('message')) {
                    document.getElementById('footer_subscribe').appendChild(messageDiv);
                }
            } else {
                messageDiv.textContent = 'Por favor, insira um e-mail válido.';
                messageDiv.style.color = 'red';

                // Adiciona a mensagem ao DOM se ela não estiver lá
                if (!document.getElementById('message')) {
                    document.getElementById('footer_subscribe').appendChild(messageDiv);
                }
            }
        });
    } else {
        console.error('Elementos com os IDs fornecidos não foram encontrados.');
    }
});
