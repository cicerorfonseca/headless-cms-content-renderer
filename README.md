# Headless CMS Content Renderer

Disclaimer: This is work in progress. This application frontend design seems pretty simple because the main focus here is to render content coming from a backend application using data coming from a JSON and not adding manual markup. Once the renderer is completed, new designs and styles will be added to the app.

This is a simple single page application website that loads the allowed routes dynamically, renders some sample headless content, and then performs some basic styling updates on those elements.

- It uses Redux as one-way data flow state management library to store the routes.
- The valid routes are loaded via API request from https://raw.githubusercontent.com/cicerorfonseca/headless-cms-content-renderer/main/content/routes.json, and stored in the Redux data store. If this API request fails, the application will redirect all traffic to /maintenance.
- Any requests outside the routes provided in the API response will display the first route provided.
- A header component will include each of the URLs from the routes response using their value from the map as the name.
- When loading a particular route, the content for the route will be loaded from a JSON file located relative to the route. For example if the provided route is /about-us then the relevant JSON file will be /about-us.json or if the route is /products/1bn23 the relevant JSON file is /products/1bn23.json . These paths are relative to the domain/path: https://raw.githubusercontent.com/cicerorfonseca/headless-cms-content-renderer/main/content/.
- The JSON content files contains elements that will be rendered according to the set of rules below:

### Rich Text component

type: "rich-text"
textType: "plain" | "html"
text: this field will contain either plain text or escaped HTML. It is rendered according to the textType property.
style: "uppercase". If this is set, then the value will be passed through to the text-transform CSS property on the container.

### Container component

This component will be rendered as a flex container ( display: flex ), and will default to the same default values as a flex.
type: "container"
items: [] - this will be an array of other components, which could include another container component.
flexDirection: value provided should be passed to the flex-direction css property on the container
flexWrap: value provided should be passed to the flex-wrap css property on the container
justifyContent: value provided should be passed to the justify-content css property on the container
alignItems: value provided should be passed to the align-items css property on the container
width: relative width to parent container (e.g. 0.3 would be 30% the width of its parent)

### Image component

If the image cannot be loaded, then a 100x100 placeholder from placeholder.com will be displayed.
Images are set align-self: center; to avoid scaling in flex containers.
type: "image"
alt: "string" - alternative text
height: if provided, it should be set as the max-height for the image element
src: string value which provides the URL that should be displayed as an image
