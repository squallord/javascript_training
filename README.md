# Fundamentos de Javascript

## Índice
1. Conteúdo
2. Variáveis
   1. Tipo de variáveis
   2. Instanciando variáveis
3. Operadores
   1. Aritméticos
   2. Lógicos
   3. Binários
   4. De Atribuição
   5. De Incremento/Decremento
4. Precedência de operadores
5. Estruturas básicas de dados
   1. Arranjos (***Arrays***)
   2. Dicionários
6. Fluxo de controle
   1. Bloco de código **{ ... }**
   2. Escopo de uma variável
   3. Decisão com ***if-else***
   4. Laço de repetição com ***while***
   5. Alternativa ao ***while*** com o ***do-while***
   6. Laço de repetição com ***for***
   7. Laço de repetição com ***foreach***
7. Funções
   1. Retorno de uma função
   2. Recursividade
8. Tipos abstratos de dados
   1. Classes e Objetos
   2. Herança
   3.  Polimorfismo

<br>

## 1. Conteúdo:

<br>

## 2. Variáveis
Na matemática o termo variável é dado ao símbolo que representa qualquer elemento dentro de um conjunto. Abaixo, temos um exemplo de variável pertencente ao conjunto <!--$\ U$-->![U](images/U.svg):

<!--$$
x \ \in \ \{1, 3, 4, 10, 37\} = U
$$-->

<center>

![math equation 1](/images/math_equation_1.svg)

</center>

<br>

