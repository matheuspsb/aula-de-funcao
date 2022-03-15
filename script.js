function trocarimagem(filename, animalname){
    document.querySelector('.imagem').setAttribute('src', 'imagens/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalname);
}

function pegaranimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert(animal);

}