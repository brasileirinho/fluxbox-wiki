---
title: Fluxbox Remote
version: 1
path: /en/wiki/Fluxbox/Remote/
---
# Fluxbox Remote
There is only one program you can use in your console to invoke certain actions in fluxbox.
**Man-Page:**  
``:~/$ man fluxbox-remote``
{.alert-info .alert}

## Available Commands
Display available fluxbox commands.
Many of these commands are ment to deal with focussed windows, and can only be used from the window-menu, but the list also has some items useful for `fluxbox-remote`.
```
$ fluxbox --list-commands
activate
activatetab
addworkspace
...
workspace
workspacemenu
```

## Usage Examples
#### Logout from Session
```
$ fluxbox-remote exit
# or
$ fluxbox-remote quit
```

#### Minimize all Applications
```
$ fluxbox-remote showdesktop
```

#### Reload Configuration
use this after editing the keys file
```
$ fluxbox-remote reconfigure
```

#### Reload Style
```
$ fluxbox-remote reloadstyle
```

#### Fluxbox Restart
This might help when fluxbox starts to behave weird.
```
$ fluxbox-remote restart
```
