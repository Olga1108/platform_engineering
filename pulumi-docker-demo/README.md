# Pulumi Docker Web Application Deployment

This project demonstrates deploying Nginx web servers with Redis caching using Pulumi and Docker.

## Project Overview

The project deploys two Pulumi stacks (dev and prod), each containing:
- **Nginx web server** container serving a custom HTML page
- **Redis** container for caching
- **Docker network** for container communication

## Prerequisites

- Docker Desktop (running)
- Node.js (v18+)
- Pulumi CLI (v3.210.0+)

## Installation

1. **Install Pulumi** (macOS):
   ```bash
   brew install pulumi
   ```

2. **Login to Pulumi** (Local Backend):
   ```bash
   pulumi login --local
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

## Project Structure

```
pulumi-docker-demo/
├── index.ts              # Main Pulumi application code
├── package.json          # Node.js dependencies
├── tsconfig.json         # TypeScript configuration
├── Pulumi.yaml          # Pulumi project configuration
├── Pulumi.dev.yaml      # Dev stack configuration
└── Pulumi.prod.yaml     # Prod stack configuration
```

## Deployment

### Deploy Dev Stack

```bash
pulumi stack select dev
pulumi up --yes
```

**Access:**
- Web: http://localhost:8081
- Health: http://localhost:8081/health
- Redis: localhost:9081

### Deploy Prod Stack

```bash
pulumi stack select prod
pulumi up --yes
```

**Access:**
- Web: http://localhost:8080
- Health: http://localhost:8080/health
- Redis: localhost:9080

## Stack Management

### List All Stacks
```bash
pulumi stack ls
```

### View Stack Outputs
```bash
pulumi stack output
```

### Switch Between Stacks
```bash
pulumi stack select dev
pulumi stack select prod
```

## Verification

### Check Running Containers
```bash
docker ps --filter "name=nginx" --filter "name=redis"
```

### Test Health Endpoints
```bash
# Dev stack
curl http://localhost:8081/health

# Prod stack
curl http://localhost:8080/health
```

### Test Redis Connectivity
```bash
# Dev stack
docker exec redis-dev redis-cli ping

# Prod stack
docker exec redis-prod redis-cli ping
```

### Access Web Applications
- **Development**: http://localhost:8081
- **Production**: http://localhost:8080

## Stack Configuration

### Dev Stack
- Nginx: Port 8081
- Redis: Port 9081 (external) -> 6379 (internal)
- Network: `webapp-network-dev`

### Prod Stack
- Nginx: Port 8080
- Redis: Port 9080 (external) -> 6379 (internal)
- Network: `webapp-network-prod`

## Cleanup

### Destroy Dev Stack
```bash
pulumi stack select dev
pulumi destroy --yes
```

### Destroy Prod Stack
```bash
pulumi stack select prod
pulumi destroy --yes
```

### Remove Stacks (Optional)
```bash
pulumi stack rm dev --yes
pulumi stack rm prod --yes
```

## Features

- **Custom Nginx Configuration**: Each stack has a custom nginx.conf with health check endpoint
- **Custom HTML Pages**: Each stack displays stack-specific information
- **Redis Integration**: Redis containers are accessible via network alias "redis"
- **Isolated Networks**: Each stack uses its own Docker network
- **Stack-based Configuration**: Different ports for dev and prod environments

## Troubleshooting

### Port Conflicts
If ports 8080, 8081, 9080, or 9081 are already in use:
- Check what's using them: `lsof -i :8080`
- Stop conflicting services or adjust ports in `index.ts`

### Docker Connection Issues
Ensure Docker Desktop is running:
```bash
docker info
```

### View Container Logs
```bash
docker logs nginx-dev
docker logs redis-dev
docker logs nginx-prod
docker logs redis-prod
```

## Current Status

 **Dev Stack**: Deployed and running
- Nginx: http://localhost:8081
- Redis: Port 9081
- Health check:  Working

 **Prod Stack**: Deployed and running
- Nginx: http://localhost:8080
- Redis: Port 9080
- Health check:  Working

