/*
    What is a package?
    A package is a reusable bundle of code and/or assets
    Libraries, Tools, Shared Components, Your app
    Also called dependencies or modules

    NPM
    World's largest software registry

    NPM is also a CLI bundled with every Node.js installation

    package.json
    Every project's starting point
    Metadata: your project's name, version, description, author, repository, license, etc
    Dependencies: the list of packages used by your project
    Scripts: commands to automate your development tasks

    Create a new project:
    npm init
    The npm init command allows to create a package.json file.
    Tip: You can use the -y option to skip the prompts

    Install a package
    npm install <package_name>
    Download and add package to dependencies
    npm install --save-dev <package_name>
    Download and add package to devDependencies

    dependencies vs. devDependencies
    dependencies are packages that need to run the main production applciation
    devDependencies are packages used in development to debug etc.
*/