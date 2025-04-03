/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RegisterImport } from './routes/register'
import { Route as LoginImport } from './routes/login'
import { Route as IndexImport } from './routes/index'
import { Route as ForgotPasswordIndexImport } from './routes/forgot-password/index'
import { Route as ForgotPasswordResetImport } from './routes/forgot-password/reset'

// Create/Update Routes

const RegisterRoute = RegisterImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ForgotPasswordIndexRoute = ForgotPasswordIndexImport.update({
  id: '/forgot-password/',
  path: '/forgot-password/',
  getParentRoute: () => rootRoute,
} as any)

const ForgotPasswordResetRoute = ForgotPasswordResetImport.update({
  id: '/forgot-password/reset',
  path: '/forgot-password/reset',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
    '/forgot-password/reset': {
      id: '/forgot-password/reset'
      path: '/forgot-password/reset'
      fullPath: '/forgot-password/reset'
      preLoaderRoute: typeof ForgotPasswordResetImport
      parentRoute: typeof rootRoute
    }
    '/forgot-password/': {
      id: '/forgot-password/'
      path: '/forgot-password'
      fullPath: '/forgot-password'
      preLoaderRoute: typeof ForgotPasswordIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/forgot-password/reset': typeof ForgotPasswordResetRoute
  '/forgot-password': typeof ForgotPasswordIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/forgot-password/reset': typeof ForgotPasswordResetRoute
  '/forgot-password': typeof ForgotPasswordIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/forgot-password/reset': typeof ForgotPasswordResetRoute
  '/forgot-password/': typeof ForgotPasswordIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/login'
    | '/register'
    | '/forgot-password/reset'
    | '/forgot-password'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login'
    | '/register'
    | '/forgot-password/reset'
    | '/forgot-password'
  id:
    | '__root__'
    | '/'
    | '/login'
    | '/register'
    | '/forgot-password/reset'
    | '/forgot-password/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LoginRoute: typeof LoginRoute
  RegisterRoute: typeof RegisterRoute
  ForgotPasswordResetRoute: typeof ForgotPasswordResetRoute
  ForgotPasswordIndexRoute: typeof ForgotPasswordIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LoginRoute: LoginRoute,
  RegisterRoute: RegisterRoute,
  ForgotPasswordResetRoute: ForgotPasswordResetRoute,
  ForgotPasswordIndexRoute: ForgotPasswordIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/login",
        "/register",
        "/forgot-password/reset",
        "/forgot-password/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/register": {
      "filePath": "register.tsx"
    },
    "/forgot-password/reset": {
      "filePath": "forgot-password/reset.tsx"
    },
    "/forgot-password/": {
      "filePath": "forgot-password/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
