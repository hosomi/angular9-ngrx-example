# angular9-ngrx-example

[![Build Status](https://kiyotakehosomi.visualstudio.com/angular9-ngrx-example/_apis/build/status/hosomi.angular9-ngrx-example?branchName=master)](https://kiyotakehosomi.visualstudio.com/angular9-ngrx-example/_build/latest?definitionId=8&branchName=master)  

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

### 4. エディター（好きなものを）

:link: [Visual Studio Code – コード エディター | Microsoft Azure](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)  


## run


```
> git clone https://github.com/hosomi/angular9-ngrx-example.git
> cd angular9-ngrx-example
> npm i
> ng serve
```
browser:  
``http://localhost:4200``

## tests

``ng e2e``

```
PS angular9-ngrx-example> ng e2e
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
: Compiled successfully.

DevTools listening on ws://127.0.0.1:57209/devtools/browser/1d65500c-e286-4d2d-af4e-99e6ae17c3a9
Jasmine started

  workspace-project App
    √ informations show

Executed 1 of 1 spec SUCCESS in 1 sec.
```


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


---

## :books: リファレンス

:link: [Angular 日本語ドキュメンテーション](https://angular.jp/)  
:link: [Angular CLI](https://cli.angular.io/)  
:link: [NgRx - @ngrx/store](https://ngrx.io/guide/store)  
:link: [Protractor](https://protractor.angular.io/)  
