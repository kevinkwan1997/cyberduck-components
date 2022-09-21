


# OVERVIEW



## REPOSITORIES

1. cyberduck repository (base repository)
    - contains our CLI
    - has the ability to generate template for new company with typography, base css, header (configurable menu and nav), footer (optional), and hero(optional) set
    - this is the branch we will be cloning and loading our components into for testing
    - also serves as the template that will be used by the CLI to generate a new website
    - The 'develop' branch will contain ONLY file structure, no components. Only create websites/components from a separate branch of develop
    - Before merging anything to develop, we'll have a mini 'PR review'. This will be necessary to update configs, services, and general improvements

2. cyberduck-components repository
    - contains all of the components we create
    - serves as our library that we use as a dependency in cyberduck

3. cyberduck-components-browser
    - Simple repository containing website to let us browse through/search for components
    - Will likely be hosted on netlify for free so we can have it up to browse at all times

## WORKFLOW 

1. Make a copy of base repository

2. in your copy, while we're starting out, try to create a whole website at a time instead of standalone components. Eventually, when we have enough examples built and enough components in our library, hopefully, the cyberduck-components library will be finished and ready to serve components to our main app so we can try the building-block method of pulling components together for a website

3. Upon completion of a component, take a screenshot of it to use in cyberduck-components-browser website

4. Register new component in cyberduck-components-browser repository

3. Once website is built, take all the components you built and store them accordingly into the components library. Make sure you keep a copy of the full website you built, so we slowly build up our stock of templates as well

4. By the time we have a few websites built and a lot of components completed (ideally we would have a couple clients when this happens), the CLI should be complete and ready to build websites.




# DESIGN




## CYBERDUCK REPOSITORY (BASE REPOSITORY)

##### Overview

This is the core of the application, which contains our base template. The base template will be the template used to generate 
new websites, and the structure that all our websites are going to follow.

In addition, it will also contain the CLI, which will handle generating the template as well as retrieving components during development.

// Should components repository be removed from node_modules after building for production in spirit of keeping finished website as lightweight as possible?

##### Base Template

Will consist of: 
1. Base CSS styling for setting global styling, such as typography, box-sizing, margins/paddings, and rem
2. Basic file structure
3. Dependencies

##### CLI

Will have the ability to:
1. Generate copy of base template
2. Allow user to choose base components (header, navigation, menu, footer, hero, etc)
3. Stay running during development to pull in components from library





## CYBERDUCK BROWSER REPOSITORY

##### Overview

This is a simple browser that will allow us to search through components quickly.

1. Every folder in the src folder of the components repository will create a new browsing option
2. For every .svelte file it finds, it will generate a card to display its name, image, and customizable options



##### CURRENT IDEAS

1. Base component (base class for all components)
    - All group of components should be standardized across EACH WEB PAGE. Therefore, we should set up a system that allows us to
    configure standardized variables such as width and height for all buttons, articles, text boxes, feature, etc..
    - We can achieve this by:
        1. Adding a section to our configuration to set an object like (VERY ROUGH): 
        {
            "baseStyle": [
                buttons: {
                    type: SOMEENUM.BUTTON
                    lg: "2.5rem 2rem"
                    med: "2rem 1.4rem"
                    sm: "1.4rem 0.8rem"
                },
            ]
        }
