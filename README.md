# NeutronDesk
### Coming soon! (incomplete)
> Langs: **EN** [FR](README_FR.md)
## What is NeutronDesk?
### It's a customizable Windows 10 style window for your Electron Apps, Easy, Fast and Lightweight!
## First take in
In your index.html, you have to include the style first in the head (before your styles):
```html
<head>
    <link rel="stylesheet" href="NeutronDesk/ressources/style.css">

    <link rel="stylesheet" href="mystyle.css">
</head>
```
Then create the titlebar container, app content and import your scripts:
```html
<body>
    <header></header>
    <div class="app-content">
        Your content here
    </div>
    <script>
        require('NeutronDesk/index.js');
    </script>
</body>
```
## Customization
In your stylesheet, the `ndstyle.css` put like so in the head:
```html
<head>
    <link rel="stylesheet" href="NeutronDesk/ressources/style.css">
    <link rel="stylesheet" href="ndstyle.css">

    <link rel="stylesheet" href="mystyle.css">
</head>
```
You can add thoses css parameters to customize your current titlebar:
```css
:root {
    --titlebar-background-color: rgb(40, 44, 52); /* Titlebar background color */
    --titlevar-background-color-inactive: var(--titlebar-background-color); /* Titlebar background color when focus lost (using same by default) */
    --titlebar-color-active: rgb(157, 165, 180); /* Titlebar text and icons color */
    --titlebar-color-inactive: rgb(107, 113, 125); /* Titlebar text and icons color when focus lost */
    --titlebar-icon: url('../../icon.svg'); /* Your App's icon (default looking for a incon.svg in your parent folder (not in NeutronDesk)) */
    /* InDepth */
    --titlebar-font: -apple-system, BlinkMacSystemFont, Segoe WPC, Segoe UI, HelveticaNeue-Light, Ubuntu, Droid Sans, sans-serif; /* Titlebar's default font */
    --titlebar-font-size: 13px; /* Titlebar's default font size */
    --titlebar-ctrl-hover-bg: hsla(0,0%,100%,.1); /* background of a control icon on hover */
    --titlebar-ctrl-close-hover-bg: rgba(232,17,35,.9); /* background of the close control icon on hover */
    --titlebar-ctrl-close-hover-clr: #fff; /* color of the close control icon on hover */
    /* Windows style (not recommended to change) */
    --titlebar-height: 30px; /* Default windows titlebar height */
    --titlebar-icon-size: 35px; /* Default windows titlebar icon size */
}

/* App content */
.app-content {
    padding: 4px; /* default value */
}
```
Remember: if you want to change the titlebar's title, just change the page's title `<title>Page title</title>`, and it's dynamically updated!
### Configuration & Buttons customization:
Coming soon.
## Documentation
~~[documentation page](https://github.com/Loxoz/EmitX/wiki)~~ (not avalible for the moment)

> #### Hope you'll enjoy my work ❤️ leave a ⭐️ if you found it useful and to support me
