React = require 'react'

AppView = React.createClass
    render: ->
        <p>Welcome to <%= options.project_name %>.</p>

module.exports = AppView

