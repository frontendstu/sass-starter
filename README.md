# Sass Starter

A barebones starter template to get your app off the ground quickly. Featuring little to no mixins, no pre-defined variables or utility classes.

## Getting Started

In order to use Sass Starter, you will need the following installed on your machine:

-   Node.js v22.4.1 (https://nodejs.org/en)
-   NPM v10.8.1 (https://www.npmjs.com/)

## Clone Repository

```shell
https://github.com/frontendstu/sass-starter
```

## Installation

1. Navigation to project directory
2. Run the following command

```shell
npm install
```

3. Once the package is installed, run the following command

```shell
npm run start
```

# Using Built-In Components

Sass Starter has a few built-in components that can be used to get your project going from the start. As Sass Starter is a bare-bones template, it is up to you to create the custom properties yourself.

## Built-In Buttons

Sass starter comes with a very basic `.btn` class for you to use as a good starting point for creating buttons. From default the `.btn` class only consist of some padding, border and outline styles.

### Using the Built-In `.btn`

```html
<a href="index.html" class="btn">Button</a>
```

## Built-In Header Sass Starter comes with a pre-made header and header menu

for you to use. Simply use this markup and you're good to go. ### Using the
Built-In Header

```html
<header class="header">
    <div class="container">
        <div class="header__wrapper">
            <div class="header__branding">
                <a href="#">Sass Starter</a>
            </div>

            <button
                class="header__toggle"
                aria-controls="header-nav"
                aria-expanded="false"
            >
                <img
                    src="assets/images/icon-menu-hamburger.svg"
                    alt=""
                    aria-hidden="true"
                    class="menu-open-icon"
                />

                <img
                    src="assets/images/icon-menu-close.svg"
                    alt=""
                    aria-hidden="true"
                    class="menu-close-icon"
                />
                <span class="sr-only">Menu</span>
            </button>

            <nav class="header__menu" id="header-nav">
                <ul
                    role="list"
                    class="header__menu-items"
                    style="--menu-gap: 1rem"
                >
                    <li><a href="#">Learn</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a class="btn" href="#">Download</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>
```
