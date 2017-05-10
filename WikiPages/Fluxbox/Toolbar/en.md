---
title: Toolbar
version: 1
path: /en/wiki/Fluxbox/Toolbar/
---
# the Toolbar
## Configure
Most things can be configured in the toolbar's own [menu], only to reorder and select toolbar items you will have to edit the file `~/.fluxbox/init` by hand.

## Replacements
If you plan on using replacement toolbars like
- cairo-dock
- tint2
you have to disable **systray** in fluxbox's toolbar if you want to use it in your replacement.

To do that, you must changing a line in ``~/.fluxbox/init``, as there is no option for that in the toolbar menu.
```
session.screen0.toolbar.tools:  prevworkspace, workspacename, nextworkspace, clock, prevwindow, nextwindow, iconbar, systray
session.screen0.toolbar.tools:  prevworkspace, workspacename, nextworkspace, clock, prevwindow, nextwindow, iconbar
```
