package k8s

// Custom validation rules
#ResourceName: string & =~"^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"

#ImageTag: string & =~"^[a-zA-Z0-9._-]+:[a-zA-Z0-9._-]+$"

#RequiredLabels: {
    app:        string
    version:    string
    managed-by: "cue" | "pulumi" | "terraform" | "helm"
}

#ResourceLimits: {
    cpu:    string & =~"^[0-9]+m?$"
    memory: string & =~"^[0-9]+(Mi|Gi|M|G)$"
}

#ResourceRequests: {
    cpu?:    string & =~"^[0-9]+m?$"
    memory?: string & =~"^[0-9]+(Mi|Gi|M|G)$"
}

// Deployment Schema with enhanced validation
#KubernetesDeployment: {
    apiVersion: "apps/v1"
    kind:       "Deployment"
    metadata: {
        name:      #ResourceName
        namespace: string | *"default"
        labels:    #RequiredLabels
    }
    spec: {
        replicas: int & >=1 & <=10
        selector: matchLabels: {
            app: string
        }
        template: {
            metadata: labels: #RequiredLabels
            spec: containers: [...{
                name:  string
                image: #ImageTag
                ports?: [...{
                    containerPort: int & >=1 & <=65535
                }]
                resources?: {
                    limits?:   #ResourceLimits
                    requests?: #ResourceRequests
                }
            }]
        }
    }
}

// Service Schema
#KubernetesService: {
    apiVersion: "v1"
    kind:       "Service"
    metadata: {
        name:      #ResourceName
        namespace: string | *"default"
        labels:    #RequiredLabels
    }
    spec: {
        selector: {
            app: string
        }
        ports: [...{
            port:       int & >=1 & <=65535
            targetPort: int & >=1 & <=65535
            protocol:   "TCP" | "UDP" | *"TCP"
        }]
        type: "ClusterIP" | "NodePort" | "LoadBalancer" | *"ClusterIP"
    }
}

// ConfigMap Schema
#KubernetesConfigMap: {
    apiVersion: "v1"
    kind:       "ConfigMap"
    metadata: {
        name:      #ResourceName
        namespace: string | *"default"
        labels:    #RequiredLabels
    }
    data: [string]: string
}

// Example: Deployment with validation
deployment: #KubernetesDeployment & {
    metadata: {
        name: "webapp-deployment"
        labels: {
            app:        "webapp"
            version:    "1.0.0"
            managed-by: "cue"
        }
    }
    spec: {
        replicas: 3
        selector: matchLabels: {
            app: "webapp"
        }
        template: {
            metadata: labels: {
                app:        "webapp"
                version:    "1.0.0"
                managed-by: "cue"
            }
            spec: containers: [{
                name:  "webapp"
                image: "nginx:1.21-alpine"
                ports: [{
                    containerPort: 80
                }]
                resources: {
                    limits: {
                        cpu:    "500m"
                        memory: "512Mi"
                    }
                    requests: {
                        cpu:    "100m"
                        memory: "128Mi"
                    }
                }
            }]
        }
    }
}

// Example: Service
service: #KubernetesService & {
    metadata: {
        name: "webapp-service"
        labels: {
            app:        "webapp"
            version:    "1.0.0"
            managed-by: "cue"
        }
    }
    spec: {
        selector: {
            app: "webapp"
        }
        ports: [{
            port:       80
            targetPort: 80
        }]
    }
}

// Example: ConfigMap
configMap: #KubernetesConfigMap & {
    metadata: {
        name: "webapp-config"
        labels: {
            app:        "webapp"
            version:    "1.0.0"
            managed-by: "cue"
        }
    }
    data: {
        "nginx.conf": "worker_processes auto;"
        "app.env":    "production"
    }
}

