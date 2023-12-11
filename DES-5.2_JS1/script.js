document.getElementById('titulo').innerText = 'BookFLix';
let produtoContainer = document.body;

let produto = document.createElement('div');
let nomeProduto = document.createElement('h2');
let descricaoProduto = document.createElement('p');
let precoProduto = document.createElement('h3');
let imagemProduto = document.createElement('img');

nomeProduto.innerText = 'Diário de um Banana 18: Cabeça oca Capa dura – 27 outubro 2023';
descricaoProduto.innerHTML = 'O ensino fundamental não tem sido um mar de rosas para Greg Heffley. Então, quando sua escola está prestes a ser fechada por causa do baixo desempenho dos alunos e do mau estado de conservação do prédio, ele não está nem aí. Mas, quando Greg saca que isso pode significar ir para um lugar diferente e não estudar mais com o melhor amigo Rowley Jefferson, a coisa muda de figura. Será que ele e seus colegas vão conseguir salvar a escola? Ou será que Greg vai dar início a um novo capítulo em sua vida?';
precoProduto.innerText = 'Preço: R$ 99,99';
imagemProduto.src = 'img/615S3--USFL._SY342_.jpg';
imagemProduto.alt = 'Imagem do Produto';

// Separa o texto em duas partes
let descricaoSplit = nomeProduto.innerHTML.split('Capa dura – 27 outubro 2023');

// Monta novamente o texto com a parte desejada em cinza
nomeProduto.innerHTML = descricaoSplit[0] + '<span style="color: gray;">Capa dura – 27 outubro 2023</span>' + descricaoSplit[1];

produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);
produto.appendChild(imagemProduto);
produtoContainer.appendChild(produto);