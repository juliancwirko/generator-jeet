'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var JeetGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../package.json');

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function () {
        var done = this.async();

        // have Yeoman greet the user
        this.log(this.yeoman);

        // replace it with a short and sweet description of your generator
        this.log(chalk.magenta('Yo Jeet!.'));

        var prompts = [{
            type: 'confirm',
            name: 'jeetScss',
            message: 'Would you like to use Jeet with Scss? (default with Stylus)',
            default: false
        }];

        this.prompt(prompts, function (props) {
            this.jeetScss = props.jeetScss;

            done();
        }.bind(this));
    },

    app: function () {
        this.mkdir('app');
        this.mkdir('dist');
        this.mkdir('app/css');
        this.mkdir('app/js');
        this.copy('index.html', 'app/index.html');
        this.copy('js/script.js', 'app/js/script.js');

        if (this.jeetScss) {
            this.mkdir('app/scss');
            this.copy('jeet-scss/scss/style.scss', 'app/scss/style.scss');
            this.copy('jeet-scss/Gruntfile.js', 'Gruntfile.js');
        } else {
            this.mkdir('app/styl');
            this.copy('jeet-stylus/styl/style.styl', 'app/styl/style.styl');
            this.copy('jeet-stylus/Gruntfile.js', 'Gruntfile.js');
        }

        this.copy('_bowerrc', '.bowerrc');
        this.template('_package.json', 'package.json');
        this.template('_bower.json', 'bower.json');
    },

    projectfiles: function () {
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
    },

    install: function () {
        this.installDependencies();
    }
});

module.exports = JeetGenerator;
