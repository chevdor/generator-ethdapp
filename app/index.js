'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var EthDappGenerator = yeoman.generators.Base.extend({
    initializing: function() {
        this.pkg = require('../package.json');
    },

    prompting: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the ethraordinary EthDapp generator!'
        ));

        var prompts = [{
            type: 'input',
            message: 'Let´s start with your name?',
            name: 'Author',
        }, {
            type: 'input',
            message: 'What about your email?',
            name: 'Email',
        }, {
            type: 'input',
            name: 'DappName',
            message: 'How are we going to call this killer Dapp?'
        }, {
            type: 'input',
            name: 'DappId',
            message: 'We will also need an Id?',
            default: this.appname
        }, {
            type: 'input',
            name: 'Description',
            message: 'How about a description, it will be done...',
        }, {
            type: 'input',
            name: 'DappVersion',
            message: 'What version do we start with?',
            default: '0.1.0'
        }];

        this.prompt(prompts, function(props) {
            this.Author = props.Author;
            this.Email = props.Email;
            this.DappName = props.DappName;
            this.DappId = props.DappId;
            this.Description = props.Description;
            this.DappVersion = props.DappVersion;

            done();
        }.bind(this));
    },

    writing: {
        app: function() {
            this.template('README.adoc');
            this.template('manifest.json');
            this.template('LICENSE');
            this.template('index.html');
            this.template('deploy.sh');

            this.src.copy('app.js', 'app.js');
            this.src.copy('app.css', 'app.css');

            this.directory('images', 'images', function(body, src, dest, options) {
                console.log(' + ' + src);
            })
        },

        // projectfiles: function () {
        //   this.src.copy('editorconfig', '.editorconfig');
        //   this.src.copy('jshintrc', '.jshintrc');
        // }
    },

    end: function() {
        // nothing to do here yet
    }
});

module.exports = EthDappGenerator;
