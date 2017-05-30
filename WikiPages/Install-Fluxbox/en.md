---
title: Install Fluxbox
version: 0
path: /en/wiki/Install-Fluxbox/
---
# Install Fluxbox
Most users want to install it from the distribution's package repository.  
Below are the steps you have to take for your distribution.

If you want to install the **most current** version, you have to download, compile and install manually, but fear not, you shall be [guided](/en/devel/Install-Fluxbox) in the developers section of this wiki.

http://old.fluxbox-wiki.org/index.php?title=Update_fluxbox#Using_Ubuntu_and_Debian

## Install Package
### Fedora
```text
:~# yum install fluxbox
```


### Debian, Ubuntu, etc.
Debian Package System based distributions (i.e. Debian, Ubuntu, ALT Linux, and many more)
```
:~# apt-get install fluxbox
or
:~# aptitude install fluxbox
```
The packages in Debian stable might not be very up-to-date.
See also [http://fluxbox-wiki.org/index.php?title=Update_fluxbox#Using_Ubuntu_and_Debian how to update fluxbox].

### Slackware
* Slackware packages are [ftp://slackware.oregonstate.edu/pub/slackware/slackware-current/slackware/xap/ here]. Alternatively, you can: '''slackpkg install fluxbox'''

### Gentoo
* Gentoo users: the official package is [http://packages.gentoo.org/package/x11-wm/fluxbox x11-wm/fluxbox]. Check your USE flags and then run: '''emerge fluxbox'''
<!--* [[User:Akira|Akira]] was kind enough to provide a [http://darkshed.net/files/gentoo/ebuilds/x11-wm/ak-fluxbox-git/ Git ebuild].-->

### SUSE
*The packages for the current version of OpenSUSE (12.3) are [http://software.opensuse.org/search?baseproject=openSUSE%3A12.3&p=1&q=fluxbox here].
*Using [http://software.opensuse.org/search this website] you could find the package that fits your version of OpenSUSE.

### *BSD
* FreeBSD users: from source via '''make install clean -C /usr/ports/x11-wm/fluxbox''' or binary package via either '''pkg_add -r fluxbox''' or '''pkg install fluxbox''' for pkgng users

* NetBSD users (pkgsrc): '''/usr/pkgsrc/wm/fluxbox/'''

* OpenBSD users: fetch the package from one of the ftp-mirrors ([http://www.openbsd.org/ftp.html a list is here]), or you can use ports to compile your own ('''/usr/ports/x11/fluxbox/''')

### Arch
* Arch Linux (pacman) : '''pacman -S fluxbox'''. .

### Source Mage
* Source Mage GNU/Linux (sorcery): '''cast fluxbox'''

### Mac
* Mac OS X users: Get fink and execute:''' fink install fluxbox''' or '''sudo apt-get install fluxbox'''

## just a test to see if thing still do what they should
