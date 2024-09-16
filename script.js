 document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.box-skill > div');
    const info = document.getElementById('skill-info');

    icons.forEach(icon => {
        // Evento para quando o mouse passar por cima do ícone
        icon.addEventListener('mouseenter', function () {
            // Atualiza o texto das informações com o valor do atributo 'data-info' do ícone
            info.textContent = this.getAttribute('data-info');
        });

        // Evento para quando o mouse sair de cima do ícone
        icon.addEventListener('mouseleave', function () {
            // Restaura o texto original
            info.textContent = 'Hover the cursor over the card to read...';
        });
    });
});

    // Adiciona um event listener para todos os links da navbar
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link
            
            // Obtém o ID da seção para a qual rolar
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Verifica se a seção existe
            if (targetSection) {
                // Rolagem suave para a seção
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior:'smooth'
                    // behavior:'smooth' habilita a animação suave, 'auto' habilita a animação padrão do navegador
                });
            }
        });
    });

const machineWriter = document.getElementById('span');

function typeWriter(elemento, texto, callback) {
    const textArray = texto.split('');
    elemento.innerHTML = '';  // Limpa o conteúdo atual do elemento
    textArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 85 * i);
    });

    // Chama o callback (função de apagar o texto) após o texto ser completamente escrito
    setTimeout(callback, 85 * textArray.length + 500); // 500ms de delay após escrever
}

function deleteWriter(elemento, callback) {
    const text = elemento.innerHTML;
    const textArray = text.split('');
    
    textArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML = text.substring(0, textArray.length - i - 1);
        }, 50 * i);
    });

    // Chama o callback (função de escrever o próximo texto) após o texto ser completamente apagado
    setTimeout(callback, 50 * textArray.length + 500); // 500ms de delay após apagar
}

const elemento = document.getElementById('span'); // Selecione o elemento desejado

function startTyping() {
    const texto1 = 'Junior Web Developer';        // Texto original
    const texto2 = 'Junior Software Developer';   // Texto modificado

    // Escreve o primeiro texto, espera um tempo, apaga e escreve o segundo
    typeWriter(elemento, texto1, () => {
        // Espera 1 segundo (1000ms) antes de apagar o texto
        setTimeout(() => {
            deleteWriter(elemento, () => {
                // Depois que o primeiro texto é apagado, escreve o segundo texto
                typeWriter(elemento, texto2, () => {
                    // Aqui você pode adicionar mais funções ou loops, se necessário
                });
            });
        }, 1000); // Delay de 1000ms após escrever o primeiro texto
    });
}

// Inicia o processo assim que a página carregar
startTyping();




/*const chk = document.getElementById('chk');
chk.addEventListener('change', () => {
    document.body.classList.toggle('white')
})*/

//CLASSE PARA FAZER O FORMULARIO FUNCIONAR
class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.querySelector(settings.button);
      if (this.form) {
        this.url = this.form.getAttribute("action");
      }
      this.sendForm = this.sendForm.bind(this);
    }
  
    //SUBSTITUI O BOTÃO PELA MENSAGEM DE SUCESSO
    displaySuccess() {
      this.form.innerHTML = this.settings.success;
    }
  
    //CASO DER MERDA VAI SUBSTITUIR PELA MENSAGEM DE ERRO
    displayError() {
      this.form.innerHTML = this.settings.error;
    }
  
    //UM OBJETO QUE PEGA OS TODOS OS ELEMENTOS QUE POSSUEM ATRIBUTO COM "NAME" E ATRIBUI...
    //FIQUEI COM PREGUIÇA DE EXPLICAR USA O GEPETO DEPOIS
    getFormObject() {
      const formObject = {};
      const fields = this.form.querySelectorAll("[name]");
      //PARA CADA CAMPO DO FORMULARIO, ADICIONA UMA ENTRADA NO 'FORMOBJETC' COM O NOME DO CAMPO E O SEU VALOR.
      fields.forEach((field) => {
        formObject[field.getAttribute("name")] = field.value;
      });
      return formObject;
    }
  
    onSubmission(event) {
      event.preventDefault();
      event.target.disabled = true;
      event.target.innerText = "Sending...";
    }
  

    async sendForm(event) {
        //ENVIA O FORMUALRIO VIA UMA REQUISIÇÃO AJAX(UMA FUNÇÃO DO JQUERY, VAI ESTUDAR JQUERY JULI!!!)
      try {
        this.onSubmission(event);
        //Usa 'fetch' para enviar uma requisição POST à URL do formulário, enviando os dados como JSON.(GERADO PELO GEPETO TAVA COM PREGUIÇA DE ESCREVER)
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
      } catch (error) {
        this.displayError();
        throw new Error(error);
      }
    }
  
    //VERIFICAR SE O FORMULARIO EXISTE NA PAGINA
    init() {
      if (this.form) this.formButton.addEventListener("click", this.sendForm);
      return this;
    }
  }
  
  //UMA INSTANCIA QUE PASSA PELO FORMSUBMIT(UM SERVIÇO QUE USEI PARA ISSO E É DE GRAÇA)
  const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h2 class='success'>Message Sent Successfully!</h2>",
    error: "<h2 class='error'>Message not Sent!.</h2>",
  });
  formSubmit.init();
  //TEM ALGUMAS PARTES QUE NÃO COMENTEI POR PREGUIÇA, MA SE NÃO ENTENDEU É SO ME PERGUNTA =) S2!