## Getting Started

For most developers, Node and Yarn is all you'll need.

1. [Install Node](https://nodejs.org/en/download/)

    - The **preferred** method of installing Node.js locally is via [Node Version Manager](https://github.com/creationix/nvm) (or NVM).
        - NVM is available via [Homebrew](https://docs.brew.sh/Installation) as well:
            - `$ brew update`
            - `$ brew install nvm`
            - `$ mkdir ~/.nvm`
            - Depending on your shell:
            - (`.bash_profile` example here): `$ echo "export NVM_DIR=~/.nvm\nsource $(brew --prefix nvm)/nvm.sh" >> ~/.bash_profile`
            - (`.zshrc` example here): `$ echo "path+=('~/.nvm')\nexport PATH\nsource $(brew --prefix nvm)/nvm.sh" >> ~/.zshrc/n source ~/.zshrc`
        - `$ nvm install 15.6.0 && nvm use 15.6.0`

2. [Install Yarn](https://yarnpkg.com/en/docs/install)
3. Clone the [repo](https://github.com/Viome/viome-next) `$ git clone https://github.com/Viome/viome-next.git`
4. Install Dependancies using `yarn install` in the workspace
5. [Install EditorConfig Plugin for your IDE](https://editorconfig.org/#download)
    - If you are using VS Code **preferred**, you can do the following for an enhanced workflow, Install the following:
        - [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
            - You may need to run `ESLint: Manage Library Execution` from the VSCode command palette and click Allow Everywhere.
        - [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
            - You will need to disable the default linters. Instructions are availble at the provided link up above.
        - [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
        - [CSS Modules Syntax](https://marketplace.visualstudio.com/items?itemName=andrewleedham.vscode-css-modules)
        - [SASS](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
        - [SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss)

## Yarn Commands

We're using [Yarn](https://yarnpkg.com/) to manage dependencies. Here are some Yarn commands you can run:

- `yarn install` Install all project dependencies (this should be ran everytime you checkout or branch off `master` to make sure you have the latest dependancies)
- `yarn next` starts Next.js in development mode at [localhost:3000](http://localhost:3000)
- `yarn build` builds the application for production usage
- `yarn start` starts a Next.js production server
- `yarn lint` will run eslint and stylelint checking for formatting and errors
