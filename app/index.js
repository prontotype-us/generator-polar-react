var yeoman = require('yeoman-generator');
var util = require('util');
var _ = require('underscore');

module.exports = yeoman.generators.Base.extend({
    constructor: function() {
        yeoman.generators.Base.apply(this, arguments);
    },

    setOptions: function() {

        this.option('port', {
            desc: "Server port",
            type: Number,
            defaults: 5555
        });

    },

    askProjectName: function() {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'project_name',
            message: "Project name",
            default: this.appname
        }, function (answer) {
            _.extend(this.options, answer);
            done();
        }.bind(this));
    },

    writing: {
        app: function() {
            console.log("Installing app " + this.options.project_name + "...");

            this.template('server.coffee');

            this.dest.mkdir('compilers');
            this.dest.mkdir('renderers');
            this.template('compilers/css.coffee');
            this.template('compilers/js.coffee');
            this.template('renderers/jsx.coffee');

            this.dest.mkdir('views');
            this.template('views/base.jade');

            this.dest.mkdir('static');
            this.dest.mkdir('static/css');
            this.template('static/css/base.sass');
            this.dest.mkdir('static/js');
            this.template('static/js/helpers.coffee');
            this.template('static/js/base.coffee');
            this.dest.mkdir('static/js/components');
            this.template('static/js/components/app-view.coffee');
        }
    }

});

