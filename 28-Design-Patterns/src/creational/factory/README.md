# Factory Method

## Intenção

Definir uma interface para criar um objeto, mas deixar as subclasses decidirem que classe istanciar. O factory Method permite adiar a instanciação para as subclasses

## Sobre

- É um padrão de projeto de criação (lida com a criação de objetos)
- Oculta a lógica de instanciação do código cliente. O método fábrica será responsável por istanciar as classes desejadas
- É obtido através de herança. O método fábrica pode ser criado ou sobrescrito por subclasses
- Dá flexibilidade ao código cliente permitindo a criação de novas factories sem a necessidade de alterar código já escrito (OCP)
- Pode usar parâmetros para determinar o tipo dos objetos a serem criados ou os parâmetors a serem enviados aos objetos sendo criados.