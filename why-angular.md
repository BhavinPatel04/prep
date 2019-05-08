# Why Angular?

## Pros
### Two-way data binding
- Angular `keeps the View in sync with the model` for us at all times via its `transparent change detection mechanism`
- Two-way data binding allowed engineers to `reduce development time` as it `didn’t require writing additional code` to provide continual View and Model synchronization
- Angular `does not create HTML and pass it to DOM for parsing`. It creates `DOM data structures directly`
- By building DOM nodes directly, Angular is `bypassing the HTML parsing step` altogether. So the browser simply takes the ready to use DOM tree and renders it to the screen
- Angular will `not replace the whole DOM tree each time`, it `updates the DOM in an optimal way`, depending on what parts of the Model have changed


### Directives
- Directives allowed developers to `assign special behaviors to the Document Object Model (DOM)`, permitting engineers to `create dynamic and rich content with HTML`

### Dependecy Injection
- Dependencies define `how different pieces of code interact with each other` and how the changes in one component impact the other ones
- Usually, `dependencies are directly defined in components themselves`. So that every change in dependency requires changing components as well
- With AngularJS, you could use injectors that defined `dependencies as external elements` `decoupling components from their dependencies`
- Dependency injection made components `more reusable, easier to manage and test`

### Community
- Popular among enigneers
- Enough training materials, discussions, and third-party tools to embark on using Angular as well as find a solution to nearly every arising issue.

### Component based architecture
- Components can be thought of as `small pieces of an interface` that are `independent of each other`
- While `AngularJS was built mainly around the Model-View-Controller (MVC) architecture`, starting from version 2 Angular is considered component-based, which is very similar to MVC `but ensures higher reusability of components across the app`

#### Reusable
- Components of a similar nature are well encapsulated, in other words, `self-sufficient`
#### Readable
- New developers can read code better and eventually reach their plateau of productivity faster
#### Unit test friendly
- The independent nature of components simplifies unit tests
#### Maintainable
- Components that are easily decoupled from each other can be easily replaced with better implementations

### Typescript
- `Superset` for JavaScript
- It fully compiles to JavaScript, but `helps spot and eliminate common mistakes when actually typing the code`
- TypeScript has better navigation, autocompletion, and refactoring services
### RxJS
- RxJS is a library commonly used with Angular to `handle asynchronous data calls`
- It allows for handling events independently in parallel and continuing execution without waiting for some event to happen and leaving a web page unresponsive
- In principle, this `works like the assembly line`, where `execution is broken down` to individual and interchangeable pieces, `rather than being tied to a single person`
- Obviously, asynchronous programming existed before RxJS, but this library has made many things easier
- The library `operates with Observables`, sort of blueprints that describe how data streams are combined and how the application reacts to variables in these streams
- You can easily `reuse them, manage and combine them as Lego blocks reducing the complexity` of such programming operations as building drag-and-drop features, handling large volumes of data in chunks, etc.

### Platform-agnostic philosphy
- Angular was developed with the mobile-first approach in mind. The idea is to share code base and ultimately the engineering skillset across web, iOS, and Android applications
- Not only the code itself, but Angular concepts such as `dependency injection, data binding, services, and routing` are `similar` both for `NativeScript and Angular`
- This agnosticism `doesn’t stretch to code reuse` itself, but rather to the `same engineering skillset`
- Your developers should use NativeScript UI components to build mobile interfaces but they will be `operating in familiar JavaScript and Angular environments` and the `learning curve to tackle mobile won’t be that steep`

### High performance
- The main boost is ensured by hierarchical dependency injection and Angular Universal support

#### Hierarchical dependency injection
- Angular uses `improved hierarchical dependency injection` compared to AngularJS
- The technique `decouples actual components from their dependencies` by running them `parallel to each other`
- Angular builds a `separate tree of dependency injectors` that can be `altered without reconfiguring the components`. So, `classes don’t have dependencies in themselves` but `consume them from the external source`

#### Angular Universal
- Angular Universal is a service that `allows for rendering applications view on a server instead of client browsers`
- Google provides a `set of tools` to either `pre-render your application` or `re-render it for each request by a user`
- Currently, the toolset is `tailored to Node.JS server-side frameworks` and `supports ASP.NET Core`

#### Ivy Renderer
- A renderer is an `engine` that `translates templates and components into JavaScript and HTML` that browsers can understand and display
- Ivy is the `third iteration` of the Angular renderer after the `original compiler` and `renderer2`
- Ivy applies the `tree-shaking technique`, meaning that it `removes unused chunks of code`, making the `applications smaller and faster to load`

### Google Long Term Support
- Google announced Long-Term Support (LTS) for the technology

### Streamlines Material Design
- With `Angular Material` you get pre-built components the variety of which span across form controls, navigation elements, layouts, buttons and indicators, popups, modal windows, and data tables. They are `adjusted to Angular use` and are `easy to integrate into a project`

### Seamless updates using Angular CLI
- It’s easy to set up, newcomer-friendly, comes with testing tooling out-of-the-box, simple commands, and more

### Powerful ecosystem
### Angular elements
- You can `reuse your Angular component` by `wrapping it as a DOM element` (Custom Element)
- It’s `really convenient` if you or your team have to `switch between various environments`


## Cons
### Migrating from AngularJS
### Verbose and complex
- You may need `up to five files` for a `single component` in Angular, `have to inject dependencies`, and `declare the component lifecycle interfaces`

### Steep learning curve
