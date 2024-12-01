Commands used for deploying the dockerized app in the cluster:

-  kubectl create deployment string-app --image=lauraleonilla/random-string
- Get pod name: kubectl get pods
- Display the logs: kubectl logs string-app-7cf554f989-wbcbc 