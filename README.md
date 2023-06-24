<p align="center">
  <a href="https://medium.com/@avifatal/using-dapr-and-nestjs-the-natural-way-pub-sub-1605ff41561f">
  <img src="https://github.com/avifatal/dapr-nestjs-pubsub/blob/master/logos.png?raw=true" alt="Using Dapr and NestJs the natural way - PUB/SUB" />
  </a>
 </p>

 👉 To execute and customize the example project per your need shown in this post, here are the minimum requirements you need to install in your system:

- ➡️ [Node.js](https://nodejs.org/en/download)
- ➡️ [Curl](https://curl.se/download.html)
- ➡️ [Dapr](https://docs.dapr.io/getting-started/install-dapr-cli/)
- ➡️ [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/)
- ➡️ [Docker Desktop](https://docs.docker.com/desktop/windows/install/) - you need also [Docker desktop](https://www.docker.com/products/docker-desktop/) installed locally to complete this tutorial. It is available for [Windows](https://desktop.docker.com/win/edge/Docker%20Desktop%20Installer.exe) or [macOS](https://desktop.docker.com/mac/edge/Docker.dmg). 
Or install the [Docker ACI Integration CLI for Linux](https://docs.docker.com/engine/context/aci-integration/#install-the-docker-aci-integration-cli-on-linux).


# Clone the demo repository
 ``` bash
git clone https://github.com/zhoroh/testing_out_dapr.git
```
Go to root directory of testing_out_dapr
``` bash
cd testing_out_dapr
```
# Install node libraries
``` bash
npm install
```

# Build up a docker container
``` bash
docker compose -d
```

# Start the application 
``` bash
npm run start:dapr
```


### Testing it out 
``` bash
curl -X POST localhost:3000/pubsub
```
### Results
``` bash
== APP == Received topic:my-topic message: { hello: 'world' }
```
