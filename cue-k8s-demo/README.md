# CUE Language and Kubernetes Schemas

This project demonstrates using CUE (Configuration Unified Engine) to define schemas and validate Kubernetes resources.

## Installation

1. **Install Go** (if not already installed):
   ```bash
   brew install go
   ```

2. **Install CUE**:
   ```bash
   go install cuelang.org/go/cmd/cue@latest
   ```

3. **Add CUE to PATH**:
   ```bash
   export PATH=$PATH:$(go env GOPATH)/bin
   ```

4. **Verify Installation**:
   ```bash
   cue version
   ```

## Project Structure

```
cue-k8s-demo/
├── person.cue              # Basic schema example
├── deployment.cue          # Kubernetes Deployment schema
├── my-deployment.cue       # Example deployment instance
└── k8s-resources-simple.cue # Multi-resource configuration
```

## Basic Usage

### Validate Schemas

```bash
# Validate person schema
cue vet person.cue

# Validate deployment
cue vet deployment.cue my-deployment.cue
```

### Format Conversion

```bash
# Export to JSON
cue export my-deployment.cue deployment.cue --out json

# Export to YAML
cue export my-deployment.cue deployment.cue --out yaml
```

## Files Overview

### person.cue
Basic schema example with validation rules:
- Name (string)
- Age (0-120)
- Email (regex validation)
- Optional hobbies

### deployment.cue
Kubernetes Deployment schema with:
- API version and kind validation
- Metadata validation
- Replica count (1-10)
- Container specifications

### my-deployment.cue
Example deployment instance that validates against the schema.

### k8s-resources-simple.cue
Multi-resource configuration with:
- Deployment schema
- Service schema
- ConfigMap schema
- Custom validation rules:
  - Resource naming conventions
  - Image tag validation
  - Required labels
  - Resource limits and requests

## Custom Validation Rules

The project includes validation for:
- **Resource Names**: Kubernetes-compliant naming (lowercase, alphanumeric, hyphens)
- **Image Tags**: Format validation (image:tag)
- **Required Labels**: Enforces app, version, and managed-by labels
- **Resource Limits**: CPU and memory format validation
- **Ports**: Valid port ranges (1-65535)
- **Replicas**: Valid replica counts (1-10)

## Examples

### Validate a Deployment
```bash
cue vet deployment.cue my-deployment.cue
```

### Export to YAML
```bash
cue export my-deployment.cue deployment.cue --out yaml
```

### Export to JSON
```bash
cue export my-deployment.cue deployment.cue --out json
```

## Notes

- All CUE files use the `package k8s` declaration
- Schemas use `#` prefix for definitions
- Validation rules use CUE's constraint syntax (`&`, `|`, `>=`, `<=`, regex)
- String interpolation uses `"\(variable)"` syntax

## Troubleshooting

If you get "command not found: cue", ensure CUE is in your PATH:
```bash
export PATH=$PATH:$(go env GOPATH)/bin
```

To make it permanent, add to `~/.zshrc` or `~/.bashrc`:
```bash
echo 'export PATH=$PATH:$(go env GOPATH)/bin' >> ~/.zshrc
```

