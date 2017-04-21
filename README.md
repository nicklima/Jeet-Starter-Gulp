<p align="center">
  <a href="http://jeet.js">
    <img width="170px" src="http://jeet.gs/dist/img/jeet-logo-color.svg" title="Jeet Grid System">
  </a>
  
  <a href="http://gulpjs.com">
    <img height="90px" width="auto" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>

# Jeet-Starter-Gulp
Starter do Grid [Jeet](http://jeet.gs) utilizando o [Gulp](http://gulpjs.com). Tarefas do Gulp: Compilar o Sass, tratar imagens e Compilar JS.

### Como utilizar:

```
git clone git@github.com:nicklima/Jeet-Starter-Gulp.git
```
Após clonar (ou fazer download do projeto) entre na pasta e instale os node_modules

```
npm install
```

Caso ainda não tenha instalado o GULP, confira esse tutorial do Tableless ensinando como instalar:
https://tableless.com.br/gulp-o-novo-automatizador/

A versão do Jeet nesse starter é a Versão 7.0.0. Confira abaixo como utilizar o grid.
Precisamos importar ele dentro do ``.scss`` e fazemos isso dentro do arquivo ``_config.scss``.

```scss
@import '../../node_modules/jeet/scss/index';
```

### Criando a estrutura do grid:

```scss

//Centralizando a div em 90% do elemento pai
.container {
  @include center(90%);
}

//Definindo 3 colunas
.container div {
  @include column(1/3);
}

//Definindo Ciclos de 3 colunas por linha
.container div {
  @include column(1/3, $cycle:3);
}
```
Apos estruturar nossas colunas com o JEET vamos rodar o GULP para compilar nosso CSS.
Para isso podemos executar a task ``default`` do Gulp com o comando:

```gulp
gulp
```
Essa task irá rodar as tarefas gulp sass, gulp scripts e gulp images. Além de rodar o ``browser-sync`` e ficar observando os arquivos JS e SCSS.
Para rodar apenas a task do SCSS basta executar:

```gulp
gulp sass
```

Feito isso a mágica acontece e o seu CSS será criado na pasta ``assets``. Simples, não? 

# Conheça mais sobre o Jeet

O [Jeet](http://jeet.gs) é um grid system bem simples que trabalha com colunas fracionadas. 
O Jeet funciona tanto para**[Sass](scss)** quanto para **[Stylus](styl)**.

Para entender melhor como o Jeet funciona, confira a [API](https://github.com/mojotech/jeet/tree/master/docs). 

#### Browser Support

- IE9+ without help. IE8+ with Selectivizr. Obviously always use Autoprefixer.
