# bim UIkit

## Install

`yarn add bim-uikit`

## Setup

### Theme

Before using Bim UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from 'bim-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from 'bim-uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
