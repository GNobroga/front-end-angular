# Criar roteamento

- ng g m --routing

# Dica de organizacao

- Criar um modulo que vai conter os imports de outros modulos e
utilizar esse modulo pra simplificar.

# Pipe async
- Usado para tratar observable

```
    Observable | async
```

# Atualizar versao do Angular

```
    ng version
    ng update
    ng update @angular/cli@version  @angular/core@
```

# Mais sobre diretivas

A diretiva pega a referencia do elemento e 
faz mudancas, por exemplo, mudanca no estilo
ou comportamento e um componente.

# RXJS Observable

https://rxjs.dev/deprecations/breaking-changes


# Classe Location para retornar para o rota anterior

package @angular/common

````
    constructor(private _location: Location) {}

    this.location.back(); // Voltar para o historico anterior da pagina, igual o location.

````

# Atualizao no FormBuilder

## Classes novas

**NonNullableFormBuilder** - Cria configuracao de NonNullable para todos os campos.

````javascript

    this.form = this.formBuilder.group({
        name: new FormControl<string>("", { nonNullable: true }),
        category: ['']
    })


````

# Componentes Inteligentes e Burros

- Inteligentes: 
    Sao componentes que se comunicam com outros componentes, atraves de injercao
    de dependencia, etc. Coloca-se na pasta: **container**;


- Burros: 
    Nao faz comunicao com outros componentes, so recebe input e output coloca-se na pasta **components**.

# Guards

Existem vários tipos de guards no Angular:

**CanActivate**: Determina se uma rota pode ser ativada ou não. Verifica se o usuário tem permissão para acessar uma determinada rota. É útil para controlar o acesso a áreas restritas do aplicativo.

**CanActivateChild**: Funciona de forma semelhante ao CanActivate, mas é usado para proteger as rotas filhas de um componente pai. Verifica se o usuário tem permissão para acessar as rotas filhas.

**CanDeactivate**: Determina se uma rota pode ser desativada ou não. Verifica se é seguro permitir que o usuário saia de uma rota, por exemplo, se houver alterações não salvas em um formulário.

**Resolve**: Pré-carrega os dados necessários para uma rota antes de ativá-la. É útil quando você precisa buscar dados de uma API ou realizar alguma lógica de inicialização antes de exibir uma rota.

````
    ng g resolver path

     {path: "second/:id", component: SecondPageComponent, resolve: [saveResolver]} <- Declarar um Guardar pra rota.
````

**CanLoad**: Determina se um módulo assíncrono pode ser carregado ou não. Verifica se o usuário tem permissão para carregar um determinado módulo assíncrono, como um módulo lazy-loaded.

