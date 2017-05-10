#! /bin/bash

action=$(yad --width 300 --entry --title "System Logout" \
    --window-icon=gnome-shutdown \
    --image=gnome-shutdown \
    --button="gtk-ok:0" --button="gtk-close:1" \
    --text "Choose action:" \
    --entry-text \
    "Logout" "Reboot" "Power Off")
ret=$?

[[ $ret -eq 1 ]] && exit 0

case $action in
    Logout*) cmd="killall fluxbox" ;;
    Reboot*) cmd="sudo /sbin/reboot" ;;
    Power*) cmd="sudo /sbin/poweroff" ;;
            *) exit 1 ;;
        esac

eval exec $cmd
