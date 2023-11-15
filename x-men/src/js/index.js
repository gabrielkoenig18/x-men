//aqui você pode escrever oq voce quiser. esse é um comentario 


/* 
tambem é um outro tipo de comentario


o que precisamos fazer? - quando passar o mouse em cima de um personagem na lista temos que adicionar a borda azul de seleção na imagem pequeno do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado 

    OBJETIVO 1: quando passar o mouse em cima do personagem na listagem, devemos seleciona-lo
        
        passo 1: pegar o personagem no JS pra poder verificar quando o usuario passar o mouse em cima de um deles;

        passo 2: adicionar a classe selecionado no personagem que o usuario passar o cursor mouse
        
        passo 3: verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele

    OBJETIVO 2: quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        
        passo 1: pegar o elemento do personagem grande pra adicionar as informaçoes nele
        passo 2: alterar a imagem do personagem grande 
        passo 3: alterar o nome do personagem grande 
        passo 4: alterar a descrição do personagem grande
*/

const personagens =document .querySelectorAll(".personagem")

personagens.forEach((personagem) =>{
    personagem.addEventListener("mouseenter", () => {

        if (window.innerWidth <450){
            window.scrollTo({top: 0, behavior:"smooth"})
        }
        
        const personagemselecionado = document.querySelector(".selecionado");
        personagemselecionado.classList.remove("selecionado")
        
        console.log(personagem.classList.add("selecionado"));  
        
        const imagemPersonagemGrande = document.querySelector(".personagem-grande");
        console.log(imagemPersonagemGrande);
        const idpersonagem = personagem.attributes.id.value;
        console.log(idpersonagem)
        imagemPersonagemGrande.src = `./src/imagens/card-${idpersonagem}.png`;
        
        const nomePersonagem= document.getElementById("nome-personagem");
        nomePersonagem.innerText = personagem.getAttribute("data-name")
        
        const descricaoPersonagem = document.getElementById("descricao-personagem");
        descricaoPersonagem.innerText = personagem.getAttribute("data-description");

    })   
})