polar = require 'polar'

css_compiler = require './compilers/css'
js_compiler = require './compilers/js'
jsx_renderer = require './renderers/jsx'

app = polar.setup_app
    port: <%= options.port %>
    middleware: [css_compiler, js_compiler, jsx_renderer]

app.get '/', (req, res) ->
    res.render 'base'

app.start()

