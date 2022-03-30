import "dotenv/config"
import "./database"
import AdminJS from "adminjs"
import AdminJSExpress from '@adminjs/express'
import AdminJSSequelize from '@adminjs/sequelize'
import express from "express"

import UsersResource from "./resources/UsersResource"
import ProjectsResource from "./resources/ProjectsResource"

import locale from "./locales"

AdminJS.registerAdapter(AdminJSSequelize)

const app = express()

const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [ UsersResource, ProjectsResource ],
    ...locale,
})

const router = AdminJSExpress.buildRouter(adminJS)

app.use(adminJS.options.rootPath, router)
app.listen(5050, () => {
    console.log('AdminJS está sendo executado em: http://localhost:5050/admin ')
})