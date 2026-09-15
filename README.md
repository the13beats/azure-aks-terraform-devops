# azure-aks-terraform-devops
production ready devops project


# Azure AKS Deployment Using Terraform

## Objective

Deploy a containerized application to Azure Kubernetes Service using Terraform,
Docker, Azure Container Registry, Kubernetes, Jenkins, and GitHub.

## Technology Stack

- Microsoft Azure
- Azure Kubernetes Service
- Azure Container Registry
- Terraform
- Docker
- Kubernetes
- Jenkins
- GitHub

## Project Workflow

GitHub → Jenkins → Docker → ACR → AKS

## Directory Structure

- `app/` - Node.js application and Dockerfile
- `terraform/` - Azure infrastructure configuration
- `k8s/` - Kubernetes manifests
- `Jenkinsfile` - CI/CD pipeline
