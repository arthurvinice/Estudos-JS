// COMPONENTES:
// ARTHUR VINICIUS FONSECA DE MACEDO
// JELLYEL KENNEDY DE OLIVEIRA SANTOS
// LAZARO FREDERICO FELIX FERREIRA

class Livro {
    constructor(titulo, autor, ano, paginas){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.paginas = paginas;
    }

}

const listaLivros = []

function cadastrarDados() {
    let tituloLivro = document.getElementById("idTitulo").value;
    let autorLivro = document.getElementById("idAutor").value;
    let anoLivro = document.getElementById("idAno").value;
    let paginasLivro = document.getElementById("idMatricula").value;

    const livro1 = new Livro(tituloLivro, autorLivro, anoLivro, paginasLivro);

    listaLivros.push(livro1)

    alert(`O livro ${livro1.titulo} foi cadastrado.`)

    mostraLista()

}

function mostraLista(){
    console.log("Lista de livros cadastrados:");
    listaLivros.forEach(livro => {
        console.log(`Título: ${livro.titulo} \nAutor:${livro.autor} \nAno de publicação: ${livro.ano}\nNº de páginas: ${livro.paginas}`)
    })
}

function mediaPaginas(){
    if (listaLivros.length === 0) {
        alert(`Lista vazia`)
    }

    let totalPaginas = 0
    listaLivros.forEach(function(livro) {
        totalPaginas += parseInt(livro.paginas)
    })

    let media = totalPaginas / listaLivros.length;
    media = Math.round(media * 100) / 100;
    alert(`A média de páginas é ${media}.`)  
}

function mostrarDados(){
    let autorPesquisado = document.getElementById("idAutorP").value;

    let livrosEncontrados = false

    listaLivros.forEach (livro => {
        if (livro.autor === autorPesquisado) {
            livrosEncontrados = true;
        
        console.log(`Livros encontrados:\n ${livro.titulo}`)} 
    })  

    if (livrosEncontrados == false) {
        console.log(`Livros do autor ${autorPesquisado} não encontrados`)
    }
        
}
