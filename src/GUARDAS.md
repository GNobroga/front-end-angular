# Protecao de Rotas (Guards)

Por exemplo, restringimos o acesso de um usuario a area de membros anes de serem autenti
cados por meio do sistema de login.

Ou, se um usuario tiver alteracoes pendentes que precisam ser salvas antes de navegar para fora de um componente de opcoes.

# Criar guardas

```bash

    ng g guard path

    or

    ng g guard resolver name

```

# Tipos de guardas de rota

```typescript

    const routes: Routes = [
        {
            path: '',
            component: HomeComponent
        },
        {
            path: 'account',
            component: AccountComponent,
            canActivate: [Guards...],
            canDeactivate: [Guards...],
            canLoad: [Guards...] 
        }  
    ]


```
```html

    <a routerLink="account" [queryParams]="{ username: 'Gabriel', password: '123' }">
```

**CanActivate** 
<p style="padding-left: 30px;">
Decide se uma rota pode ser acessada, como um sistema de login.
</p>    

<hr/>

**CanDeactivate** 
<p style="padding-left: 30px;">
Faz algo quando o usuario deseja sair da rota, por exemplo, salvar algo antes de ir para outra rota.
</p>    

<hr/>

**CanLoad** 
<p style="padding-left: 30px;">
Ele tras um seguimento de paginas ja acessadas, desse modo, eu posso verificar se 
uma pagina ja foi carregada pra dar a acesso a rota que eu estou protegendo. Usado com modulos Lazy-load.
</p>    

<hr/>

**CanActivateChild** 
<p style="padding-left: 30px;">
E semelhante a <strong>CanActivate</strong>, mas se aplica a rotas filhas.
</p>    

<hr/>


**Resolver** 
<p style="padding-left: 30px;">
Permite pré-carregar dados antes de acessar uma rota.
</p>    

<hr/>

# Inject

Serve para pedir o angula para efetuar a injecao de dependencia de um componente.


# Standalone Components

E a capacidade de usar componente sem usar um modulo especifico.

```typescript

    @Component({
        selector: 'app-root',
        template: '',
        standalone: true,
        imports: [Modules...]
    });
    export class AppComponent {}

```

Dentro do main.ts


```typescript


    bootstrapApplication(AppComponent, {
        providers: [
            importProvidersFrom(AppRoutingModule)
        ]
    }).catch( err => console.error(err));

```
