Commands used for deploying the dockerized app in the cluster:

- docker build -t random . 
- docker tag random lauraleonilla/random-string:latest
- docker push lauraleonilla/random-string:latest 

- kubectl create deployment string-app --image=lauraleonilla/random-string
- Get pod name: kubectl get pods
- Display the logs: kubectl logs string-app-7cf554f989-wbcbc 


1.03

- kubectl apply -f manifests/deployment.yaml          
- kubectl get pods  
- kubectl  logs string-generator-dep-6b7fbf874-d6rq9