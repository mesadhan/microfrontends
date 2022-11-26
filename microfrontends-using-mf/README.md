# How to run this project

Open terminal and run the following commands separately from the root directory of the project.

```bash
cd common && yarn install && yarn start
cd main && yarn install && yarn start
```


## Architecture

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nmzqxzniw46ou7988jfh.png)

 # Demonstration

In this demonstration we have to micro-frontend apps, one is `common` another one is `main`. Common app is a shared library that contains common components and `main app` is a main application that uses common components. 

## Common Shared : Micro-Frontend Application

Home page contains a header and cart. Header is a common component that is shared with `main` application. Cart icon is a common component that is shared with `main` application. 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7rjd206sskxbd1mq4hlg.png)

Also, to keep track of the users viewing statistics we have to use `analytics` component. Analytics component is a common component that is shared with `main` application.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7lrpf88jzmfuprssa0ht.png)

`Note`: This common app is a shared library that contains common components and store so that later we can use it in other micro-frontend applications.

> Eg. useCartStore, userProductStore, useViewingStatisticsStore etc.


## Main : Micro-Frontend Application

In this main application we have to use common components like header, cart and analytics (users viewing statistics). We can use same components in other micro-frontend applications not only that we can customize those components as well like main components are black but we can change the color of header and components to orange.

Home page we have 

- header
- cart
- analytics (users viewing statistics)
- product list
- product filter options (eg. Cocktails and ingredients or glasses)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/aje72wsb5xhqenbv0tt4.png)


We can add products to cart and remove products from cart. Also, we can filter products by cocktails and ingredients or glasses.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4i6l5agbe64applixda2.png)


User can look up details of the cocktail including images

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pexbfud7jtkbw4kz5qre.png)

We have a common provider using that we can keep track of the users viewing statistics and we can use that for analytics purpose.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uluj9wm31iku7ep9ak7v.png)


`Note:` This is a simple demonstration of a micro-frontend application. We can use this architectural style to build a complex application. It is a good way to maintain the codebase and make it more flexible. Need teamwork to make it more flexible and production ready. We could do a bunch of improvements like could use typescript, a common CSS bundle, and publishing to packages repo or CDN to share common components, additionally, we could manage components versioning as well.