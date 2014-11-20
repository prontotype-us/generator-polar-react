$ = require 'jquery'
React = require 'react'
AppView = require './components/app-view'

$ ->
    console.log "Welcome to <%= options.project_name %>."
    React.render <AppView />, $('#app')[0]

