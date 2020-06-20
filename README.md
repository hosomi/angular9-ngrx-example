# angular9-ngrx-example

* [Angular](https://angular.io/)
* [NgRx](https://ngrx.io/)

## setup

[Angular - Setting up the local environment and workspace](https://angular.io/guide/setup-local)  

### 1. Node.js LTS 版をインストール

2020 年 6 月現在は v12 [Releases | Node.js](https://nodejs.org/en/about/releases/)） 
トップページ（[Node.js](https://nodejs.org/en/)  ）から LTS を選択。  

インストール後、ターミナル等でバージョン確認。
```cmd
> node -v
v12.18.1
```

### 2. Angular CLI インストール

ターミナル等で下記コマンド実行。

```
PS > npm install -g @angular/cli
```

インストール後、ターミナル等でバージョン確認。

```
PS > ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 9.1.9
Node: 12.18.1
OS: win32 x64

Angular:
...
Ivy Workspace:

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.901.9
@angular-devkit/core         9.1.9
@angular-devkit/schematics   9.1.9
@schematics/angular          9.1.9
@schematics/update           0.901.9
rxjs                         6.5.4
```

### 3. git インストール （省略）


## run


```
> git clone https://github.com/hosomi/angular9-ngrx-example.git
> cd angular9-ngrx-example
> npm i
> ng serve
```
browser:  
``http://localhost:4200``


## env

```
angular9-ngrx-example> ng --version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 9.1.9
Node: 12.18.1
OS: win32 x64

Angular: 9.1.11
... animations, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router
Ivy Workspace: Yes

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.901.9
@angular-devkit/build-angular     0.901.9
@angular-devkit/build-optimizer   0.901.9
@angular-devkit/build-webpack     0.901.9
@angular-devkit/core              9.1.9
@angular-devkit/schematics        9.1.9
@angular/cli                      9.1.9
@ngtools/webpack                  9.1.9
@schematics/angular               9.1.9
@schematics/update                0.901.9
rxjs                              6.5.5
typescript                        3.8.3
webpack                           4.42.0
```

> [package.json](package.json)