# Fundamentos de Javascript

## Índice
1. Variáveis
   1. Tipo de variáveis
   2. Instanciando variáveis
2. Operadores
   1. Aritméticos
   2. Lógicos
   3. Binários
   4. De Atribuição
   5. De Incremento/Decremento
3. Precedência de operadores
4. Arranjos (***Arrays***)
5. Fluxo de controle
6. Funções
7. Classes e Objetos
8. Herança
9. Polimorfismo

<br>

## 1. Variáveis
Na matemática o termo variável é dado ao símbolo que representa qualquer elemento dentro de um conjunto. Abaixo, temos um exemplo de variável pertencente ao conjunto $\ U$:

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

Note que tanto o número <!--$1$-->![1](images/1.svg) quanto o valor fracionário <!--$1.35 =\frac{27}{20}$-->![math equation 4](images/math_equation_4.svg) ou até mesmo a palavra $Infinity$ (sem aspas simples ou duplas) são todos considerados como **números** (***number***). Observe também que tanto a palavra 'casa' quanto "jardim" são ambas consideradas como ***string***, que nada mais é do que uma **sequência de caracteres**. Tanto aspas simples quanto aspas duplas caracterizam strings, mas existem [**prós e contras**](https://staxmanade.com/2018/03/should-i-use-javascript-single-or-double-quotes/) quanto ao uso de uma forma ou outra. Veremos logo a seguir a tipagem de variáveis mais a fundo.

<br>

## 2. Tipos de Variáveis

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

 Valor  |  Tipo  |  Texto
:------:|:------:|:-------:
'teste' | *string* | teste
'123' | *string* | 123
123 | *number* | ----------
2.675 | *number* | ----------
"4.674" | *string* | 4.674
"0" | *string* | 0
'Infinity' | *string* | Infinity
Infinity | *number* | ----------
"-Infinity" | *string* | -Infinity
-Infinity | *number* | ----------
"strings 'são' confusas" | *string* | strings 'são' confusas
'não "é" mesmo?' | *string* | não "é" mesmo?
'' | *string* | *null*
"" | *string* | *null*

</center>

<br>

## Exercícios:
