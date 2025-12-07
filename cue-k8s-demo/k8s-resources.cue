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

// Multi-resource application configuration
#Application: {
    name:      #ResourceName
    namespace: string | *"default"
    image:     #ImageTag
    replicas:  int & >=1 & <=10
    port:      int & >=1 & <=65535
    version:   string
    resources?: {
        limits?:   #ResourceLimits
        requests?: #ResourceRequests
    }
    config?: [string]: string
    
    // Generate Deployment
    deployment: #KubernetesDeployment & {
        metadata: {
            name:      "\(name)-deployment"
            namespace: namespace
            labels: {
                app:        name
                version:    version
                managed-by: "cue"
            }
        }
        spec: {
            replicas: replicas
            selector: matchLabels: {
                app: name
            }
            template: {
                metadata: labels: {
                    app:        name
                    version:    version
                    managed-by: "cue"
                }
                spec: containers: [{
                    name:  name
                    image: image
                    ports: [{
                        containerPort: port
                    }]
                    resources?: resources
                }]
            }
        }
    }
    
    // Generate Service
    service: #KubernetesService & {
        metadata: {
            name:      "\(name)-service"
            namespace: namespace
            labels: {
                app:        name
                version:    version
                managed-by: "cue"
            }
        }
        spec: {
            selector: {
                app: name
            }
            ports: [{
                port:       port
                targetPort: port
            }]
        }
    }
    
    // Generate ConfigMap if config is provided
    configMap?: #KubernetesConfigMap & {
        metadata: {
            name:      "\(name)-config"
            namespace: namespace
            labels: {
                app:        name
                version:    version
                managed-by: "cue"
            }
        }
        data: config
    }

// Example: Web application with all resources
webapp: #Application & {
    name:     "webapp"
    image:    "nginx:1.21-alpine"
    replicas: 3
    port:     80
    version:  "1.0.0"
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
    config: {
        "nginx.conf": "worker_processes auto;"
        "app.env":    "production"
    }
}
