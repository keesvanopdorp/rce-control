# RCE-control

This a web app made with next-js to allow you to remotely execute commands from other devices on your computer.

## Config file

Before you can use the application you first need to create a config file. Follow the steps below to create the config file with a example configuration.

**The auth key in the config file is used for logging in to the application.**

1. step 1: create a file called config.yaml in the root directory of the project.

2. step 2: add the following example configuration to the file:

```yaml
auth-key: "insert auth-key here"
commands: 
  lock-pc: 
    name: "Lock pc"
    cmd: "rundll32 user32.dll,LockWorkStation"
    background-color: "red"
    text-color: "#fff"
    dangerous: false
  launch-vs-code:
    name: "launch VS-Code"
    cmd: "code"
    background-color: "#0098FF"
    text-color: "#fff"
    dangerous: false
  launch-task-manager:
    name: "Launch Task manager"
    cmd: "start \"task manager\" \"taskmgr.exe\""
    background-color: "#ffffff"
    text-color: "#000"
      dangerous: false
  shutdown-pc:
    name: "Shutdown pc"
    cmd: "shutdown -s -t 0"
    background-color: "red"
    text-color: "#ffffff"
    dangerous: true
```

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Know issues

- The application is not secure, because the auth key is not asked when starting the application.

- There is not option to edit the config file from the application.