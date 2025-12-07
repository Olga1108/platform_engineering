"use strict";
// https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DockerProvider = void 0;
exports.dockerProviderRegistryAuthToTerraform = dockerProviderRegistryAuthToTerraform;
exports.dockerProviderRegistryAuthToHclTerraform = dockerProviderRegistryAuthToHclTerraform;
const cdktf = require("cdktf");
function dockerProviderRegistryAuthToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        address: cdktf.stringToTerraform(struct.address),
        auth_disabled: cdktf.booleanToTerraform(struct.authDisabled),
        config_file: cdktf.stringToTerraform(struct.configFile),
        config_file_content: cdktf.stringToTerraform(struct.configFileContent),
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username),
    };
}
function dockerProviderRegistryAuthToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        address: {
            value: cdktf.stringToHclTerraform(struct.address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        auth_disabled: {
            value: cdktf.booleanToHclTerraform(struct.authDisabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        config_file: {
            value: cdktf.stringToHclTerraform(struct.configFile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        config_file_content: {
            value: cdktf.stringToHclTerraform(struct.configFileContent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        password: {
            value: cdktf.stringToHclTerraform(struct.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username: {
            value: cdktf.stringToHclTerraform(struct.username),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs docker}
*/
class DockerProvider extends cdktf.TerraformProvider {
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DockerProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DockerProvider to import
    * @param importFromId The id of the existing DockerProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DockerProvider to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs docker} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DockerProviderConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'docker',
            terraformGeneratorMetadata: {
                providerName: 'docker',
                providerVersion: '3.6.2',
                providerVersionConstraint: '~> 3.0'
            },
            terraformProviderSource: 'kreuzwerker/docker'
        });
        this._caMaterial = config.caMaterial;
        this._certMaterial = config.certMaterial;
        this._certPath = config.certPath;
        this._context = config.context;
        this._disableDockerDaemonCheck = config.disableDockerDaemonCheck;
        this._host = config.host;
        this._keyMaterial = config.keyMaterial;
        this._sshOpts = config.sshOpts;
        this._alias = config.alias;
        this._registryAuth = config.registryAuth;
    }
    get caMaterial() {
        return this._caMaterial;
    }
    set caMaterial(value) {
        this._caMaterial = value;
    }
    resetCaMaterial() {
        this._caMaterial = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get caMaterialInput() {
        return this._caMaterial;
    }
    get certMaterial() {
        return this._certMaterial;
    }
    set certMaterial(value) {
        this._certMaterial = value;
    }
    resetCertMaterial() {
        this._certMaterial = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certMaterialInput() {
        return this._certMaterial;
    }
    get certPath() {
        return this._certPath;
    }
    set certPath(value) {
        this._certPath = value;
    }
    resetCertPath() {
        this._certPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certPathInput() {
        return this._certPath;
    }
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
    }
    resetContext() {
        this._context = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contextInput() {
        return this._context;
    }
    get disableDockerDaemonCheck() {
        return this._disableDockerDaemonCheck;
    }
    set disableDockerDaemonCheck(value) {
        this._disableDockerDaemonCheck = value;
    }
    resetDisableDockerDaemonCheck() {
        this._disableDockerDaemonCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableDockerDaemonCheckInput() {
        return this._disableDockerDaemonCheck;
    }
    get host() {
        return this._host;
    }
    set host(value) {
        this._host = value;
    }
    resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
    }
    get keyMaterial() {
        return this._keyMaterial;
    }
    set keyMaterial(value) {
        this._keyMaterial = value;
    }
    resetKeyMaterial() {
        this._keyMaterial = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyMaterialInput() {
        return this._keyMaterial;
    }
    get sshOpts() {
        return this._sshOpts;
    }
    set sshOpts(value) {
        this._sshOpts = value;
    }
    resetSshOpts() {
        this._sshOpts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sshOptsInput() {
        return this._sshOpts;
    }
    get alias() {
        return this._alias;
    }
    set alias(value) {
        this._alias = value;
    }
    resetAlias() {
        this._alias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aliasInput() {
        return this._alias;
    }
    get registryAuth() {
        return this._registryAuth;
    }
    set registryAuth(value) {
        this._registryAuth = value;
    }
    resetRegistryAuth() {
        this._registryAuth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get registryAuthInput() {
        return this._registryAuth;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            ca_material: cdktf.stringToTerraform(this._caMaterial),
            cert_material: cdktf.stringToTerraform(this._certMaterial),
            cert_path: cdktf.stringToTerraform(this._certPath),
            context: cdktf.stringToTerraform(this._context),
            disable_docker_daemon_check: cdktf.booleanToTerraform(this._disableDockerDaemonCheck),
            host: cdktf.stringToTerraform(this._host),
            key_material: cdktf.stringToTerraform(this._keyMaterial),
            ssh_opts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshOpts),
            alias: cdktf.stringToTerraform(this._alias),
            registry_auth: cdktf.listMapper(dockerProviderRegistryAuthToTerraform, true)(this._registryAuth),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            ca_material: {
                value: cdktf.stringToHclTerraform(this._caMaterial),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cert_material: {
                value: cdktf.stringToHclTerraform(this._certMaterial),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cert_path: {
                value: cdktf.stringToHclTerraform(this._certPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            context: {
                value: cdktf.stringToHclTerraform(this._context),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            disable_docker_daemon_check: {
                value: cdktf.booleanToHclTerraform(this._disableDockerDaemonCheck),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            host: {
                value: cdktf.stringToHclTerraform(this._host),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            key_material: {
                value: cdktf.stringToHclTerraform(this._keyMaterial),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ssh_opts: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshOpts),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            alias: {
                value: cdktf.stringToHclTerraform(this._alias),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            registry_auth: {
                value: cdktf.listMapperHcl(dockerProviderRegistryAuthToHclTerraform, true)(this._registryAuth),
                isBlock: true,
                type: "set",
                storageClassType: "DockerProviderRegistryAuthList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
exports.DockerProvider = DockerProvider;
// =================
// STATIC PROPERTIES
// =================
DockerProvider.tfResourceType = "docker";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0VBQXdFO0FBQ3hFLDJDQUEyQzs7O0FBNEczQyxzRkFhQztBQUdELDRGQThDQztBQXZLRCwrQkFBK0I7QUF5Ry9CLFNBQWdCLHFDQUFxQyxDQUFDLE1BQXVEO0lBQzNHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQyxPQUFPLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDNUYsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDakQsYUFBYSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQzdELFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN4RCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3ZFLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNuRCxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7S0FDcEQsQ0FBQTtBQUNILENBQUM7QUFHRCxTQUFnQix3Q0FBd0MsQ0FBQyxNQUF1RDtJQUM5RyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMs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QjtRQUM5QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBRSxDQUFDLENBQUE7SUFDNUgsQ0FBQzs7QUEvU0gsd0NBZ1RDO0FBOVNDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0csNkJBQWMsR0FBRyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3Ncbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEb2NrZXJQcm92aWRlckNvbmZpZyB7XG4gIC8qKlxuICAqIFBFTS1lbmNvZGVkIGNvbnRlbnQgb2YgRG9ja2VyIGhvc3QgQ0EgY2VydGlmaWNhdGVcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzI2NhX21hdGVyaWFsIERvY2tlclByb3ZpZGVyI2NhX21hdGVyaWFsfVxuICAqL1xuICByZWFkb25seSBjYU1hdGVyaWFsPzogc3RyaW5nO1xuICAvKipcbiAgKiBQRU0tZW5jb2RlZCBjb250ZW50IG9mIERvY2tlciBjbGllbnQgY2VydGlmaWNhdGVcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzI2NlcnRfbWF0ZXJpYWwgRG9ja2VyUHJvdmlkZXIjY2VydF9tYXRlcmlhbH1cbiAgKi9cbiAgcmVhZG9ubHkgY2VydE1hdGVyaWFsPzogc3RyaW5nO1xuICAvKipcbiAgKiBQYXRoIHRvIGRpcmVjdG9yeSB3aXRoIERvY2tlciBUTFMgY29uZmlnXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcyNjZXJ0X3BhdGggRG9ja2VyUHJvdmlkZXIjY2VydF9wYXRofVxuICAqL1xuICByZWFkb25seSBjZXJ0UGF0aD86IHN0cmluZztcbiAgLyoqXG4gICogVGhlIG5hbWUgb2YgdGhlIERvY2tlciBjb250ZXh0IHRvIHVzZS4gQ2FuIGFsc28gYmUgc2V0IHZpYSBgRE9DS0VSX0NPTlRFWFRgIGVudmlyb25tZW50IHZhcmlhYmxlLiBPdmVycmlkZXMgdGhlIGBob3N0YCBpZiBzZXQuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcyNjb250ZXh0IERvY2tlclByb3ZpZGVyI2NvbnRleHR9XG4gICovXG4gIHJlYWRvbmx5IGNvbnRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIElmIHNldCB0byBgdHJ1ZWAsIHRoZSBwcm92aWRlciB3aWxsIG5vdCBjaGVjayBpZiB0aGUgRG9ja2VyIGRhZW1vbiBpcyBydW5uaW5nLiBUaGlzIGlzIHVzZWZ1bCBmb3IgcmVzb3VyY2VzL2RhdGFfc291cmNlc3MgdGhhdCBkbyBub3QgcmVxdWlyZSBhIHJ1bm5pbmcgRG9ja2VyIGRhZW1vbiwgc3VjaCBhcyB0aGUgZGF0YSBzb3VyY2UgYGRvY2tlcl9yZWdpc3RyeV9pbWFnZWAuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcyNkaXNhYmxlX2RvY2tlcl9kYWVtb25fY2hlY2sgRG9ja2VyUHJvdmlkZXIjZGlzYWJsZV9kb2NrZXJfZGFlbW9uX2NoZWNrfVxuICAqL1xuICByZWFkb25seSBkaXNhYmxlRG9ja2VyRGFlbW9uQ2hlY2s/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gIC8qKlxuICAqIFRoZSBEb2NrZXIgZGFlbW9uIGFkZHJlc3NcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzI2hvc3QgRG9ja2VyUHJvdmlkZXIjaG9zdH1cbiAgKi9cbiAgcmVhZG9ubHkgaG9zdD86IHN0cmluZztcbiAgLyoqXG4gICogUEVNLWVuY29kZWQgY29udGVudCBvZiBEb2NrZXIgY2xpZW50IHByaXZhdGUga2V5XG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcyNrZXlfbWF0ZXJpYWwgRG9ja2VyUHJvdmlkZXIja2V5X21hdGVyaWFsfVxuICAqL1xuICByZWFkb25seSBrZXlNYXRlcmlhbD86IHN0cmluZztcbiAgLyoqXG4gICogQWRkaXRpb25hbCBTU0ggb3B0aW9uIGZsYWdzIHRvIGJlIGFwcGVuZGVkIHdoZW4gdXNpbmcgYHNzaDovL2AgcHJvdG9jb2xcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzI3NzaF9vcHRzIERvY2tlclByb3ZpZGVyI3NzaF9vcHRzfVxuICAqL1xuICByZWFkb25seSBzc2hPcHRzPzogc3RyaW5nW107XG4gIC8qKlxuICAqIEFsaWFzIG5hbWVcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzI2FsaWFzIERvY2tlclByb3ZpZGVyI2FsaWFzfVxuICAqL1xuICByZWFkb25seSBhbGlhcz86IHN0cmluZztcbiAgLyoqXG4gICogcmVnaXN0cnlfYXV0aCBibG9ja1xuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MjcmVnaXN0cnlfYXV0aCBEb2NrZXJQcm92aWRlciNyZWdpc3RyeV9hdXRofVxuICAqL1xuICByZWFkb25seSByZWdpc3RyeUF1dGg/OiBEb2NrZXJQcm92aWRlclJlZ2lzdHJ5QXV0aFtdIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIERvY2tlclByb3ZpZGVyUmVnaXN0cnlBdXRoIHtcbiAgLyoqXG4gICogQWRkcmVzcyBvZiB0aGUgcmVnaXN0cnlcbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzI2FkZHJlc3MgRG9ja2VyUHJvdmlkZXIjYWRkcmVzc31cbiAgKi9cbiAgcmVhZG9ubHkgYWRkcmVzczogc3RyaW5nO1xuICAvKipcbiAgKiBTZXR0aW5nIHRoaXMgdG8gYHRydWVgIHdpbGwgdGVsbCB0aGUgcHJvdmlkZXIgdGhhdCB0aGlzIHJlZ2lzdHJ5IGRvZXMgbm90IG5lZWQgYXV0aGVudGljYXRpb24uIER1ZSB0byB0aGUgZG9ja2VyIGludGVybmFscywgdGhlIHByb3ZpZGVyIHdpbGwgdXNlIGR1bW15IGNyZWRlbnRpYWxzIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2tyZXV6d2Vya2VyL3RlcnJhZm9ybS1wcm92aWRlci1kb2NrZXIvaXNzdWVzLzQ3MCBmb3IgbW9yZSBpbmZvcm1hdGlvbikuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICpcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcyNhdXRoX2Rpc2FibGVkIERvY2tlclByb3ZpZGVyI2F1dGhfZGlzYWJsZWR9XG4gICovXG4gIHJlYWRvbmx5IGF1dGhEaXNhYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgLyoqXG4gICogUGF0aCB0byBkb2NrZXIganNvbiBmaWxlIGZvciByZWdpc3RyeSBhdXRoLiBEZWZhdWx0cyB0byBgfi8uZG9ja2VyL2NvbmZpZy5qc29uYC4gSWYgYERPQ0tFUl9DT05GSUdgIGlzIHNldCwgdGhlIHZhbHVlIG9mIGBET0NLRVJfQ09ORklHYCBpcyB1c2VkIGFzIHRoZSBwYXRoLiBgY29uZmlnX2ZpbGVgIGhhcyBwcmVkZW5jZW4gb3ZlciBhbGwgb3RoZXIgb3B0aW9ucy5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzI2NvbmZpZ19maWxlIERvY2tlclByb3ZpZGVyI2NvbmZpZ19maWxlfVxuICAqL1xuICByZWFkb25seSBjb25maWdGaWxlPzogc3RyaW5nO1xuICAvKipcbiAgKiBQbGFpbiBjb250ZW50IG9mIHRoZSBkb2NrZXIganNvbiBmaWxlIGZvciByZWdpc3RyeSBhdXRoLiBgY29uZmlnX2ZpbGVfY29udGVudGAgaGFzIHByZWNlZGVuY2Ugb3ZlciB1c2VybmFtZS9wYXNzd29yZC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzI2NvbmZpZ19maWxlX2NvbnRlbnQgRG9ja2VyUHJvdmlkZXIjY29uZmlnX2ZpbGVfY29udGVudH1cbiAgKi9cbiAgcmVhZG9ubHkgY29uZmlnRmlsZUNvbnRlbnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAqIFBhc3N3b3JkIGZvciB0aGUgcmVnaXN0cnkuIERlZmF1bHRzIHRvIGBET0NLRVJfUkVHSVNUUllfUEFTU2AgZW52IHZhcmlhYmxlIGlmIHNldC5cbiAgKlxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzI3Bhc3N3b3JkIERvY2tlclByb3ZpZGVyI3Bhc3N3b3JkfVxuICAqL1xuICByZWFkb25seSBwYXNzd29yZD86IHN0cmluZztcbiAgLyoqXG4gICogVXNlcm5hbWUgZm9yIHRoZSByZWdpc3RyeS4gRGVmYXVsdHMgdG8gYERPQ0tFUl9SRUdJU1RSWV9VU0VSYCBlbnYgdmFyaWFibGUgaWYgc2V0LlxuICAqXG4gICogRG9jcyBhdCBUZXJyYWZvcm0gUmVnaXN0cnk6IHtAbGluayBodHRwczovL3JlZ2lzdHJ5LnRlcnJhZm9ybS5pby9wcm92aWRlcnMva3JldXp3ZXJrZXIvZG9ja2VyLzMuNi4yL2RvY3MjdXNlcm5hbWUgRG9ja2VyUHJvdmlkZXIjdXNlcm5hbWV9XG4gICovXG4gIHJlYWRvbmx5IHVzZXJuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9ja2VyUHJvdmlkZXJSZWdpc3RyeUF1dGhUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEb2NrZXJQcm92aWRlclJlZ2lzdHJ5QXV0aCB8IGNka3RmLklSZXNvbHZhYmxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkgfHwgY2RrdGYuVG9rZW5pemF0aW9uLmlzUmVzb2x2YWJsZShzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFkZHJlc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWRkcmVzcyksXG4gICAgYXV0aF9kaXNhYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuYXV0aERpc2FibGVkKSxcbiAgICBjb25maWdfZmlsZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb25maWdGaWxlKSxcbiAgICBjb25maWdfZmlsZV9jb250ZW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbmZpZ0ZpbGVDb250ZW50KSxcbiAgICBwYXNzd29yZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXNzd29yZCksXG4gICAgdXNlcm5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlcm5hbWUpLFxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRvY2tlclByb3ZpZGVyUmVnaXN0cnlBdXRoVG9IY2xUZXJyYWZvcm0oc3RydWN0PzogRG9ja2VyUHJvdmlkZXJSZWdpc3RyeUF1dGggfCBjZGt0Zi5JUmVzb2x2YWJsZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpIHx8IGNka3RmLlRva2VuaXphdGlvbi5pc1Jlc29sdmFibGUoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgY29uc3QgYXR0cnMgPSB7XG4gICAgYWRkcmVzczoge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEuYWRkcmVzcyksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgYXV0aF9kaXNhYmxlZDoge1xuICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybShzdHJ1Y3QhLmF1dGhEaXNhYmxlZCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcImJvb2xlYW5cIixcbiAgICB9LFxuICAgIGNvbmZpZ19maWxlOiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb25maWdGaWxlKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICBjb25maWdfZmlsZV9jb250ZW50OiB7XG4gICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0oc3RydWN0IS5jb25maWdGaWxlQ29udGVudCksXG4gICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybShzdHJ1Y3QhLnBhc3N3b3JkKSxcbiAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB1c2VybmFtZToge1xuICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHN0cnVjdCEudXNlcm5hbWUpLFxuICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICB9LFxuICB9O1xuXG4gIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGF0dHJzKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkpO1xufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcyBkb2NrZXJ9XG4qL1xuZXhwb3J0IGNsYXNzIERvY2tlclByb3ZpZGVyIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUHJvdmlkZXIge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGUgPSBcImRvY2tlclwiO1xuXG4gIC8vID09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBNZXRob2RzXG4gIC8vID09PT09PT09PT09PT09XG4gIC8qKlxuICAqIEdlbmVyYXRlcyBDREtURiBjb2RlIGZvciBpbXBvcnRpbmcgYSBEb2NrZXJQcm92aWRlciByZXNvdXJjZSB1cG9uIHJ1bm5pbmcgXCJjZGt0ZiBwbGFuIDxzdGFjay1uYW1lPlwiXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaW1wb3J0VG9JZCBUaGUgY29uc3RydWN0IGlkIHVzZWQgaW4gdGhlIGdlbmVyYXRlZCBjb25maWcgZm9yIHRoZSBEb2NrZXJQcm92aWRlciB0byBpbXBvcnRcbiAgKiBAcGFyYW0gaW1wb3J0RnJvbUlkIFRoZSBpZCBvZiB0aGUgZXhpc3RpbmcgRG9ja2VyUHJvdmlkZXIgdGhhdCBzaG91bGQgYmUgaW1wb3J0ZWQuIFJlZmVyIHRvIHRoZSB7QGxpbmsgaHR0cHM6Ly9yZWdpc3RyeS50ZXJyYWZvcm0uaW8vcHJvdmlkZXJzL2tyZXV6d2Vya2VyL2RvY2tlci8zLjYuMi9kb2NzI2ltcG9ydCBpbXBvcnQgc2VjdGlvbn0gaW4gdGhlIGRvY3VtZW50YXRpb24gb2YgdGhpcyByZXNvdXJjZSBmb3IgdGhlIGlkIHRvIHVzZVxuICAqIEBwYXJhbSBwcm92aWRlcj8gT3B0aW9uYWwgaW5zdGFuY2Ugb2YgdGhlIHByb3ZpZGVyIHdoZXJlIHRoZSBEb2NrZXJQcm92aWRlciB0byBpbXBvcnQgaXMgZm91bmRcbiAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUNvbmZpZ0ZvckltcG9ydChzY29wZTogQ29uc3RydWN0LCBpbXBvcnRUb0lkOiBzdHJpbmcsIGltcG9ydEZyb21JZDogc3RyaW5nLCBwcm92aWRlcj86IGNka3RmLlRlcnJhZm9ybVByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgY2RrdGYuSW1wb3J0YWJsZVJlc291cmNlKHNjb3BlLCBpbXBvcnRUb0lkLCB7IHRlcnJhZm9ybVJlc291cmNlVHlwZTogXCJkb2NrZXJcIiwgaW1wb3J0SWQ6IGltcG9ydEZyb21JZCwgcHJvdmlkZXIgfSk7XG4gICAgICB9XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vcmVnaXN0cnkudGVycmFmb3JtLmlvL3Byb3ZpZGVycy9rcmV1endlcmtlci9kb2NrZXIvMy42LjIvZG9jcyBkb2NrZXJ9IFJlc291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERvY2tlclByb3ZpZGVyQ29uZmlnID0ge31cbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRG9ja2VyUHJvdmlkZXJDb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnZG9ja2VyJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2RvY2tlcicsXG4gICAgICAgIHByb3ZpZGVyVmVyc2lvbjogJzMuNi4yJyxcbiAgICAgICAgcHJvdmlkZXJWZXJzaW9uQ29uc3RyYWludDogJ34+IDMuMCdcbiAgICAgIH0sXG4gICAgICB0ZXJyYWZvcm1Qcm92aWRlclNvdXJjZTogJ2tyZXV6d2Vya2VyL2RvY2tlcidcbiAgICB9KTtcbiAgICB0aGlzLl9jYU1hdGVyaWFsID0gY29uZmlnLmNhTWF0ZXJpYWw7XG4gICAgdGhpcy5fY2VydE1hdGVyaWFsID0gY29uZmlnLmNlcnRNYXRlcmlhbDtcbiAgICB0aGlzLl9jZXJ0UGF0aCA9IGNvbmZpZy5jZXJ0UGF0aDtcbiAgICB0aGlzLl9jb250ZXh0ID0gY29uZmlnLmNvbnRleHQ7XG4gICAgdGhpcy5fZGlzYWJsZURvY2tlckRhZW1vbkNoZWNrID0gY29uZmlnLmRpc2FibGVEb2NrZXJEYWVtb25DaGVjaztcbiAgICB0aGlzLl9ob3N0ID0gY29uZmlnLmhvc3Q7XG4gICAgdGhpcy5fa2V5TWF0ZXJpYWwgPSBjb25maWcua2V5TWF0ZXJpYWw7XG4gICAgdGhpcy5fc3NoT3B0cyA9IGNvbmZpZy5zc2hPcHRzO1xuICAgIHRoaXMuX2FsaWFzID0gY29uZmlnLmFsaWFzO1xuICAgIHRoaXMuX3JlZ2lzdHJ5QXV0aCA9IGNvbmZpZy5yZWdpc3RyeUF1dGg7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGNhX21hdGVyaWFsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NhTWF0ZXJpYWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNhTWF0ZXJpYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhTWF0ZXJpYWw7XG4gIH1cbiAgcHVibGljIHNldCBjYU1hdGVyaWFsKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jYU1hdGVyaWFsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2FNYXRlcmlhbCgpIHtcbiAgICB0aGlzLl9jYU1hdGVyaWFsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYU1hdGVyaWFsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhTWF0ZXJpYWw7XG4gIH1cblxuICAvLyBjZXJ0X21hdGVyaWFsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NlcnRNYXRlcmlhbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2VydE1hdGVyaWFsKCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0TWF0ZXJpYWw7XG4gIH1cbiAgcHVibGljIHNldCBjZXJ0TWF0ZXJpYWwodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NlcnRNYXRlcmlhbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENlcnRNYXRlcmlhbCgpIHtcbiAgICB0aGlzLl9jZXJ0TWF0ZXJpYWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNlcnRNYXRlcmlhbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0TWF0ZXJpYWw7XG4gIH1cblxuICAvLyBjZXJ0X3BhdGggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2VydFBhdGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNlcnRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0UGF0aDtcbiAgfVxuICBwdWJsaWMgc2V0IGNlcnRQYXRoKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9jZXJ0UGF0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENlcnRQYXRoKCkge1xuICAgIHRoaXMuX2NlcnRQYXRoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjZXJ0UGF0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0UGF0aDtcbiAgfVxuXG4gIC8vIGNvbnRleHQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29udGV4dD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbnRleHQodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2NvbnRleHQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb250ZXh0KCkge1xuICAgIHRoaXMuX2NvbnRleHQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRleHRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgfVxuXG4gIC8vIGRpc2FibGVfZG9ja2VyX2RhZW1vbl9jaGVjayAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kaXNhYmxlRG9ja2VyRGFlbW9uQ2hlY2s/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGRpc2FibGVEb2NrZXJEYWVtb25DaGVjaygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZURvY2tlckRhZW1vbkNoZWNrO1xuICB9XG4gIHB1YmxpYyBzZXQgZGlzYWJsZURvY2tlckRhZW1vbkNoZWNrKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kaXNhYmxlRG9ja2VyRGFlbW9uQ2hlY2sgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREaXNhYmxlRG9ja2VyRGFlbW9uQ2hlY2soKSB7XG4gICAgdGhpcy5fZGlzYWJsZURvY2tlckRhZW1vbkNoZWNrID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkaXNhYmxlRG9ja2VyRGFlbW9uQ2hlY2tJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZURvY2tlckRhZW1vbkNoZWNrO1xuICB9XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ob3N0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLl9ob3N0O1xuICB9XG4gIHB1YmxpYyBzZXQgaG9zdCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faG9zdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEhvc3QoKSB7XG4gICAgdGhpcy5faG9zdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaG9zdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ob3N0O1xuICB9XG5cbiAgLy8ga2V5X21hdGVyaWFsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2tleU1hdGVyaWFsPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrZXlNYXRlcmlhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5TWF0ZXJpYWw7XG4gIH1cbiAgcHVibGljIHNldCBrZXlNYXRlcmlhbCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fa2V5TWF0ZXJpYWwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLZXlNYXRlcmlhbCgpIHtcbiAgICB0aGlzLl9rZXlNYXRlcmlhbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga2V5TWF0ZXJpYWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5TWF0ZXJpYWw7XG4gIH1cblxuICAvLyBzc2hfb3B0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zc2hPcHRzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHNzaE9wdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NzaE9wdHM7XG4gIH1cbiAgcHVibGljIHNldCBzc2hPcHRzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3NzaE9wdHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTc2hPcHRzKCkge1xuICAgIHRoaXMuX3NzaE9wdHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNzaE9wdHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3NoT3B0cztcbiAgfVxuXG4gIC8vIGFsaWFzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsaWFzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhbGlhcygpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpYXM7XG4gIH1cbiAgcHVibGljIHNldCBhbGlhcyh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYWxpYXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGlhcygpIHtcbiAgICB0aGlzLl9hbGlhcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxpYXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpYXM7XG4gIH1cblxuICAvLyByZWdpc3RyeV9hdXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlZ2lzdHJ5QXV0aD86IERvY2tlclByb3ZpZGVyUmVnaXN0cnlBdXRoW10gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmVnaXN0cnlBdXRoKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWdpc3RyeUF1dGg7XG4gIH1cbiAgcHVibGljIHNldCByZWdpc3RyeUF1dGgodmFsdWU6IERvY2tlclByb3ZpZGVyUmVnaXN0cnlBdXRoW10gfCBjZGt0Zi5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3JlZ2lzdHJ5QXV0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlZ2lzdHJ5QXV0aCgpIHtcbiAgICB0aGlzLl9yZWdpc3RyeUF1dGggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlZ2lzdHJ5QXV0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWdpc3RyeUF1dGg7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhX21hdGVyaWFsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jYU1hdGVyaWFsKSxcbiAgICAgIGNlcnRfbWF0ZXJpYWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NlcnRNYXRlcmlhbCksXG4gICAgICBjZXJ0X3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NlcnRQYXRoKSxcbiAgICAgIGNvbnRleHQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvbnRleHQpLFxuICAgICAgZGlzYWJsZV9kb2NrZXJfZGFlbW9uX2NoZWNrOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZGlzYWJsZURvY2tlckRhZW1vbkNoZWNrKSxcbiAgICAgIGhvc3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2hvc3QpLFxuICAgICAga2V5X21hdGVyaWFsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9rZXlNYXRlcmlhbCksXG4gICAgICBzc2hfb3B0czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3NzaE9wdHMpLFxuICAgICAgYWxpYXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FsaWFzKSxcbiAgICAgIHJlZ2lzdHJ5X2F1dGg6IGNka3RmLmxpc3RNYXBwZXIoZG9ja2VyUHJvdmlkZXJSZWdpc3RyeUF1dGhUb1RlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fcmVnaXN0cnlBdXRoKSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVIY2xBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGNhX21hdGVyaWFsOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9jYU1hdGVyaWFsKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgY2VydF9tYXRlcmlhbDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fY2VydE1hdGVyaWFsKSxcbiAgICAgICAgaXNCbG9jazogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwic2ltcGxlXCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nXCIsXG4gICAgICB9LFxuICAgICAgY2VydF9wYXRoOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9jZXJ0UGF0aCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvSGNsVGVycmFmb3JtKHRoaXMuX2NvbnRleHQpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlX2RvY2tlcl9kYWVtb25fY2hlY2s6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmJvb2xlYW5Ub0hjbFRlcnJhZm9ybSh0aGlzLl9kaXNhYmxlRG9ja2VyRGFlbW9uQ2hlY2spLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJib29sZWFuXCIsXG4gICAgICB9LFxuICAgICAgaG9zdDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5faG9zdCksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGtleV9tYXRlcmlhbDoge1xuICAgICAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9IY2xUZXJyYWZvcm0odGhpcy5fa2V5TWF0ZXJpYWwpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJzaW1wbGVcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgICBzc2hfb3B0czoge1xuICAgICAgICB2YWx1ZTogY2RrdGYubGlzdE1hcHBlckhjbChjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSwgZmFsc2UpKHRoaXMuX3NzaE9wdHMpLFxuICAgICAgICBpc0Jsb2NrOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIHN0b3JhZ2VDbGFzc1R5cGU6IFwic3RyaW5nTGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb0hjbFRlcnJhZm9ybSh0aGlzLl9hbGlhcyksXG4gICAgICAgIGlzQmxvY2s6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcInNpbXBsZVwiLFxuICAgICAgICBzdG9yYWdlQ2xhc3NUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgfSxcbiAgICAgIHJlZ2lzdHJ5X2F1dGg6IHtcbiAgICAgICAgdmFsdWU6IGNka3RmLmxpc3RNYXBwZXJIY2woZG9ja2VyUHJvdmlkZXJSZWdpc3RyeUF1dGhUb0hjbFRlcnJhZm9ybSwgdHJ1ZSkodGhpcy5fcmVnaXN0cnlBdXRoKSxcbiAgICAgICAgaXNCbG9jazogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgc3RvcmFnZUNsYXNzVHlwZTogXCJEb2NrZXJQcm92aWRlclJlZ2lzdHJ5QXV0aExpc3RcIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlbW92ZSB1bmRlZmluZWQgYXR0cmlidXRlc1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkICkpXG4gIH1cbn1cbiJdfQ==