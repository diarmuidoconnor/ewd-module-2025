# Dev Container Set Up

The following labs will develop an API that will partially replace the Movies API you used in the previous section of the module

You have 2 options to develop your API

1. Create a Dev Container in GitHub CodeSpaces
2. Create a Dev Container on your local host

Select the option that you believe will best suit you. 



## Dev Containers 

Your container configuration is stored in a devcontainer.json file. This file tells VS Code how to access (or create) a **development container** with a well-defined tool and runtime stack. We will use the container to develop our application and provide the necessary tools, libraries, and runtimes. 

### Get the VS Code Dev Container Extension

+ In VS Code, search for and install the latest Dev Container Extension 

<img src="./img/image-20230315162912290.png" alt="image-20230315162912290" style="zoom:50%;" />

For now, we will use an existing image as a starting point for your `devcontainer.json`. Think of an image as a drive with various tools and an operating system pre-installed. You can pull images from a container registry, which is a collection of repositories that store images. 

The dev container configuration located under `.devcontainer/devcontainer.json` in the root of your project.

+ In the ewd-2023-labs folder, create `.devcontainer/devcontainer.json` and add  the following content to the ``devcontainer.json`` file. We will use a pre-existing image for node development.

  ~~~json
  {
  	"name": "ewd-labs-2023",
  	"image":"mcr.microsoft.com/devcontainers/javascript-node:0-18"
  }
  ~~~

+ Commit and push changes to your remote Github Rep now.

 VS Code can now use the devcontainer.json for launching your development container.

You now can choose where you wish to run your Dev Container: Local Host or in GitHub CodeSpaces. (You can try both if you wish!) 

### OPTION 1: Dev Container in CodeSpaces

Install the CodeSpaces Extension in VS Code

+ Vs Code, select *View->Command Pallette...* and find/run the **CodeSpaces: Create CodeSpace** command

+ When prompted, select the following options:
  + ewd-labs2023 repository
  + main branch
  +  the 2-core instance type

Done! It may take a little while to start up. After running this command, VS Code restarts, and you're now within a Node.js/Javascript dev container in the "cloud" that you can access from anywhere.



### OPTION 2: Dev Container on Local Host(i.e. your laptop)

You need Docker installed in order to run a dev container. 

+ Install Docker and make sure you have Docker running. You can do this by installing the **Docker Desktop** from here: https://www.docker.com/products/docker-desktop/

+  In Vs Code, select *View->Command Pallette...* and find/run the **Dev Containers: Reopen in Container** command:

  <img src="./img/dev-containers-reopen.png" alt="Quick pick with list of Dev Containers commands" style="zoom:38%;" />


After running this command, VS Code restarts, and you're now within a Node.js/Javascript dev container