Neste caso, <!--$x$-->![x](/images/x.svg) pode assumir qualquer valor dentro do conjunto <!--$\ \{1, 3, 4, 10, 37\}$-->![math equation 2](/images/math_equation_2.svg). O mesma ideia pode ser aplicada a qualquer linguagem de programação. Ou seja, 
quando falamos de javascript, esse conceito também é válido, mas como a linguagem é [**fracamente tipada**](https://brainly.com.br/tarefa/19678739), a variável "<!--$x$-->![x](/images/x.svg)" em questão pode assumir qualquer valor dentro de um conjunto de quaisquer **tipos pré-definidos** na linguagem. Fazendo uma analogia com a matemática, temos o seguinte exemplo:

<!--$$
x \ \in \ \{1, 'casa', 1.35, null, undefined, Infinity, "jardim", ...\} 
$$-->

<center>

![math equation 3](images/math_equation_3.svg)

</center>

<br>

Destrinchando os elementos do conjunto acima em **tipos**, podemos montar a seguinte tabela:

<center>

 Valor  |  Tipo
:------:|:------:
1 | number
'casa' | string
1.35 | number
null | object
undefined | undefined
Infinity | number
"jardim" | string

</center> 

<br>

Note que tanto o número <!--$1$-->![1](images/1.svg) quanto o valor fracionário <!--$1.35 =\frac{27}{20}$-->![math equation 4](images/math_equation_4.svg) ou até mesmo a palavra *Infinity* (sem aspas simples ou duplas) são todos considerados como **números** (***number***). Observe também que tanto a palavra 'casa' quanto "jardim" são ambas consideradas como ***string***, que nada mais é do que uma **sequência de caracteres**. Tanto aspas simples quanto aspas duplas caracterizam strings, mas existem [**prós e contras**](https://staxmanade.com/2018/03/should-i-use-javascript-single-or-double-quotes/) quanto ao uso de uma forma ou outra. Veremos logo a seguir a tipagem de variáveis mais a fundo.

<br>

## 2.i. Tipos de Variáveis

Em javascript, tempos os seguintes tipos de variáveis: ***number***, ***string***, *object* e *undefined*. Os dois tipos mais importantes para nós no momento são **number** e **string**. A variável do tipo **number** pode ser um número real ou infinito. Em notação matemática, temos:

<!--$$
se \ x \ é \ um \ número, \ então \ x \ \in \ \R \ \cup \ \{-\infin, +\infin\}
$$-->

<center>

![math equation 5](images/math_equation_5.svg)

</center>

<br>
Exemplos:

<center>

<!--
 Valor | Conjunto | Descrição
:-----:|:--------:|:--------:
0 | $\Z$ | Inteiros
1 | $\N$ | Naturais
1.35 | $\mathbb{Q}$ | Racionais
2048 | $\N$ | Naturais
2.71828182845... | $\mathbb{I}$ | Irracionais
3.14159265359... | $\mathbb{I}$ | Irracionais
-Infinity | $\{-\infin\}$ | ----------
Infinity | $\{+\infin\}$ | ----------
-->

 Valor | Conjunto | Descrição
:-----:|:--------:|:--------:
0 | ![I](/images/I.svg) | Inteiros
1 | ![N](images/N.svg) | Naturais
1.35 | ![Q](images/Q.svg) | Racionais
2048 | ![N](images/N.svg) | Naturais
2.71828182845... | ![I](images/I.svg) | Irracionais
3.14159265359... | ![I](images/I.svg) | Irracionais
-Infinity | ![-infty](images/-infty.svg) | ----------
Infinity | ![+infty](images/+infty.svg) | ----------

</center>

<br>

Ou seja, temos todas as representações numéricas possíveis, além da representação do "**infinito positivo**" (maior do que qualquer número exceto ele mesmo) e "**infinito negativo**" (menor do que qualquer número exceto ele mesmo). Agora quando o assunto é ***string***, nosso enfoque muda um pouco. Revisitaremos strings novamente mais a frente ao falarmos de ***arrays***. Por hora, vejamos alguns exemplos:

<center>

 Linha | Valor  |  Tipo  |  Texto
:-----:|:------:|:------:|:-------:
1 | 'teste' | *string* | teste
2 | '123' | *string* | 123
3 | 123 | *number* | ----------
4 | 2.675 | *number* | ----------
5 | "4.674" | *string* | 4.674
6 | "0" | *string* | 0
7 | 'Infinity' | *string* | Infinity
8 | Infinity | *number* | ----------
9 | "-Infinity" | *string* | -Infinity
10 | -Infinity | *number* | ----------
11 | "strings 'são' confusas" | *string* | strings 'são' confusas
13 | "strings \\"são\\" confusas" | *string* | strings "são" confusas
12 | 'não "são" mesmo?' | *string* | não "são" mesmo?
14 | 'não \\'são\\' mesmo?' | *string* | não 'são' mesmo?
15 | '' | *string* | *null*
16 | "" | *string* | *null*


</center>

<br>

Note, nas linhas 2 e 3, que existe uma diferença sutil entre ambos os valores. A diferença se dá pelas aspas simples que faz com que o javascript entenda que o valor '123' seja uma ***string*** ao invés de um número, que é o caso da linha 3. O mesmo vale pras linhas 4 e 5, pois não existe diferença entre usar aspas simples ou duplas ao escrever uma ***string***. Outro caso que pode gerar confusão é o presente nas linhas 7, 8, 9 e 10, em que colocamos a palavra *Infinity* com e sem aspas simples ou duplas. Mais uma vez, aspas simples ou duplas não farão diferença no contexto usual do javascript, mas a diferença se dá na caracterização do valor escrito. **'Infinity'** se trata de uma string ao passo que **Infinity** funciona como um valor numérico (veremos mais adiante o uso da palavra Infinity). O mesmo vale para o caso de **-Infinity** e **"-Infinity"**.

Voltemos nosso olhar agora para as linhas 11, 12, 13 e 14. A flexibilidade no uso da aspas simples ou duplas, permite que escrevamos aspas simples (linha 11) dentro de uma determinada string desde que no início e o fim da string sejam usadas aspas duplas. O mesmo vale para o exemplo da linha 13, em que iniciamos e terminamos com aspas simples e destacamos a palavra "**são**" com aspas duplas. Em muitas linguagens, como Java (Java não é abreviação para Javascript), não temos essa mesma flexibilidade e mesmo no Javascript podem acontecer cenários em que teremos que nos limitar a apenas uma forma de representação para ***strings***. Nesses casos, devemos proceder como nas linhas 12 e 14 em que usamos o caractere de escapamento "\\" para fazer com que o Javascript entenda que tanto as aspas simples quanto duplas definidas no meio de uma ***string*** não representem o início ou fim de uma ***string***.

Nota: FALAR SOBRE VARIÁVEIS PRIMITIVAS??? <CONFIRMAR ESTA INFORMACAO!!!>

<br>

## 2.ii. Instanciando variáveis

Primeiramente, entendamos o que significa "instanciar variáveis". É simplesmente o ato de se atribuir um determinado valor a uma variável. Fazemos isso para guardar o valor em um determinado local na memória (RAM a princípio) do computador. Isso é útil em N cenários, como veremos mais adiante (nos exercícios, principalmente).

Instanciar variáveis no Javascript é bem simples, basta fazer como no exemplo abaixo:

```javascript
var variavel = 'este é o valor da variável';
```



Observe que mesmo sendo simples, precisamos tomar cuidado com alguns detalhes tanto quanto a **declaração** quanto a **atribuição** de valor a uma variável. Sim, na linha acima fizemos os dois comandos: **declarar** e **atribuir**. Fizemos dessa forma porque esse é o jeito mais comum que todo programador usa para instanciar novas variáveis. Além disso, existem regras a serem utilizadas tanto na declaração quanto na atribuição. O mau uso das regras provocará o que chamamos de **erro de compilação**. Veremos as regras um pouco mais adiante. Vejamos, primeiramente, como faríamos pra quebrar o comando acima nos dois comandos: **declaração** e **aribuição**. Seja o exemplo abaixo:

```javascript
var variavel;
variavel = 'este é o valor da variável';
```

Observe que na primeira linha usamos a palavra ***var***. Esta palavra é usada sempre que desejamos declarar uma nova variável. A ausência dela provocará erro e o programa não executará corretamente. Isso foi feito dessa forma para dizer ao computador que desejamos reservar um local na memória para guardar um dado, podendo ser de qualquer um dos tipos que foram explicados na seção anterior. Além disso, no mesmo comando damos o nome "variavel" a este "local" da memória que desejamos reservar.

Na segunda linha, usamos o sinal de igual para dizer que um determinado **valor**, no caso a ***string*** "**este é o valor da variável**", será armazenado no espaço de memória que nomeamos de "**variavel**". A este sinal de igual damos o nome de **operador de atribuição** (veremos mais operadores na próxima seção). Observe ainda que independentemente do comando, ele sempre termina com um ponto-e-vírgula. Esse elemento nem sempre é indispensável, mas as [**boas práticas**](https://pt.stackoverflow.com/questions/3341/utilizar-ou-n%C3%A3o-ponto-e-v%C3%ADrgula-no-fim-das-linhas-no-javascript) de programação nos falam que é sempre bom utilizar o símbolo. Ele mostra para o computador a finalização da linha de comando. Isso foi feito dessa forma, em Javascript, para dar a liberdade de se colocar vários comandos numa mesma linha. Poderíamos, por exemplo, reescrever as duas linhas de código da seguinte forma:

```javascript
var variavel; variavel = 'este é o valor da variável';
```

<br>

## 3. Operadores

Se as variáveis representam "o que" de um dado sistema, então os operadores seriam o "como". Podemos dividir os operadores em 5 grupos: **aritméticos**, **lógicos**, **binários**, de **atribuição** e de **incremento**/**decremento**. Destes, os mais importantes para nós no momento são os dois primeiros, pois é com eles que executaremos 99% das operações mais comumente encontradas em qualquer trecho de códido (em qualquer linguagem).

<br>

## 3.i [Aritméticos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

<center>

Nome | Operador
:---:|:--------:
Adição | +
Subtração | -
Divisão | /
Multiplicação | *
Módulo | %
Exponenciação | **
Negação Unária | -

</center>

<br>

## 3.ii [Lógicos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operadores_Logicos)

<center>

Nome | Operador
:---:|:--------:
"Ê" lógico | &&
"OU" lógico | &#124; &#124;
"NÃO" lógico | !

</center>

<br>

## 3.iii [Binários](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators) (***Bitwise***)

<center>

Nome | Operador
:---:|:--------:
"Ê" binário | &
"OU" binário | &#124;
"XOR" binário | ^
"NÃO" binário | ~
*left shift* | <<
*right shift* | >>

</center>

<br>

## 3.iv [De Atribuição](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)

Sejam **x** e **y** duas variáveis:

<center>

Nome | Operador (forma 1) | Significado (forma 2)
:---:|:------------------:|:---------------------:
Atribuição | x = y | x = y
Atribuição com adição | x += y | x = x + y
Atribuição com subtração | x -= y | x = x - y
Atribuição com multiplicação | x *= y | x = x * y
Atribuição com divisão | x /= y | x = x / y
Atribuição com resto | x %= y | x = x % y
Atribuição de exponenciação | x **= y | x = x ** y
Atribuição de left shift | x <<= y | x = x << y
Atribuição de right shift | x >>= y | x = x >> y
Atribuição de bitwise "Ê" | x &= y | x = x & y
Atribuição de bitwise "XOR" | x ^= y | x = x ^ y
Atribuição de bitwise "OU" | x &#124;= y | x = x &#124; y

</center>

<br>

## 3.v [De Incremento/Decremento](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

Nome | Operador
:---:|:--------:
Incremento | ++
Decremento | --

<br>

## 4. [Precedência de operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)


<center>

Precedência | Nome | Operadores
:----------:|:----:|:----------:
20 | Agrupamento | ( ... )
19 | Acesso membro a membro | ... **.** ...
18 | Acesso a membro computado | ... [ ... ]
17 | Incremento pós-fixado | ... ++
17 | Incremento / Decremento pós-fixado | ... --
 |  | 
 |  | 
 |  | 
 |  | 
 |  | 

</center>

<br>

## 5 Estruturas básicas de dados

Chamamos este tópico de "estrutura básicas de dados" porque não cobriremos neste tópico estruturas mais avançadas como árvores e grafos. São duas as principais estruturas: ***arrays*** e ***dictionaries***.

<br>

## 5.i. Arranjos (***Arrays***)

Seja em qualquer linguagem de programação, em qualquer tipo de aplicação, você provavelmente terá de lidar com Arranjos ou ***Arrays***. Este é mais um elemento básico que faz parte da estrutura de dados e com ele somos capazes de descrever estruturas muito mais complexas e abstratas, como listas, árvores e grafos. Um ***array*** é uma maneira de organizarmos sequencialmente, na memória do computador, um conjunto de dados. Eles são indispensáveis também para tratarmos os [**laços de repetição**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Lacos_e_iteracoes) que será um assunto tratado na próxima seção.

Na verdade, já vimos um tipo clássico de array implicitamente, quando falamos do tipo de dados ***string***. Internamente em muitas (senão todas as linguagens) as strings possuem em sua strutura uma sequência (***array***) [**imutável**](https://www.sitepoint.com/immutability-javascript/) de caracteres. Tomemos aqui o mesmo exemplo visto no tópico 2:

```javascript
var variavel = 'este é o valor da variável';
```

A variável acima, que nomeamos como "**variavel**", pode ser vista como uma sequência de caracteres que começa com "**e**" e termina com "**l**". Mas como fazemos pra acessarmos cada caractere? Todo array em Javascript é [**indexado**](LINK_EXPLICANDO_INDEXACAO) e tem seu índice começando em zero e terminando na quantidade de elementos, no caso caracteres, menos um. Matematicamente, seja **n** o tamanho do ***array*** e qn <COLOCAR_N_SUBESCRITO>:

<center>

$$
q_n = n - 1
$$

</center>

<br>

A notação usada, em outras palavras, [**sintaxe**](LINK_EXPLICANDO_SINTAXE), em Javascript para que se acesse qualquer elemento de um dado índice i é dada por **a\[i\]**, onde **a** é o array em questão. Assim, o acesso aos caracteres da string armazenada na variável abaixo seria dado como na tabela que segue:

```javascript
var logradouro = 'Rua Leopoldina';
```

<center>

 Sintaxe | Valor
:-------:|:-----:
logradouro[0] | 'R'
logradouro[1] | 'u'
logradouro[2] | 'a'
logradouro[3] | ' '
logradouro[4] | 'L'
logradouro[5] | 'e'
logradouro[6] | 'o'
logradouro[7] | 'p'
. . . | . . .
logradouro[13] | 'a'

</center>

<br>

## 5.ii. Dicionários (***Dictionaries***)

<br>

## 6. Fluxo de controle

<br>

## 6.i. 

<br>

## 6.ii. 

<br>

## 6.iii. Decisão com ***if-else***

<br>

## 6.iv. Laço de repetição com ***while***

<br>

## 6.v. Alternativa ao ***while*** com o ***do-while***

<br>

## 6.vi. Laço de reperição com ***for***

<br>

## 6.vii. Laço de repetição com ***foreach***

<br>

## 7. Funções

<br>

## 8. Tipos abstratos de dados

<br>

## 8.i. Classes e Objetos

<br>

## 8.ii. Herança

<br>

## 8.iii. Polimorfismo

<br>

## Exercícios:
