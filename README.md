# gulp-scss-starter

Основан на [gulp-scss-starter](https://github.com/andreyalexeich/gulp-scss-starter) с некоторыми изменениям. 
Данная версия сборки заточена под промежуточный этап верстки с прицелом на дальнейшую ее интеграцию в CMS или фреймворки, в связи с этим:
* изменена валидация стилей (значительно упрощена)
* добавлена поддержка vue2 (компиляция *.vue файлов)
* убрано большинство оптимизаций (webp, компиляция спрайтов, сжатие картинок, минификация css/js)


## :fire: Особенности
* именование классов по [БЭМ](https://ru.bem.info/)
* используется БЭМ-структура
* используется препроцессор [SCSS](https://sass-lang.com/)
* используется транспайлер [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах
* используется [Webpack](https://webpack.js.org/) для сборки JavaScript-модулей
* используется проверка кода на ошибки перед коммитом

## :hammer_and_wrench: Установка
* установите [NodeJS](https://nodejs.org/en/) ***16-ой версии***  и [npm](https://npmpkg.com/en/docs/install)
* скачайте сборку с помощью [Git](https://git-scm.com/downloads): ```git clone https://github.com/svn72/gulp-scss-starter.git```
* установите ```gulp``` глобально: ```npm install -g gulp-cli```
* установите ```bem-tools-core``` глобально: ```npm install -g bem-tools-core```
* перейдите в скачанную папку со сборкой: ```cd gulp-scss-starter```
* скачайте необходимые зависимости: ```npm i```
* чтобы начать работу, введите команду: ```npm run dev``` (режим разработки)
* чтобы собрать проект, введите команду ```npm run build``` (режим сборки)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером.  
Режим сборки предполагает оптимизацию проекта: сжатие изображений, минифицирование CSS и JS-файлов для загрузки на сервер.

## :open_file_folder: Файловая структура

```
gulp-scss-starter
├── dist
├── gulp-tasks
├── src
│   ├── blocks
│   ├── fonts
│   ├── img
│   ├── js
│   ├── styles
│   ├── views
├── gulpfile.babel.js
├── webpack.config.js
├── package.json
├── .babelrc.js
├── .bemrc.js
├── .eslintrc.json
├── .stylelintrc
├── .stylelintignore
└── .gitignore
```

* Корень папки:
    * ```.babelrc.js``` — настройки Babel
    * ```.bemrc.js``` — настройки БЭМ
    * ```.eslintrc.json``` — настройки ESLint
    * ```.gitignore``` – запрет на отслеживание файлов Git'ом
    * ```.stylelintrc``` — настройки Stylelint
    * ```.stylelintignore``` – запрет на отслеживание файлов Stylelint'ом
    * ```gulpfile.babel.js``` — настройки Gulp
    * ```webpack.config.js``` — настройки Webpack
    * ```package.json``` — список зависимостей
* Папка ```src``` - используется во время разработки:
    * БЭМ-блоки: ```src/blocks```
    * шрифты: ```src/fonts```
    * изображения: ```src/img```
    * JS-файлы: ```src/js```
    * SCSS-файлы: ```src/styles```
    * HTML-файлы: ```src/views```
* Папка ```dist``` - папка, из которой запускается локальный сервер для разработки (при запуске ```npm run dev```)
* Папка ```gulp-tasks``` - папка с Gulp-тасками

## :keyboard: Команды
* ```npm run lint:styles``` - проверить SCSS-файлы. Для VSCode необходимо установить [плагин](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint). Для WebStorm
или PHPStorm необходимо включить Stylelint в ```Languages & Frameworks - Style Sheets - Stylelint``` (ошибки будут исправлены автоматически при сохранении файла)
* ```npm run lint:styles --fix``` - исправить ошибки в SCSS-файлах
* ```npm run lint:scripts``` - проверить JS-файлы
* ```npm run lint:scripts --fix``` - исправить ошибки в JS-файлах
* ```npm run dev``` - запуск сервера для разработки проекта
* ```npm run build``` - собрать проект без запуска сервера
* ```npm run build:views``` - собрать HTML-файлы
* ```npm run build:styles``` - скомпилировать SCSS-файлы
* ```npm run build:styles_blocks``` - скомпилировать SCSS-файлы без объединения
* ```npm run build:scripts``` - собрать JS-файлы
* ```npm run build:images``` - собрать изображения
* ```npm run build:fonts``` - собрать шрифты
* ```npm run bem-m``` - добавить БЭМ-блок
* ```npm run bem-c``` - добавить компонент

## :bulb: Рекомендации по использованию
### Компонентный подход к разработке сайтов
* каждый БЭМ-блок имеет свою папку внутри ```src/blocks/modules```
* папка одного БЭМ-блока содержит в себе один HTML-файл, один SCSS-файл и один JS-файл (если у блока используется скрипт)
    * HTML-файл блока импортируется в файл ```src/views/index.html``` (или в необходимый файл страницы, откуда будет вызываться блок)
    * SCSS-файл блока импортируется в файл ```src/blocks/modules/_modules.scss```
    * JS-файл блока импортируется в ```src/js/import/modules.js```

Пример структуры папки с БЭМ-блоком:
```
blocks
├── modules
│   ├──header
│   │   ├── header.html
│   │   ├── header.js
│   │   ├── header.scss
```

Чтобы вручную не создавать соответствующие папку и файлы, достаточно в консоли прописать следующие команды:
* ```npm run bem-m my-block``` - для создания БЭМ-блока в ```src/block/modules``` (для основных БЭМ-блоков), где ```my-block``` - имя БЭМ-блока; 
* ```npm run bem-с my-component``` - для создания компонента в ```src/blocks/components``` (для компонентов), где ```my-component``` - имя компонента

### Страницы проекта
* страницы проекта находятся в папке ```src/views```

### Шрифты
* шрифты находятся в папке ```src/fonts```
    * используйте [форматы](https://caniuse.com/#search=woff) ```.woff``` и ```.woff2```
    * шрифты подключаются в файл ```src/styles/base/_fonts.scss```
    * сконвертировать локальные шрифты можно с помощью [данного сервиса](https://onlinefontconverter.com/)

### Изображения
* изображения находятся в папке ```src/img```

### Сторонние библиотеки
* все сторонние библиотеки устанавливаются в папку ```node_modules```
    * для их загрузки воспользуйтеcь командой ```npm add package_name```
    * для подключения JS-файлов библиотек импортируйте их в самом начале JS-файла БЭМ-блока (то есть тот БЭМ-блок, который использует скрипт), например:
    ```javascript
    import $ from "jquery";
    ```
    * для подключения стилевых файлов библиотек импортируйте их в файл ```src/styles/vendor/_libs.scss```
    * JS-файлы и стилевые файлы библиотек самостоятельно изменять нельзя

:warning: Если в вашем проекте используется несколько библиотек, которые необходимо подключать на нескольких страницах, во избежании ошибок нужно:
* по пути ```src/js/import``` создать папку ```pages```
* в папке ```pages``` создать js-файл для страницы, например, ```pageA.js```, и импортировать туда библиотеку, которая будет использоваться только на этой странице
    * аналогично проделать шаг для дополнительных страниц
* в файле ```webpack.config.js``` в точку входа добавить js-файлы страниц, пример:
```javascript
entry: {
    main: "./src/js/index.js",
    pageA: "./src/js/import/pages/pageA.js",
    pageB: "./src/js/import/pages/pageB.js"
}
```
* подключить скомпилированные js-файлы на необходимых страницах
