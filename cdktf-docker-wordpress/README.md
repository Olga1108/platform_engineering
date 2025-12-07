# CDKTF Docker WordPress Deployment

This project demonstrates deploying WordPress and MySQL containers using CDKTF (Cloud Development Kit for Terraform) with Docker as the provider.

## Project Structure

```
cdktf-docker-wordpress/
├── main.ts              # Main CDKTF application with WordPress stacks
├── package.json         # Node.js dependencies
├── tsconfig.json        # TypeScript configuration
├── cdktf.json          # CDKTF configuration
└── .gen/               # Generated Terraform provider bindings
```

## Prerequisites

- Docker Desktop (running)
- Node.js (v18+)
- Terraform (v1.5.7+)
- CDKTF CLI (v0.21.0+)

## Installation

1. Install Terraform (macOS):
   ```bash
   brew install terraform
   ```

2. Install CDKTF CLI:
   ```bash
   npm install -g cdktf-cli
   ```

3. Install project dependencies:
   ```bash
   npm install
   ```

4. Generate Terraform provider bindings:
   ```bash
   cdktf get
   ```

## Deployment

### Deploy Both Stacks

```bash
# Deploy StackOne (WordPress on port 8081, MySQL on port 9081)
cdktf deploy StackOne --auto-approve

# Deploy StackTwo (WordPress on port 8082, MySQL on port 9082)
cdktf deploy StackTwo --auto-approve
```

### Verify Deployment

Check running containers:
```bash
docker ps --filter "name=wordpress" --filter "name=mysql"
```

Access WordPress instances:
- StackOne: http://localhost:8081
- StackTwo: http://localhost:8082

## Stack Configuration

Each stack deploys:
- **Docker Network**: Isolated network for stack containers
- **MySQL Container**: Database backend (MySQL 8.0)
  - StackOne: Port 9081 (external) -> 3306 (internal)
  - StackTwo: Port 9082 (external) -> 3306 (internal)
- **WordPress Container**: Web application
  - StackOne: Port 8081 (external) -> 80 (internal)
  - StackTwo: Port 8082 (external) -> 80 (internal)

## Cleanup

To destroy the deployment:
```bash
cdktf destroy StackOne --auto-approve
cdktf destroy StackTwo --auto-approve
```

## Configuration Notes

- Docker context is set to `desktop-linux` for macOS Docker Desktop compatibility
- MySQL version: 8.0 (MySQL 5.7 is deprecated)
- WordPress version: latest
- Each stack uses isolated Docker networks to prevent conflicts

## Troubleshooting

### Docker Connection Issues

If you encounter Docker connection errors, verify your Docker context:
```bash
docker context ls
```

Update the DockerProvider configuration in `main.ts` if needed:
```typescript
new DockerProvider(this, "docker", {
  context: "desktop-linux", // or your Docker context
});
```

### Port Conflicts

If ports 8081, 8082, 9081, or 9082 are already in use, modify the port numbers in `main.ts`:
```typescript
new WordPressStack(app, "StackOne", 8081); // Change port here
new WordPressStack(app, "StackTwo", 8082); // Change port here
```

