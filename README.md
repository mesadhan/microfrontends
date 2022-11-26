# Micro Frontends

We all heard about microservices this is a new architectural style that is gaining popularity. It is a way to break down a monolithic frontend into smaller, more manageable pieces. It is a way to make frontend more flexible and easier to maintain.

`Core details information about Micro Frontends`

- Reference1: https://micro-frontends.org/
- Reference2: https://martinfowler.com/articles/micro-frontends.html


# How to build a micro-frontend application?

There are several ways to build a micro-frontend application. Big companies like Google, Amazon, Microsoft,  IBM are using this architecture style but they have their own implements like custom components and iframe. But there are some open source projects that can help you to build a micro-frontend application but still this architecture style is not a standard. I explored the internet and found out [webpack5 module federation](https://webpack.js.org/concepts/module-federation/) and [single-spa](https://single-spa.js.org/) are the production ready projects that can help to build a micro-frontend application.


## 1. Why I choose webpack5 Module Federation

Modularity is a better way to maintain codebase. Module federation open that door for sharing framework module or vanilla components via remote import and export to reuse them whenever we need.


## 2. Why I choose Single-spa

Single spa is the best way, without knowing internal details because they have simple implementations, Single-spa is a framework agnostic and a community driven project. 



`Summary Opinion:` I choose `Module Federation (mf)` because I have hands-on webpack experiences. Also, I have to complete this task in a short time period and don't need to be a framework agnostic. But If I had to be framework agnostic then I will choose single-spa. Module federation uses remoteEntry on the other single-spa uses parcel to share components. Single-spa act like orchestrator when we have multiple frameworks (like angular, react, vue and vanilla js) but module federation have some limitations on sharing components between cross frameworks like we could not directly share react component to angular application but single-spa can do that. So that doesn't mean module federation is bad, cause single-spa do routing over the top and module federation do low level component sharing. So both are good and have their own pros and cons. We might use both of them together to build a micro-frontend application.



## 3. POC Micro-frontend applications are,

- microfrontends-using-mf
- microfrontends-using-single-spa

Check details in the README.md file of each project.



## Run microfrontends-using-mf

```
cd microfrontends-using-mf/common && yarn install && yarn start
cd microfrontends-using-mf/main && yarn install && yarn start
```


# Thank You!