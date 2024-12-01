Commands used for deploying the dockerized app in the cluster:

- docker build -t server . 
- docker tag server lauraleonilla/express-web-server:latest 
- docker push lauraleonilla/express-web-server:latest 

- kubectl create deployment web-server --image=lauraleonilla/express-web-server
- Get pod name: kubectl get pods
- Display the logs: kubectl logs web-server-7bfccd48d4-wz57s