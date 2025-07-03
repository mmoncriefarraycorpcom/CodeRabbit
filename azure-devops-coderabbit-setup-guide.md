# CodeRabbit Integration with Azure DevOps - Setup Guide

## Overview

This guide walks you through integrating CodeRabbit AI with Azure DevOps for automated code reviews. CodeRabbit supports Azure DevOps integration for both cloud-hosted and self-hosted scenarios.

## Prerequisites

- **Azure DevOps Organization**: Active Azure DevOps organization
- **Administrative Access**: Organization or project administrator permissions
- **Repository Access**: Access to repositories where CodeRabbit will be integrated
- **CodeRabbit Account**: Sign up at [coderabbit.ai](https://coderabbit.ai)

## Integration Options

### Option 1: Cloud-Hosted CodeRabbit (Recommended for Most Users)
- **Best for**: Organizations using Azure DevOps Services (cloud)
- **Setup Time**: 15-30 minutes
- **Maintenance**: Minimal - managed by CodeRabbit
- **Cost**: Standard CodeRabbit pricing

### Option 2: Self-Hosted CodeRabbit
- **Best for**: Enterprise customers with 500+ users, on-premises Azure DevOps
- **Setup Time**: 2-4 hours
- **Maintenance**: Self-managed infrastructure
- **Requirements**: Enterprise CodeRabbit license

## Step 1: CodeRabbit Account Setup

### 1.1 Create CodeRabbit Account
1. Visit [https://coderabbit.ai](https://coderabbit.ai)
2. Click "Sign Up" or "Get Started"
3. Choose your authentication method:
   - GitHub account (if you have one)
   - Email registration
   - Microsoft account (recommended for Azure DevOps users)

### 1.2 Organization Setup
1. After signing in, you'll be prompted to create an organization
2. Enter your organization name (match your Azure DevOps org name for clarity)
3. Select your plan (Free trial available)

## Step 2: Azure DevOps Configuration

### 2.1 Create a Service Connection (Cloud-Hosted)

1. **Navigate to Project Settings**
   ```
   Azure DevOps → Your Project → Project Settings → Service connections
   ```

2. **Create New Service Connection**
   - Click "New service connection"
   - Select "Generic" or "Incoming Webhook"
   - Name: "CodeRabbit-AI"

3. **Get Webhook URL from CodeRabbit**
   - In CodeRabbit dashboard: Settings → Integrations → Azure DevOps
   - Copy the webhook URL provided

### 2.2 Configure Service Hooks

1. **Access Service Hooks**
   ```
   Azure DevOps → Project Settings → Service hooks
   ```

2. **Create Pull Request Hooks**
   You need to create these service hooks:

   **Hook 1: Pull Request Created**
   - Service: Web Hooks
   - Trigger: Pull request created
   - URL: `[CodeRabbit webhook URL]/azure_webhooks`
   - HTTP headers: Content-Type: application/json

   **Hook 2: Pull Request Updated**
   - Service: Web Hooks
   - Trigger: Pull request updated
   - URL: `[CodeRabbit webhook URL]/azure_webhooks`
   - HTTP headers: Content-Type: application/json

   **Hook 3: Pull Request Commented**
   - Service: Web Hooks
   - Trigger: Pull request commented on
   - URL: `[CodeRabbit webhook URL]/azure_webhooks`
   - HTTP headers: Content-Type: application/json

### 2.3 Create CodeRabbit Service Account (Recommended)

1. **Create New User**
   - Go to Organization Settings → Users
   - Click "Add users"
   - Email: coderabbit@[yourcompany].com (or similar)
   - Display name: "CodeRabbit AI"
   - Access level: Basic

2. **Add to Projects**
   - Add the CodeRabbit user to each project where reviews are needed
   - Assign permissions: Contributor or higher

3. **Generate Personal Access Token**
   - Sign in as CodeRabbit user
   - Go to User Settings → Personal access tokens
   - Create new token with scopes:
     - **Code**: Full
     - **Pull Request**: Read & write
     - **Work Items**: Read, write, and manage
     - **Build**: Read

## Step 3: CodeRabbit Configuration

### 3.1 Connect Azure DevOps to CodeRabbit

1. **In CodeRabbit Dashboard**
   - Go to Settings → Integrations
   - Select "Azure DevOps"
   - Enter your Azure DevOps organization URL
   - Paste the Personal Access Token

2. **Select Repositories**
   - Choose repositories to enable CodeRabbit for
   - Start with 1-2 test repositories for pilot

### 3.2 Configure Review Settings

Create a `.coderabbit.yaml` file in your repository root:

```yaml
# .coderabbit.yaml - Azure DevOps Configuration
language: "en-US"
early_access: false
reviews:
  profile: "chill"  # Options: assertive, chill
  request_changes_workflow: false
  high_level_summary: true
  poem: false
  review_status: true
  collapse_walkthrough: false
  auto_review:
    enabled: true
    drafts: false
    base_branches: ["main", "master", "develop"]
  path_instructions:
    - path: "**/*.cs"
      instructions: |
        Review C# code for:
        - SOLID principles adherence
        - Proper exception handling
        - Performance considerations
        - Security best practices
    - path: "**/*.ts"
      instructions: |
        Review TypeScript code for:
        - Type safety
        - Modern ES6+ patterns
        - Angular/React best practices (if applicable)
    - path: "**/tests/**"
      instructions: |
        Review test code for:
        - Test coverage completeness
        - Assertion clarity
        - Test isolation
        - Mock usage appropriateness
chat:
  auto_reply: true
```

## Step 4: Testing the Integration

### 4.1 Create Test Pull Request

1. **Create a branch with some code changes**
   ```bash
   git checkout -b test-coderabbit-integration
   # Make some code changes
   git add .
   git commit -m "Test CodeRabbit integration"
   git push origin test-coderabbit-integration
   ```

2. **Create Pull Request in Azure DevOps**
   - Navigate to Repos → Pull requests
   - Click "New pull request"
   - Select your test branch
   - Create the pull request

3. **Verify CodeRabbit Response**
   - CodeRabbit should comment within 1-2 minutes
   - Look for AI-generated review comments
   - Check for summary and walkthrough

### 4.2 Troubleshooting Common Issues

**Issue: CodeRabbit not responding**
- Verify webhook URLs are correct
- Check service hooks are active
- Ensure Personal Access Token has correct permissions
- Review CodeRabbit logs in dashboard

**Issue: Authentication errors**
- Verify Personal Access Token is not expired
- Check user permissions in Azure DevOps
- Ensure service account has access to repositories

**Issue: Incomplete reviews**
- Check `.coderabbit.yaml` syntax
- Verify file paths in configuration
- Review CodeRabbit dashboard for errors

## Step 5: Advanced Configuration

### 5.1 Custom Review Rules

```yaml
# Advanced .coderabbit.yaml configuration
reviews:
  profile: "assertive"
  path_filters:
    - "!**/*.generated.cs"  # Ignore generated files
    - "!**/bin/**"          # Ignore build outputs
    - "!**/obj/**"          # Ignore object files
  
  path_instructions:
    - path: "src/api/**/*.cs"
      instructions: |
        This is API code. Focus on:
        - Input validation
        - Error handling and logging
        - Security considerations
        - Performance implications
        - API documentation
        
    - path: "src/database/**/*.cs"
      instructions: |
        This is database layer code. Review for:
        - SQL injection prevention
        - Connection management
        - Transaction handling
        - Data access patterns
        
    - path: "**/*.yml"
      instructions: |
        Review YAML files for:
        - Syntax correctness
        - Security configurations
        - Environment-specific settings
```

### 5.2 Team-Specific Configuration

```yaml
# Team-specific rules
tone_instructions: |
  You are reviewing code for an enterprise development team.
  Provide constructive, detailed feedback focusing on:
  - Code maintainability
  - Security best practices
  - Performance considerations
  - Team coding standards
  
  Be thorough but encouraging in your reviews.

reviews:
  request_changes_workflow: true  # Block merges on serious issues
  path_instructions:
    - path: "**/*.cs"
      instructions: |
        Follow our C# coding standards:
        - Use PascalCase for public members
        - Use camelCase for private fields
        - Include XML documentation for public APIs
        - Follow async/await patterns
        - Use dependency injection appropriately
```

### 5.3 CI/CD Pipeline Integration

Add CodeRabbit status checks to your build pipeline:

```yaml
# azure-pipelines.yml
trigger:
- main
- develop

pool:
  vmImage: 'ubuntu-latest'

steps:
- script: |
    echo "Waiting for CodeRabbit review..."
    # Add logic to wait for CodeRabbit completion if needed
  displayName: 'CodeRabbit Review Check'

- script: |
    # Your existing build steps
    dotnet build
    dotnet test
  displayName: 'Build and Test'
```

## Step 6: Pilot Rollout Strategy

### 6.1 Phase 1: Limited Testing (Week 1)
- Enable on 1-2 non-critical repositories
- Test with 2-3 developers
- Validate integration and basic functionality

### 6.2 Phase 2: Pilot Team (Weeks 2-9)
- Add pilot team repositories
- Enable for 8-12 developers
- Collect feedback and metrics
- Refine configuration based on feedback

### 6.3 Phase 3: Evaluation (Week 10)
- Analyze collected data
- Make go/no-go decision
- Plan broader rollout if successful

## Security Considerations

### Data Privacy
- **Code Access**: CodeRabbit processes code diffs, not full repositories
- **Data Retention**: Review CodeRabbit's data retention policy
- **Encryption**: All data transmitted via HTTPS/TLS

### Access Control
- Use dedicated service account with minimal required permissions
- Regularly rotate Personal Access Tokens
- Monitor CodeRabbit access logs

### Compliance
- Review with legal/compliance team if required
- Ensure alignment with data governance policies
- Document integration for audit purposes

## Monitoring and Maintenance

### Regular Tasks
- **Weekly**: Review CodeRabbit dashboard for issues
- **Monthly**: Check Personal Access Token expiration
- **Quarterly**: Review and update `.coderabbit.yaml` configuration

### Key Metrics to Monitor
- Review response time
- Developer satisfaction scores
- False positive rates
- Integration health status

## Support and Resources

### CodeRabbit Support
- **Documentation**: [docs.coderabbit.ai](https://docs.coderabbit.ai)
- **Support**: Available through CodeRabbit dashboard
- **Community**: GitHub discussions and Discord

### Azure DevOps Resources
- **Service Hooks Documentation**: [Microsoft Docs](https://docs.microsoft.com/en-us/azure/devops/service-hooks/)
- **Personal Access Tokens**: [Microsoft Docs](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate)

## Next Steps

1. **Complete the setup** following this guide
2. **Test with a sample PR** to verify integration
3. **Configure your pilot repositories** with appropriate settings
4. **Begin collecting baseline metrics** for comparison
5. **Start the 8-week pilot program** as outlined in the main pilot plan

---

**Document Version**: 1.0  
**Last Updated**: [Current Date]  
**Related Documents**: CodeRabbit Pilot Program Plan  
**Support Contact**: [Your IT/DevOps team contact] 