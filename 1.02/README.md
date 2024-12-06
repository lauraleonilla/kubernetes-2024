Commands used for deploying the dockerized app in the cluster:

- docker build -t server . 
- docker tag server lauraleonilla/express-web-server:latest 
- docker push lauraleonilla/express-web-server:latest 

- kubectl create deployment web-server --image=lauraleonilla/express-web-server
- Get pod name: kubectl get pods
- Display the logs: kubectl logs web-server-7bfccd48d4-wz57s


1.04

- kubectl apply -f manifests/deployment.yaml 
- kubectl get pods 
- kubectl logs web-server-dep-7c6797c766-qww9c

1.05

Add html page and serve it

- docker build -t server . 
- docker tag server lauraleonilla/express-web-server:latest 
- docker push lauraleonilla/express-web-server:latest 

- kubectl create deployment web-server --image=lauraleonilla/express-web-server

- kubectl apply -f manifests/deployment.yaml 
- kubectl apply -f manifests/service.yaml 
- kubectl get pods 
- kubectl port-forward web-server-dep-7c6797c766-cwdkv 3000:8080