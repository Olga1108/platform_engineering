### Challenges Faced & Solutions

1. **Challenge:** Python "externally-managed-environment" error
   - **Solution:** Created Python virtual environment (`.venv`) and installed LocalStack there

2. **Challenge:** CDK asset publishing hostname resolution
   - **Solution:** Added hosts entry: `127.0.0.1 cdk-hnb659fds-assets-000000000000-us-west-2.localhost`

3. **Challenge:** CDK v2 asset publishing JSON/XML format incompatibility with LocalStack
   - **Solution:** Deployed stacks directly via CloudFormation API using synthesized templates from `cdk.out/` directory